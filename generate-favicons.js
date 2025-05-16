import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import favicons from 'favicons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = path.resolve(__dirname, 'public/images/favicon.png');
const OUTPUT = path.resolve(__dirname, 'public');

// Favicon-Konfiguration
const configuration = {
  path: '/',
  appName: 'Frauenchor Vocalé',
  appShortName: 'Vocalé',
  appDescription: 'Frauenchor Vocalé - Vielseitige Frauen im Einklang seit 2010',
  background: '#ffffff',
  theme_color: '#D27277',
  lang: 'de-DE',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  start_url: '/',
  logging: true,
  icons: {
    // Nur die benötigten Formate generieren
    android: false,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false
  }
};

console.log('Generiere Favicons...');

favicons(SOURCE, configuration)
  .then(response => {
    // Erstelle die Dateien
    response.images.forEach(image => {
      fs.writeFileSync(
        path.join(OUTPUT, image.name),
        image.contents
      );
      console.log(`✓ ${image.name} erstellt`);
    });

    response.files.forEach(file => {
      fs.writeFileSync(
        path.join(OUTPUT, file.name),
        file.contents
      );
      console.log(`✓ ${file.name} erstellt`);
    });

    console.log('Favicon-Generierung abgeschlossen!');
  })
  .catch(error => {
    console.error('Fehler bei der Favicon-Generierung:', error);
  });
