# Struttura Progetto

```
bufaga-site-nextjs/
│
├── app/                                # Next.js App Router
│   ├── layout.tsx                     # Layout principale con font e metadata
│   ├── globals.css                    # CSS globale con Tailwind
│   ├── page.tsx                       # Homepage temporanea
│   └── landing/
│       └── [slug]/
│           └── page.tsx               # Landing page dinamiche da Sanity
│
├── components/                         # Componenti React
│   ├── marketing/                     # Componenti marketing riutilizzabili
│   │   ├── Hero.tsx                   # Hero section (4 layout, 3 temi)
│   │   ├── CTA.tsx                    # Call-to-action buttons (con tracking)
│   │   └── Form.tsx                   # Form contatto configurabile
│   └── Footer.tsx                     # Footer del sito
│
├── lib/                               # Utility e helpers
│   └── sanity.ts                      # Client Sanity + query helpers
│
├── schemas/                           # Sanity CMS Schemas
│   ├── index.ts                       # Export di tutti gli schema
│   ├── landingPage.ts                 # Schema landing page principale
│   ├── hero.ts                        # Schema sezione hero
│   ├── cta.ts                         # Schema call-to-action
│   └── form.ts                        # Schema form contatto
│
├── middleware.ts                      # A/B testing logic
├── sanity.config.ts                   # Configurazione Sanity Studio
├── sanity.cli.ts                      # CLI configuration
│
├── next.config.js                     # Configurazione Next.js
├── tailwind.config.js                 # Configurazione Tailwind CSS
├── tsconfig.json                      # TypeScript configuration
├── postcss.config.js                  # PostCSS per Tailwind
│
├── package.json                       # Dependencies e scripts
├── .env.example                       # Template environment variables
├── .gitignore                         # File da ignorare in git
│
├── README.md                          # Documentazione completa
├── QUICK_START.md                     # Guida setup rapido
├── SAMPLE_DATA.md                     # Dati esempio per test
└── PROJECT_STRUCTURE.md               # Questo file
```

## 📁 Directory Principali

### `/app` - Next.js Application
Contiene tutta la logica dell'applicazione Next.js usando App Router.

**File chiave**:
- `layout.tsx`: Layout root con configurazione font e metadata
- `page.tsx`: Homepage (da sostituire con versione da CMS)
- `landing/[slug]/page.tsx`: Route dinamico per landing pages

### `/components` - Componenti React
Componenti riutilizzabili organizzati per funzionalità.

**Marketing components**:
- `Hero.tsx`: 4 layout (imageRight, imageLeft, background, centered)
- `CTA.tsx`: 3 stili (standard, large, minimal)
- `Form.tsx`: Campi configurabili + tracking

### `/schemas` - Sanity CMS
Definizioni degli schema per il CMS. Questi determinano l'interfaccia che vede il team marketing.

**Schema types**:
- `landingPage`: Documento principale (slug, SEO, tema, componenti)
- `hero`: Sezione hero configurabile
- `cta`: Call-to-action configurabile
- `form`: Form con campi dinamici

### `/lib` - Utility
Helper functions e configurazioni.

**sanity.ts**:
- `client`: Sanity client configurato
- `getLandingPage(slug)`: Fetch landing by slug
- `getAllLandingPages()`: Fetch tutte le landing

## 🔄 Data Flow

```
1. Marketing crea landing su Sanity Studio
   ↓
2. Content salvato su Sanity Cloud
   ↓
3. Next.js fetch data via `getLandingPage(slug)`
   ↓
4. Componenti renderizzano con dati da Sanity
   ↓
5. User vede landing page su /landing/[slug]
```

## 🎨 Theming System

Ogni landing page può usare uno di 3 temi:

**Corporate (Blu)**
- Primary: `bg-blue-600`
- Accent: `text-blue-600`
- Background: `bg-blue-50`

**Sustainability (Verde)**
- Primary: `bg-green-600`
- Accent: `text-green-600`
- Background: `bg-green-50`

**Energy (Arancione)**
- Primary: `bg-orange-600`
- Accent: `text-orange-600`
- Background: `bg-orange-50`

I temi sono applicati automaticamente a tutti i componenti.

## 📊 Analytics & Tracking

Eventi tracciati automaticamente:

```javascript
// CTA click
gtag('event', 'cta_click', {
  event_category: 'engagement',
  event_label: 'button_text'
})

// Form submission
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: 'tracking_id',
  form_fields: 'name,email,company'
})
```

## 🔐 Environment Variables

**Richieste**:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx    # Da Sanity Dashboard
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Opzionali**:
```env
SANITY_API_TOKEN=xxx                 # Per preview/mutations
```

## 🚀 Scripts Disponibili

```bash
npm run dev          # Next.js dev server (localhost:3000)
npm run build        # Build production
npm run start        # Start production server
npm run lint         # ESLint check

npm run sanity       # Sanity Studio locale (localhost:3333)
npm run sanity:deploy # Deploy Sanity Studio
```

## 📝 File di Configurazione

**next.config.js**
- Sanity CDN domain per images
- Experimental features

**tailwind.config.js**
- Brand colors
- Custom utilities

**middleware.ts**
- A/B testing cookie logic
- Variant assignment (50/50)

## 🔄 Workflow Sviluppo

1. **Locale**: Modifica codice
2. **Test**: Verifica su localhost
3. **Commit**: Push su GitHub
4. **Deploy**: Vercel deploy automatico
5. **CMS**: Team marketing usa Sanity

## 🎯 Next Steps

Dopo il setup base, considera:

1. **Aggiungere più componenti**:
   - Testimonials
   - Pricing tables
   - Features grid
   - Stats/metrics

2. **Integrare analytics**:
   - Google Analytics 4
   - Hotjar/Clarity
   - Custom events

3. **SEO avanzato**:
   - Sitemap dinamico
   - robots.txt
   - Schema.org markup

4. **Performance**:
   - Image optimization
   - Lazy loading
   - Cache strategy
