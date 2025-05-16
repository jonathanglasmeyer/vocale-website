# Vocalé Frauenchor Website

Eine moderne Website für den Frauenchor "Vocalé" mit Astro, Tailwind CSS und Netlify CMS.

## Funktionen

- Responsives Design mit Tailwind CSS
- Content-Management mit Netlify CMS
- Mehrsprachige Unterstützung (Deutsch)
- Dynamische Konzertseite mit Markdown-Inhalten

## Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build
```

## Netlify CMS

Der Admin-Bereich ist unter `/admin` erreichbar. Die Authentifizierung erfolgt über Netlify Identity.

## Projektstruktur

```
/
├── public/
│   └── admin/         # Netlify CMS Dateien
├── src/
│   ├── components/    # UI Komponenten
│   ├── content/       # Markdown-Inhalte
│   ├── layouts/       # Seitenlayouts
│   └── pages/         # Seitenkomponenten
└── package.json
```

## Deployment

Diese Seite kann einfach auf Netlify deployt werden. Verwenden Sie die folgenden Build-Einstellungen:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18` oder höher
