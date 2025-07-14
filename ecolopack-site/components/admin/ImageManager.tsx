'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ImageItem, initializeImages } from '@/lib/defaultImages';

// Resize image to reduce file size for localStorage
const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('[resizeImage] Starting resize for file:', file.name, 'Size:', file.size);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('[resizeImage] FileReader loaded');
      
      if (!e.target?.result) {
        reject(new Error('ファイルの読み込みに失敗しました'));
        return;
      }

      const img = new window.Image();
      img.onload = () => {
        console.log('[resizeImage] Image loaded, original dimensions:', img.width, 'x', img.height);
        
        try {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Calculate new dimensions while maintaining aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round(height * (maxWidth / width));
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round(width * (maxHeight / height));
              height = maxHeight;
            }
          }

          console.log('[resizeImage] New dimensions:', width, 'x', height);

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Canvas context の取得に失敗しました'));
            return;
          }

          // Draw image on canvas
          ctx.drawImage(img, 0, 0, width, height);
          
          // Try different quality levels to optimize size
          let quality = 0.8;
          let base64 = canvas.toDataURL('image/jpeg', quality);
          
          // If still too large, reduce quality
          while (base64.length > 2 * 1024 * 1024 && quality > 0.3) {
            quality -= 0.1;
            base64 = canvas.toDataURL('image/jpeg', quality);
            console.log('[resizeImage] Trying quality:', quality, 'Size:', (base64.length / (1024 * 1024)).toFixed(2), 'MB');
          }
          
          console.log('[resizeImage] Final image quality:', quality, 'Size:', (base64.length / (1024 * 1024)).toFixed(2), 'MB');
          
          if (!base64 || !base64.startsWith('data:image/')) {
            reject(new Error('画像の変換に失敗しました'));
            return;
          }
          
          resolve(base64);
        } catch (canvasError) {
          console.error('[resizeImage] Canvas error:', canvasError);
          reject(new Error('画像の処理中にエラーが発生しました: ' + (canvasError as Error).message));
        }
      };
      
      img.onerror = (error) => {
        console.error('[resizeImage] Image load error:', error);
        reject(new Error('画像の読み込みに失敗しました。ファイルが破損している可能性があります。'));
      };
      
      img.src = e.target.result as string;
    };
    
    reader.onerror = (error) => {
      console.error('[resizeImage] FileReader error:', error);
      reject(new Error('ファイルの読み込みに失敗しました'));
    };
    
    try {
      reader.readAsDataURL(file);
    } catch (readerError) {
      console.error('[resizeImage] Reader start error:', readerError);
      reject(new Error('ファイルの読み込み開始に失敗しました'));
    }
  });
};

export default function ImageManager() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<ImageItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);
  
  const [newImage, setNewImage] = useState({
    name: '',
    category: 'hero',
    section: '',
    file: null as File | null
  });
  
  // デバッグ用：コンポーネントマウント時のログ
  console.log('[ImageManager] Component mounted');

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

  useEffect(() => {
    console.log('[ImageManager] Component mounted, initializing images');
    
    // 初期化を遅延実行して確実にloadできるようにする
    const initializeAfterMount = () => {
      const loadedImages = initializeImages();
      console.log('[ImageManager] Loaded images count:', loadedImages.length);
      console.log('[ImageManager] First few images:', loadedImages.slice(0, 3));
      setImages(loadedImages);
      
      // 強制的にlocalStorageを確認・修正
      if (loadedImages.length === 0) {
        console.log('[ImageManager] No images loaded, forcing initialization');
        localStorage.removeItem('siteImages');
        const freshImages = initializeImages();
        setImages(freshImages);
      }
    };
    
    // 短い遅延でDOM準備完了後に実行
    setTimeout(initializeAfterMount, 100);
    
    // Listen for storage changes from other tabs
    const handleStorageChange = () => {
      console.log('[ImageManager] Storage/imagesUpdated event received');
      const loadedImages = initializeImages();
      console.log('[ImageManager] Reloaded images:', loadedImages.length);
      setImages(loadedImages);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('imagesUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('imagesUpdated', handleStorageChange);
    };
  }, []);

  const processFile = async (file: File, isEdit: boolean = false) => {
    console.log('[ImageManager] processFile called:', { fileName: file.name, fileSize: file.size, fileType: file.type });
    
    // Enhanced file validation
    if (!file) {
      alert('ファイルが選択されていません');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('画像ファイル（JPG、PNG、GIF等）を選択してください。選択されたファイル: ' + file.type);
      return;
    }

    // Check file size (before processing)
    const maxFileSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxFileSize) {
      alert('ファイルサイズが大きすぎます（最大50MB）。より小さいファイルを選択してください。');
      return;
    }

    setIsUploading(true);
    try {
      console.log('[ImageManager] Starting image processing...');
      
      // Resize image to reduce file size for localStorage
      console.log('[ImageManager] Resizing image...');
      const resizedBase64 = await resizeImage(file, 1200, 1200);
      console.log('[ImageManager] Resized image length:', resizedBase64.length);
      console.log('[ImageManager] Resized image preview:', resizedBase64.substring(0, 100) + '...');
      
      // Validate base64 result
      if (!resizedBase64 || !resizedBase64.startsWith('data:image/')) {
        throw new Error('画像の変換に失敗しました');
      }
      
      // Check if resized image is still too large (localStorage typically has 5-10MB limit)
      const sizeInMB = (resizedBase64.length / (1024 * 1024)).toFixed(2);
      console.log('[ImageManager] Resized image size:', sizeInMB, 'MB');
      
      if (resizedBase64.length > 3 * 1024 * 1024) { // 3MB limit for safety
        alert(`画像のファイルサイズが大きすぎます（${sizeInMB}MB）。より小さい画像を選択するか、画質を下げてください。`);
        return;
      }
      
      if (isEdit && selectedImage) {
        console.log('[ImageManager] Updating selected image');
        setSelectedImage({ ...selectedImage, url: resizedBase64 });
      } else {
        console.log('[ImageManager] Setting preview URL and new image');
        setPreviewUrl(resizedBase64);
        setNewImage(prev => ({ 
          ...prev, 
          file,
          name: prev.name || file.name.replace(/\.[^/.]+$/, "") // Use filename if no name set
        }));
      }
      
      console.log('[ImageManager] Image processing completed successfully');
    } catch (error) {
      console.error('[ImageManager] Image processing error:', error);
      alert('画像の処理中にエラーが発生しました: ' + (error as Error).message + '\n\nファイル形式が正しいか確認してください。');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processFile(file, isEdit);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    await processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleUpload = async () => {
    console.log('[ImageManager] handleUpload called');
    console.log('[ImageManager] newImage:', newImage);
    console.log('[ImageManager] previewUrl exists:', !!previewUrl);
    console.log('[ImageManager] previewUrl length:', previewUrl?.length);
    
    // Enhanced validation
    if (!newImage.file) {
      alert('画像ファイルを選択してください');
      return;
    }
    
    if (!previewUrl || previewUrl.length === 0) {
      alert('画像が正しく処理されていません。再度ファイルを選択してください。');
      return;
    }
    
    if (!newImage.name || newImage.name.trim() === '') {
      alert('画像名を入力してください');
      return;
    }

    // Validate base64 format
    if (!previewUrl.startsWith('data:image/')) {
      console.error('[ImageManager] Invalid preview URL format:', previewUrl.substring(0, 50));
      alert('画像データの形式が正しくありません。再度ファイルを選択してください。');
      return;
    }

    setIsUploading(true);
    try {
      console.log('[ImageManager] Starting upload process...');
      
      // 製品画像の場合、適切なIDを生成
      let imageId = `upload-${Date.now()}`;
      if (newImage.category === 'products' && newImage.section) {
        const productIdMap: { [key: string]: string } = {
          '製品 - ブランフォームトップ': 'product-1-custom',
          '製品 - ブランフォーム': 'product-2-custom',
          '製品 - ブランフォームBIG': 'product-3-custom',
          '製品 - エコロパット': 'product-4-custom',
          '製品 - ブランフォームグリーン': 'product-5-custom'
        };
        imageId = productIdMap[newImage.section] || imageId;
        console.log('[ImageManager] Generated imageId for product:', imageId);
      }

      const imageItem: ImageItem = {
        id: imageId,
        url: previewUrl,
        name: newImage.name.trim(),
        category: newImage.category,
        section: newImage.section || undefined,
        uploadDate: new Date().toISOString()
      };
      
      console.log('[ImageManager] Created imageItem:', { 
        id: imageItem.id, 
        name: imageItem.name, 
        category: imageItem.category, 
        section: imageItem.section,
        urlLength: imageItem.url.length 
      });

      // 同じIDまたはsectionの画像が既に存在する場合は置き換える
      let updatedImages;
      const existingIndex = images.findIndex(img => 
        (newImage.category === 'products' && img.section === newImage.section && !img.isDefault) ||
        img.id === imageId
      );
      console.log('[ImageManager] Existing image index:', existingIndex);
      
      if (existingIndex >= 0) {
        // 既存の画像を置き換え
        updatedImages = [...images];
        updatedImages[existingIndex] = imageItem;
        console.log('[ImageManager] Replacing existing image at index:', existingIndex);
      } else {
        // 新規追加
        updatedImages = [...images, imageItem];
        console.log('[ImageManager] Adding new image');
      }
      
      console.log('[ImageManager] Updated images count:', updatedImages.length);
      
      // State を先に更新
      setImages(updatedImages);
      
      // localStorage に保存
      console.log('[ImageManager] Saving to localStorage...');
      try {
        const jsonString = JSON.stringify(updatedImages);
        console.log('[ImageManager] JSON string length:', jsonString.length);
        
        localStorage.setItem('siteImages', jsonString);
        
        // Verify localStorage save
        const verifyStorage = localStorage.getItem('siteImages');
        if (!verifyStorage) {
          throw new Error('LocalStorage への保存に失敗しました');
        }
        
        const parsedVerify = JSON.parse(verifyStorage);
        console.log('[ImageManager] Verified saved images count:', parsedVerify.length);
        
        // イベント発火で他のコンポーネントに通知
        console.log('[ImageManager] Dispatching update events...');
        setTimeout(() => {
          window.dispatchEvent(new Event('imagesUpdated'));
          window.dispatchEvent(new StorageEvent('storage', {
            key: 'siteImages',
            newValue: jsonString,
            url: window.location.href
          }));
        }, 100);
        
        console.log('[ImageManager] Upload process completed successfully');
        
        // Reset form
        setNewImage({ name: '', category: 'hero', section: '', file: null });
        setPreviewUrl('');
        setShowUploadModal(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
        
        alert('画像が正常にアップロードされました！サイトに反映されているか確認してください。');
        
      } catch (storageError) {
        console.error('[ImageManager] localStorage error:', storageError);
        
        // localStorage 容量チェック
        const storageData = localStorage.getItem('siteImages');
        const currentSize = storageData ? (storageData.length / (1024 * 1024)).toFixed(2) : '0';
        
        alert(`画像の保存に失敗しました。\nエラー: ${(storageError as Error).message}\n現在の使用量: ${currentSize}MB\n\nローカルストレージの容量を確認してください。`);
        throw storageError;
      }
      
    } catch (error) {
      console.error('[ImageManager] Upload error:', error);
      alert('アップロード中にエラーが発生しました: ' + (error as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpdate = (id: string, updates: Partial<ImageItem>) => {
    try {
      const updatedImages = images.map(img => 
        img.id === id ? { ...img, ...updates } : img
      );
      setImages(updatedImages);
      localStorage.setItem('siteImages', JSON.stringify(updatedImages));
      console.log('[ImageManager] Dispatching imagesUpdated event');
      window.dispatchEvent(new Event('imagesUpdated'));
      console.log('[ImageManager] Updated images saved to localStorage:', updatedImages);
      setSelectedImage(null);
      if (editFileInputRef.current) editFileInputRef.current.value = '';
      alert('画像が正常に更新されました');
    } catch (error) {
      console.error('Update error:', error);
      alert('更新中にエラーが発生しました');
    }
  };

  const handleDelete = (id: string) => {
    const image = images.find(img => img.id === id);
    if (image?.isDefault) {
      alert('デフォルト画像は削除できません');
      return;
    }
    
    if (confirm('この画像を削除してもよろしいですか？')) {
      const updatedImages = images.filter(img => img.id !== id);
      setImages(updatedImages);
      localStorage.setItem('siteImages', JSON.stringify(updatedImages));
      console.log('[ImageManager] Dispatching imagesUpdated event');
      window.dispatchEvent(new Event('imagesUpdated'));
      console.log('[ImageManager] Updated images saved to localStorage:', updatedImages);
    }
  };

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const renderImagePreview = (url: string, name: string, imageId?: string) => {
    if (url.startsWith('data:') || url.startsWith('http') || url.startsWith('/images/')) {
      return (
        <Image
          src={url}
          alt={name}
          fill
          className="object-cover"
        />
      );
    } else {
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-sm mb-1">画像を追加</p>
            <p className="text-gray-500 text-xs">クリックして選択</p>
          </div>
        </div>
      );
    }
  };

  // Check localStorage usage
  const checkStorageUsage = () => {
    try {
      const storageData = localStorage.getItem('siteImages');
      if (storageData) {
        const sizeInBytes = new Blob([storageData]).size;
        const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
        console.log(`LocalStorage usage: ${sizeInMB} MB`);
        return sizeInMB;
      }
      return '0';
    } catch (error) {
      console.error('Error checking storage:', error);
      return 'unknown';
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            画像管理
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              ストレージ使用量: {checkStorageUsage()} MB
            </span>
            <button
              onClick={() => {
                // localStorageをクリアしてデフォルト画像で初期化
                localStorage.removeItem('siteImages');
                const freshImages = initializeImages();
                setImages(freshImages);
                alert('画像データを初期化しました');
              }}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-200"
            >
              画像初期化
            </button>
            <button
              onClick={() => {
                console.log('[ImageManager] Test localStorage:', localStorage.getItem('siteImages'));
                console.log('[ImageManager] Current images state:', images);
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              デバッグ確認
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              新規アップロード
            </button>
          </div>
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
            画像数: {filteredImages.length} / 使用中の画像は即座にサイトに反映されます
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 既存の画像カード */}
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
                      setIsUploading(true);
                      try {
                        const resizedBase64 = await resizeImage(file, 1200, 1200);
                        handleUpdate(image.id, { url: resizedBase64 });
                        alert('画像が更新されました');
                      } catch (error) {
                        console.error('Error updating image:', error);
                        alert('画像の更新中にエラーが発生しました');
                      } finally {
                        setIsUploading(false);
                      }
                    }
                  }}
                  className="hidden"
                />
                <label htmlFor={`image-upload-${image.id}`} className="block w-full h-full">
                  {renderImagePreview(image.url, image.name, image.id)}
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
                  {image.isDefault && (
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
                  アップロード日: {new Date(image.uploadDate).toLocaleDateString('ja-JP')}
                </p>
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor={`image-upload-${image.id}`}
                      className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium cursor-pointer"
                    >
                      変更
                    </label>
                    <button
                      onClick={() => setPreviewImage(image)}
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      拡大
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className={`text-sm transition-colors duration-200 ${
                      image.isDefault 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-red-500 hover:text-red-600'
                    }`}
                    disabled={image.isDefault}
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            画像がありません
          </p>
        )}
      </div>

      {/* 現在のサイト表示プレビュー */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">現在のサイト表示プレビュー</h3>
        <p className="text-sm text-gray-600 mb-4">画像をクリックして変更・削除できます</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* ヒーロー画像 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">ヒーローセクション</h4>
            <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden group cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200">
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setIsUploading(true);
                    try {
                      const resizedBase64 = await resizeImage(file, 1200, 1200);
                      const heroImage = images.find(img => img.category === 'hero');
                      if (heroImage) {
                        handleUpdate(heroImage.id, { url: resizedBase64 });
                      } else {
                        // 新規作成
                        const newHeroImage: ImageItem = {
                          id: 'hero-custom',
                          url: resizedBase64,
                          name: 'ヒーロー画像',
                          category: 'hero',
                          uploadDate: new Date().toISOString()
                        };
                        const updatedImages = [...images, newHeroImage];
                        setImages(updatedImages);
                        localStorage.setItem('siteImages', JSON.stringify(updatedImages));
                        window.dispatchEvent(new Event('imagesUpdated'));
                      }
                    } catch (error) {
                      console.error('Error updating hero image:', error);
                      alert('画像の更新中にエラーが発生しました');
                    } finally {
                      setIsUploading(false);
                    }
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {(() => {
                const heroImage = images.find(img => img.category === 'hero');
                return heroImage ? (
                  <>
                    <Image src={heroImage.url} alt="Hero" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                      <p className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm">クリックして変更</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-sm">クリックして追加</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          
          {/* 製品画像プレビュー */}
          {[
            { name: 'ブランフォームトップ', section: '製品 - ブランフォームトップ', id: 'product-1' },
            { name: 'ブランフォーム', section: '製品 - ブランフォーム', id: 'product-2' },
            { name: 'ブランフォームBIG', section: '製品 - ブランフォームBIG', id: 'product-3' },
            { name: 'エコロパット', section: '製品 - エコロパット', id: 'product-4' },
            { name: 'ブランフォームグリーン', section: '製品 - ブランフォームグリーン', id: 'product-5' }
          ].map((product) => (
            <div key={product.section}>
              <h4 className="text-sm font-medium text-gray-700 mb-2">{product.name}</h4>
              <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden group cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200">
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setIsUploading(true);
                      try {
                        const resizedBase64 = await resizeImage(file, 1200, 1200);
                        
                        // 既存の画像を更新または新規作成
                        const existingImage = images.find(img => 
                          img.section === product.section && !img.isDefault
                        );
                        
                        if (existingImage) {
                          handleUpdate(existingImage.id, { url: resizedBase64 });
                        } else {
                          const newProductImage: ImageItem = {
                            id: `${product.id}-custom`,
                            url: resizedBase64,
                            name: product.name,
                            category: 'products',
                            section: product.section,
                            uploadDate: new Date().toISOString()
                          };
                          const updatedImages = [...images, newProductImage];
                          setImages(updatedImages);
                          localStorage.setItem('siteImages', JSON.stringify(updatedImages));
                          window.dispatchEvent(new Event('imagesUpdated'));
                        }
                      } catch (error) {
                        console.error('Error updating product image:', error);
                        alert('画像の更新中にエラーが発生しました');
                      } finally {
                        setIsUploading(false);
                      }
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                {(() => {
                  const productImage = images.find(img => img.section === product.section);
                  if (productImage) {
                    return (
                      <>
                        <Image src={productImage.url} alt={product.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm">クリックして変更</p>
                            {!productImage.isDefault && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(productImage.id);
                                }}
                                className="mt-2 text-red-400 hover:text-red-300 text-xs opacity-0 group-hover:opacity-100"
                              >
                                削除
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  }
                  // デフォルト画像を探す
                  const defaultImage = images.find(img => 
                    img.isDefault && img.name.includes(product.name)
                  );
                  if (defaultImage) {
                    return (
                      <>
                        <Image src={defaultImage.url} alt={product.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                          <p className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm">クリックして変更</p>
                        </div>
                      </>
                    );
                  }
                  return (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-sm">クリックして追加</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* アップロードモーダル */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">新規画像アップロード</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                画像ファイル
              </label>
              
              {/* 画像選択エリア */}
              <div 
                className={`relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed rounded-lg overflow-hidden mb-3 group cursor-pointer transition-all duration-200 ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e)}
                  disabled={isUploading}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                {previewUrl ? (
                  <>
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-gray-700 font-medium text-sm">クリックして変更</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">
                        {isDragging ? 'ここにドロップ' : 'クリックして画像を選択'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {!isDragging && 'またはドラッグ＆ドロップ'}
                      </p>
                    </div>
                  </div>
                )}
                {!previewUrl && (
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200 pointer-events-none" />
                )}
              </div>
              
              <p className="text-xs text-gray-500">
                JPG, PNG, GIF等の画像ファイル（自動的に最適化されます）
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                画像名
              </label>
              <input
                type="text"
                value={newImage.name}
                onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="画像の名前"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                カテゴリー
              </label>
              <select
                value={newImage.category}
                onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.slice(1).map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                使用箇所（オプション）
              </label>
              <select
                value={newImage.section}
                onChange={(e) => setNewImage({ ...newImage, section: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">選択してください</option>
                {sections.map(sec => (
                  <option key={sec.value} value={sec.label}>{sec.label}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setPreviewUrl('');
                  setNewImage({ name: '', category: 'hero', section: '', file: null });
                  setIsDragging(false);
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                キャンセル
              </button>
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? '処理中...' : 'アップロード'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* プレビューモーダル（拡大表示のみ） */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setPreviewImage(null)}>
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={previewImage.url}
              alt={previewImage.name}
              width={1200}
              height={800}
              className="object-contain"
              unoptimized={previewImage.url.startsWith('data:')}
            />
            <div className="text-center mt-4">
              <p className="text-white text-sm">
                {previewImage.name} - {categories.find(c => c.value === previewImage.category)?.label}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 編集モーダル */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">画像を編集</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                画像名
              </label>
              <input
                type="text"
                value={selectedImage.name}
                onChange={(e) => setSelectedImage({ ...selectedImage, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {!selectedImage.isDefault && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  画像を変更
                </label>
                <input
                  ref={editFileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, true)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  新しい画像を選択して置き換えることができます
                </p>
                
                {/* Current image preview */}
                <div className="mt-3">
                  <p className="text-xs text-gray-600 mb-1">現在の画像:</p>
                  <div className="relative h-40 bg-gray-100 rounded-md overflow-hidden">
                    {renderImagePreview(selectedImage.url, selectedImage.name, selectedImage.id)}
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                使用箇所
              </label>
              <select
                value={selectedImage.section || ''}
                onChange={(e) => setSelectedImage({ ...selectedImage, section: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">選択してください</option>
                {sections.map(sec => (
                  <option key={sec.value} value={sec.label}>{sec.label}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setSelectedImage(null);
                  if (editFileInputRef.current) editFileInputRef.current.value = '';
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                キャンセル
              </button>
              <button
                onClick={() => handleUpdate(selectedImage.id, selectedImage)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                更新
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}