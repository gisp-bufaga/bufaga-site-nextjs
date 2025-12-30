# Bufaga Marketing Site

Sistema di marketing moderno con Next.js 15 + Sanity CMS per gestione autonoma delle landing page da parte del team marketing.

## 🎯 Obiettivi

- **Zero dipendenza da sviluppatori** per creare/modificare landing page
- **A/B testing integrato** per ottimizzare conversioni
- **Preview istantanee** prima della pubblicazione
- **Deploy automatico** su Vercel ad ogni modifica
- **Analytics integrato** per tracciare performance

## 🚀 Quick Start

### 1. Prerequisiti

```bash
node >= 18
npm o yarn
account Sanity (gratuito)
account Vercel (gratuito)
```

### 2. Installazione

```bash
# Clona la repository
git clone https://github.com/gisp-bufaga/bufaga-site-nextjs.git
cd bufaga-site-nextjs

# Installa dipendenze
npm install
```

### 3. Setup Sanity CMS

**A. Crea progetto Sanity**

```bash
# Login a Sanity
npx sanity login

# Inizializza progetto (usa le credenziali esistenti se già creato)
npx sanity init
```

Quando richiesto:
- Project name: `Bufaga Marketing`
- Dataset: `production`
- Output path: `./` (root del progetto)

**B. Configura variabili d'ambiente**

Copia `.env.example` in `.env.local`:

```bash
cp .env.example .env.local
```

Modifica `.env.local` con i tuoi dati:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Dal dashboard Sanity
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Trova il tuo Project ID su: https://www.sanity.io/manage

**C. Deploy Sanity Studio**

```bash
# Build e deploy del CMS
npm run sanity:deploy
```

Questo crea il tuo Sanity Studio su: `https://bufaga-marketing.sanity.studio`

### 4. Avvia in locale

```bash
# Terminal 1: Next.js
npm run dev
# → http://localhost:3000

# Terminal 2: Sanity Studio (opzionale per editing locale)
npm run sanity
# → http://localhost:3333
```

## 📝 Creare la Prima Landing Page

### Da Sanity Studio

1. **Vai su Sanity Studio** (locale o deploy)
   - Locale: http://localhost:3333
   - Deploy: https://bufaga-marketing.sanity.studio

2. **Crea nuova Landing Page**
   - Click su "Landing Page" nel menu
   - Click su "+ Create"

3. **Compila i campi**:
   ```
   Titolo Pagina: "Landing Industria"
   Slug URL: "industria" → /landing/industria
   
   SEO:
   - Titolo: "Bufaga per l'Industria | Aria Pulita"
   - Descrizione: "Soluzioni per purificazione aria..."
   
   Tema Colori: "Corporate (Blu)"
   
   Hero Section:
   - Headline: "Aria Pulita per la Tua Industria"
   - Sottotitolo: "Riduci l'inquinamento..."
   - Immagine: [Upload immagine]
   - Layout: "Immagine a Destra"
   
   Call to Action:
   - Testo Primario: "Richiedi Demo"
   - Link Primario: "#contatto"
   - Testo Secondario: "Scopri di Più"
   - Link Secondario: "/about"
   
   Form Contatto:
   - Titolo: "Richiedi una Demo Gratuita"
   - Campi: name, email, company, message
   - ID Tracking: "form-demo-industria"
   ```

4. **Preview e Pubblica**
   - Click su "Preview" → vedi anteprima live
   - Quando pronto: Click "Publish"

5. **Visita la pagina**
   - Locale: http://localhost:3000/landing/industria
   - Production: https://bufaga.com/landing/industria

## 🎨 Workflow Marketing (Zero Codice)

### Scenario 1: Nuova Campagna LinkedIn

**Tempo: 5 minuti**

1. Login Sanity Studio
2. Duplica landing esistente che funziona bene
3. Modifica:
   - Headline per la campagna
   - CTA specifico
   - Form con tracking ID univoco
4. Pubblica → Live immediatamente

**URL Preview automatico** per testare prima di pubblicare!

### Scenario 2: A/B Test Homepage

**Tempo: 2 minuti**

1. Crea 2 versioni della stessa landing:
   - `homepage-variant-a`
   - `homepage-variant-b`
2. Imposta "Variante A/B Test" su ciascuna
3. Il sistema serve automaticamente 50/50
4. Dashboard analytics mostra quale performa meglio

### Scenario 3: Landing Multi-Settore

Crea landing specifiche per ogni verticale:

```
/landing/industria → Messaging industria
/landing/logistica → Messaging logistica
/landing/parking → Messaging parcheggi
/landing/trasporti → Messaging trasporti
```

Ogni landing:
- Colori branded per settore
- Hero immagine specifica
- Form con tracking dedicato
- CTA personalizzato

## 🏗️ Architettura

```
Frontend (Next.js su Vercel)
├── Landing pages dinamiche (/landing/[slug])
├── Homepage
├── About/Contatti
└── Dashboard pubblica dati inquinamento

Backend (Node.js su VPS - separato)
├── API dispositivi IoT
├── Dashboard privata clienti
└── Database metriche

CMS (Sanity Studio)
└── Gestione contenuti marketing
```

## 🎨 Componenti Disponibili

### Hero Section
- **4 Layout**: Immagine Destra/Sinistra, Sfondo, Centrato
- **3 Temi**: Corporate, Sostenibilità, Energia
- Completamente configurabile da CMS

### CTA (Call to Action)
- **3 Stili**: Standard, Large, Minimal
- Pulsante primario + secondario
- Tracking automatico click

### Form Contatto
- **Campi configurabili**: nome, email, telefono, azienda, messaggio, settore
- Tracking submissions con ID univoco
- Messaggi di successo personalizzabili

## 📊 Analytics & Tracking

### Eventi Tracciati Automaticamente

```javascript
// Click CTA
gtag('event', 'cta_click', {
  event_category: 'engagement',
  event_label: 'Richiedi Demo'
})

// Submit Form
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: 'form-demo-industria',
  form_fields: 'name,email,company'
})
```

### Integrare Google Analytics

1. Crea proprietà GA4
2. Aggiungi Google Tag in `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚀 Deploy su Vercel

### Setup Iniziale

1. **Push su GitHub**
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Importa su Vercel**
   - Vai su https://vercel.com
   - "Import Project" → Seleziona repo GitHub
   - Framework: Next.js (auto-detected)
   - Root: `./`

3. **Configura Environment Variables**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

4. **Deploy**
   - Click "Deploy"
   - Pronto in ~2 minuti

### Deploy Automatico

Ogni `git push` su `main` → deploy automatico Vercel

Per preview branches:
```bash
git checkout -b feature/nuova-landing
git push origin feature/nuova-landing
```
→ Vercel crea URL preview automatico

## 🔧 Personalizzazioni Avanzate

### Aggiungere Nuovo Tema Colori

**1. In `tailwind.config.js`:**
```javascript
colors: {
  brand: {
    // ...esistenti
    custom: '#yourcolor',
  }
}
```

**2. In ogni componente (`Hero.tsx`, `CTA.tsx`, etc.):**
```typescript
const themeColors = {
  // ...esistenti
  custom: {
    bg: 'bg-custom-50',
    text: 'text-custom-900',
    accent: 'text-custom-600',
  }
}
```

**3. In `schemas/landingPage.ts`:**
```typescript
options: {
  list: [
    // ...esistenti
    {title: 'Custom', value: 'custom'},
  ]
}
```

### Aggiungere Nuovo Campo Form

**1. In `schemas/form.ts`:**
```typescript
options: {
  list: [
    // ...esistenti
    {title: 'Budget', value: 'budget'},
  ]
}
```

**2. In `components/marketing/Form.tsx`:**
```typescript
const fieldLabels: Record<string, string> = {
  // ...esistenti
  budget: 'Budget Disponibile',
}
```

## 🐛 Troubleshooting

### Errore: "Cannot find module '@/lib/sanity'"

**Causa**: TypeScript path alias non configurato

**Fix**: Verifica `tsconfig.json`:
```json
"paths": {
  "@/*": ["./*"]
}
```

### Errore: "Invalid API response from Sanity"

**Causa**: Project ID o Dataset errati

**Fix**: Controlla `.env.local` e confronta con Sanity Dashboard

### Immagini non si caricano

**Causa**: Dominio Sanity CDN non permesso

**Fix**: Verifica `next.config.js`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    },
  ],
}
```

## 📚 Risorse

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Supporto

Per domande o problemi:
- GitHub Issues: https://github.com/gisp-bufaga/bufaga-site-nextjs/issues
- Email tecnico: [email]

## 📄 License

MIT
