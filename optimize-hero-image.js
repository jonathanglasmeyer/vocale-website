import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, 'public/images');
const sourceImage = path.join(imageDir, 'vocale-hero-diverse-rose.png');

async function optimizeHeroImage() {
  console.log('Optimizing hero image...');
  
  try {
    // Erstelle WebP-Version
    await sharp(sourceImage)
      .webp({ quality: 85 })
      .toFile(path.join(imageDir, 'vocale-hero-diverse-rose.webp'));
    
    console.log('✓ WebP-Version erstellt');
    
    // Erstelle JPG-Fallback
    await sharp(sourceImage)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(imageDir, 'vocale-hero-diverse-rose.jpg'));
    
    console.log('✓ JPG-Fallback erstellt');
    
    console.log('Bildoptimierung abgeschlossen!');
  } catch (error) {
    console.error('Fehler bei der Bildoptimierung:', error);
  }
}

optimizeHeroImage();
