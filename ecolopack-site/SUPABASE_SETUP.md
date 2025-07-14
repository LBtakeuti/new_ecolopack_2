# Supabase セットアップガイド

このプロジェクトをSupabaseと連携させるための手順です。

## 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com)にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトのURL と anon key をメモ

## 2. 環境変数の設定

`.env.local` ファイルを編集して、以下の値を設定してください：

```
NEXT_PUBLIC_SUPABASE_URL=あなたのプロジェクトURL
NEXT_PUBLIC_SUPABASE_ANON_KEY=あなたのanon key
```

## 3. データベースのセットアップ

Supabaseのダッシュボードで以下のSQLを実行してください：

### テーブル作成（supabase/migrations/001_create_images_table.sql）

```sql
-- Create images table
CREATE TABLE IF NOT EXISTS site_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  section TEXT,
  upload_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON site_images
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to manage images" ON site_images
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON site_images
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
```

### ストレージバケット作成（supabase/migrations/002_create_storage_bucket.sql）

```sql
-- Create storage bucket for site images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true);

-- Create policies for storage
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'site-images');

CREATE POLICY "Allow authenticated users to upload images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "Allow authenticated users to update images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );

CREATE POLICY "Allow authenticated users to delete images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );
```

## 4. 管理画面での使用

1. `/admin` にアクセス
2. パスワード `ecolopack2024` でログイン
3. 画像管理機能がSupabaseと連携して動作します

## 機能

- **画像アップロード**: Supabase Storageに保存
- **画像情報管理**: PostgreSQLデータベースで管理
- **リアルタイム同期**: 複数ユーザー間でリアルタイム更新
- **セキュリティ**: Row Level Securityで保護

## トラブルシューティング

### 接続エラーが発生する場合

1. 環境変数が正しく設定されているか確認
2. Supabaseプロジェクトが稼働しているか確認
3. ネットワーク接続を確認

### 画像がアップロードできない場合

1. Supabaseの認証設定を確認
2. ストレージバケットのポリシーを確認
3. ファイルサイズ制限を確認（デフォルト: 50MB）

## 注意事項

- 本番環境では、より強固な認証システムの実装を推奨
- 定期的なバックアップを推奨
- Supabaseの無料プランには制限があります