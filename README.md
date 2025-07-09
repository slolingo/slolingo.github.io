# Slolingo Website

Die offizielle Website für die Slolingo App - eine interaktive Lern-App für Kinder, die spielerisch Slowenisch und Deutsch lernen.

## 🚀 Features

- **Moderne Technologie**: React 18 + TypeScript + Vite
- **Responsive Design**: Optimiert für alle Geräte
- **Animations**: Smooth Animations mit Framer Motion
- **Design System**: Konsistentes Design basierend auf der Slolingo App
- **Performance**: Optimiert für schnelle Ladezeiten

## 🎨 Design

Die Website verwendet das gleiche Design-System wie die Slolingo Mobile App:

- **Farben**: Gelb, Orange, Blau, Pink und Grün Palette
- **Typografie**: ApfelGrotezk Fonts
- **Gradient**: Slolingo-spezifische Gradienten
- **Mascot**: Lurchi als Hauptfigur

## 🛠️ Technologie Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview
```

## 🏗️ Projektstruktur

```
src/
├── components/          # React Komponenten
│   ├── Header.tsx      # Navigation Header
│   ├── Hero.tsx        # Hero Section
│   ├── Features.tsx    # Features Section
│   ├── Download.tsx    # Download Section
│   ├── About.tsx       # About Section
│   └── Footer.tsx      # Footer
├── App.tsx             # Haupt App Komponente
├── main.tsx            # Entry Point
└── index.css           # Global Styles + Tailwind

public/
├── lurchi.svg          # Slolingo Mascot
├── bka-logo-ger.svg    # BKA Logo
├── demo-qr.svg         # Demo QR Code
└── assets/
    ├── austria_flag.svg # Österreich Flagge
    └── slovenia_flag.svg # Slowenien Flagge
```

## 🎯 Seiten

- **Homepage**: Landing Page mit Hero, Features, Download und About
- **About**: Detaillierte Informationen über das Projekt
- **Privacy**: Datenschutzrichtlinien

## 🎨 Custom CSS Classes

### Buttons
- `.btn-primary`: Primärer Button (Orange)
- `.btn-secondary`: Sekundärer Button (Gelb)

### Cards
- `.card`: Standard Karte mit Schatten

### Backgrounds
- `.gradient-bg`: Slolingo Gradient

### Typography
- `.text-heading`: Überschriften
- `.text-body`: Body Text

## 🌈 Farben

Die Website verwendet die Slolingo Farbpalette:

```css
--slolingo-primary: #FFE77B
--slolingo-secondary: #FFD966
--slolingo-orange: #F78004
--slolingo-skyBlue: #95C2E3
--slolingo-lightPink: #FFBFDA
--slolingo-mintGreen: #B4E296
--slolingo-primaryText: #2D2423
```

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- Mobile Geräte (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large Screens (1280px+)

## 🚀 Deployment

Die Website ist für GitHub Pages optimiert und kann einfach deployed werden:

```bash
npm run build
```

Der Build wird im `dist/` Ordner erstellt und kann auf GitHub Pages oder anderen Hosting-Services deployed werden.

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert.

## 🙏 Danksagungen

- **Bundeskanzleramt Österreich** für die Förderung
- **Entwicklerteam** für die technische Umsetzung
- **Bildungsexperten** für die pädagogische Beratung

---

**Slolingo** - Spielerisch Slowenisch und Deutsch lernen 🐸
