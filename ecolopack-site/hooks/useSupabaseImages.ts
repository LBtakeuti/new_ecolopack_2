'use client'

import { useState, useEffect } from 'react'
import { supabase, SiteImage } from '@/lib/supabase'
import { RealtimeChannel } from '@supabase/supabase-js'

export function useSupabaseImages(category?: string) {
  const [images, setImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let channel: RealtimeChannel

    const fetchImages = async () => {
      try {
        setLoading(true)
        let query = supabase.from('site_images').select('*')
        
        if (category && category !== 'all') {
          query = query.eq('category', category)
        }
        
        const { data, error } = await query.order('created_at', { ascending: false })
        
        if (error) throw error
        setImages(data || [])
      } catch (err) {
        console.error('Error fetching images:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch images')
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchImages()

    // Set up realtime subscription
    channel = supabase
      .channel('site_images_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'site_images'
        },
        (payload) => {
          console.log('Realtime update:', payload)
          fetchImages() // Refetch on any change
        }
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [category])

  const uploadImage = async (file: File, imageData: Partial<SiteImage>) => {
    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `images/${fileName}`

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('site-images')
        .getPublicUrl(filePath)

      // Save image data to database
      const { data, error } = await supabase
        .from('site_images')
        .insert({
          ...imageData,
          url: publicUrl,
          upload_date: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      
      return { success: true, data }
    } catch (err) {
      console.error('Error uploading image:', err)
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to upload image' 
      }
    }
  }

  const updateImage = async (id: string, updates: Partial<SiteImage>) => {
    try {
      const { data, error } = await supabase
        .from('site_images')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      return { success: true, data }
    } catch (err) {
      console.error('Error updating image:', err)
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to update image' 
      }
    }
  }

  const deleteImage = async (id: string) => {
    try {
      // Get image data first to delete from storage
      const { data: imageData, error: fetchError } = await supabase
        .from('site_images')
        .select('url')
        .eq('id', id)
        .single()

      if (fetchError) throw fetchError

      // Extract file path from URL if it's a Supabase storage URL
      if (imageData.url.includes('supabase')) {
        const urlParts = imageData.url.split('/storage/v1/object/public/site-images/')
        if (urlParts.length > 1) {
          const filePath = urlParts[1]
          await supabase.storage.from('site-images').remove([filePath])
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('site_images')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      return { success: true }
    } catch (err) {
      console.error('Error deleting image:', err)
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to delete image' 
      }
    }
  }

  return {
    images,
    loading,
    error,
    uploadImage,
    updateImage,
    deleteImage
  }
}