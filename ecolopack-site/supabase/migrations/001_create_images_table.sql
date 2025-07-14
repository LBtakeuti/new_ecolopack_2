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

-- Insert default images
INSERT INTO site_images (id, url, name, category, section, is_default) VALUES
  ('hero-1', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop', '森林背景', 'hero', 'ヒーローセクション', true),
  ('product-1', '/images/ブランフォームトップ.jpg', 'ブランフォームトップ - メイン', 'products', '製品 - ブランフォームトップ', true),
  ('product-2', '/images/ブランフォーム.jpg', 'ブランフォーム - メイン', 'products', '製品 - ブランフォーム', true),
  ('product-3', '/images/ブランフォームBIG.jpg', 'ブランフォームBIG - メイン', 'products', '製品 - ブランフォームBIG', true),
  ('product-4', '/images/エコロパット.jpg', 'エコロパット - メイン', 'products', '製品 - エコロパット', true),
  ('product-5', '/images/ブランフォームグリーン.jpg', 'ブランフォームグリーン - メイン', 'products', '製品 - ブランフォームグリーン', true);