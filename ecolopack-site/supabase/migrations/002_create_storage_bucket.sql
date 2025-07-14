-- Create storage bucket for site images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true);

-- Create policy to allow public read access to images
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'site-images');

-- Create policy to allow authenticated users to upload images
CREATE POLICY "Allow authenticated users to upload images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );

-- Create policy to allow authenticated users to update images
CREATE POLICY "Allow authenticated users to update images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );

-- Create policy to allow authenticated users to delete images
CREATE POLICY "Allow authenticated users to delete images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'site-images' 
    AND auth.role() = 'authenticated'
  );