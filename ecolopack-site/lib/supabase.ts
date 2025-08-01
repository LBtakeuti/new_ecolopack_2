import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface SiteImage {
  id: string
  url: string
  name: string
  category: string
  section?: string
  upload_date: string
  is_default: boolean
  created_at?: string
  updated_at?: string
}