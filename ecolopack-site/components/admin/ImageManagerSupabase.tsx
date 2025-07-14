'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useSupabaseImages } from '@/hooks/useSupabaseImages';
import { supabase } from '@/lib/supabase';

export default function ImageManagerSupabase() {
  const { images, loading, error, uploadImage, updateImage, deleteImage } = useSupabaseImages();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [newImage, setNewImage] = useState({
    name: '',
    category: 'hero',
    section: '',
    file: null as File | null
  });
  
  const categories = [
    { value: 'all', label: 'すべて' },
    { value: 'hero', label: 'ヒーロー画像' },
    { value: 'products', label: '製品画像' },
    { value: 'company', label: '会社画像' },
    { value: 'other', label: 'その他' }
  ];

  const sections = [
    { value: 'hero', label: 'ヒーローセクション' },
    { value: 'products-blanform-top', label: '製品 - ブランフォームトップ' },
    { value: 'products-blanform', label: '製品 - ブランフォーム' },
    { value: 'products-blanform-big', label: '製品 - ブランフォームBIG' },
    { value: 'products-ecolopat', label: '製品 - エコロパット' },
    { value: 'products-blanform-green', label: '製品 - ブランフォームグリーン' },
    { value: 'company', label: '会社情報' },
    { value: 'other', label: 'その他' }
  ];

  const handleUpload = async () => {
    if (!newImage.file) return;
    
    setIsUploading(true);
    try {
      const result = await uploadImage(newImage.file, {
        name: newImage.name || newImage.file.name.split('.')[0],
        category: newImage.category,
        section: newImage.section || undefined,
        is_default: false
      });

      if (result.success) {
        alert('画像が正常にアップロードされました');
        setShowUploadModal(false);
        setNewImage({ name: '', category: 'hero', section: '', file: null });
        setPreviewUrl('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        alert(`エラー: ${result.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('アップロード中にエラーが発生しました');
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageUpdate = async (imageId: string, file: File) => {
    setIsUploading(true);
    try {
      // Upload new file
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `images/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('site-images')
        .getPublicUrl(filePath);

      // Update image URL in database
      const result = await updateImage(imageId, { url: publicUrl });

      if (result.success) {
        alert('画像が更新されました');
      } else {
        alert(`エラー: ${result.error}`);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('更新中にエラーが発生しました');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const image = images.find(img => img.id === id);
    if (image?.is_default) {
      alert('デフォルト画像は削除できません');
      return;
    }
    
    if (confirm('この画像を削除してもよろしいですか？')) {
      const result = await deleteImage(id);
      if (result.success) {
        alert('画像が削除されました');
      } else {
        alert(`エラー: ${result.error}`);
      }
    }
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">エラー: {error}</p>
        <p className="text-sm text-red-600 mt-2">
          Supabaseの接続情報を確認してください。
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            画像管理 (Supabase)
          </h2>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            新規アップロード
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">カテゴリー</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            画像数: {filteredImages.length} / Supabaseで管理されています
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="relative h-48 bg-gray-50 group cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  id={`image-upload-${image.id}`}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      await handleImageUpdate(image.id, file);
                    }
                  }}
                  className="hidden"
                />
                <label htmlFor={`image-upload-${image.id}`} className="block w-full h-full">
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 text-center">
                      <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm font-medium">クリックして変更</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{image.name}</h3>
                <div className="flex gap-2 mb-2">
                  {image.is_default && (
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      デフォルト画像
                    </span>
                  )}
                  {image.section && (
                    <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                      使用中
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  カテゴリー: {categories.find(c => c.value === image.category)?.label}
                </p>
                {image.section && (
                  <p className="text-sm text-gray-500 mb-2">
                    使用箇所: {image.section}
                  </p>
                )}
                <p className="text-xs text-gray-400 mb-3">
                  アップロード日: {new Date(image.upload_date).toLocaleDateString('ja-JP')}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setNewImage({
                        name: image.name,
                        category: image.category,
                        section: image.section || '',
                        file: null
                      });
                      setShowUploadModal(true);
                    }}
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    編集
                  </button>
                  {!image.is_default && (
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      削除
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">画像アップロード</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                画像ファイル
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setNewImage({ ...newImage, file });
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewUrl(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full"
              />
              {previewUrl && (
                <div className="mt-2 relative h-32 bg-gray-50">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                画像名
              </label>
              <input
                type="text"
                value={newImage.name}
                onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="画像の名前を入力"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                カテゴリー
              </label>
              <select
                value={newImage.category}
                onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {categories.filter(c => c.value !== 'all').map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                使用箇所
              </label>
              <select
                value={newImage.section}
                onChange={(e) => setNewImage({ ...newImage, section: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">選択してください</option>
                {sections.map(sec => (
                  <option key={sec.value} value={sec.label}>{sec.label}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setNewImage({ name: '', category: 'hero', section: '', file: null });
                  setPreviewUrl('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                disabled={isUploading}
              >
                キャンセル
              </button>
              <button
                onClick={handleUpload}
                disabled={!newImage.file || isUploading}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isUploading ? 'アップロード中...' : 'アップロード'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}