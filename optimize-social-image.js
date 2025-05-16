import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, 'public/images');
const sourceImage = path.join(imageDir, 'social_media_preview.png');

async function optimizeSocialImage() {
  console.log('Optimizing social media preview image...');
  
  try {
    // Erstelle WebP-Version
    await sharp(sourceImage)
      .webp({ quality: 90 }) // Höhere Qualität für Social Media
      .toFile(path.join(imageDir, 'social_media_preview.webp'));
    
    console.log('✓ WebP-Version erstellt');
    
    // Erstelle JPG-Fallback
    await sharp(sourceImage)
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(path.join(imageDir, 'social_media_preview.jpg'));
    
    console.log('✓ JPG-Fallback erstellt');
    
    console.log('Bildoptimierung abgeschlossen!');
  } catch (error) {
    console.error('Fehler bei der Bildoptimierung:', error);
  }
}

optimizeSocialImage();
