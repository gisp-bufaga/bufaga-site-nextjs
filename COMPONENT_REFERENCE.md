# Component Reference - V2

Guida completa alle props di ogni componente della versione 2.

## 🎯 Layout Components

### Navbar

```typescript
interface NavbarProps {
  logo?: string                                  // Testo logo (default: 'bufaga')
  links?: Array<{ label: string; href: string }> // Link navigazione
  ctaText?: string                               // Testo CTA button
  ctaHref?: string                               // Link CTA
  showLanguageSwitch?: boolean                   // Mostra switch lingua
}
```

**Esempio:**
```typescript
<Navbar 
  logo="bufaga"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]}
  ctaText="Contattaci"
  ctaHref="#contact"
/>
```

### Footer

```typescript
interface FooterProps {
  logo?: string
  tagline?: string
  socialLinks?: Array<{ type: 'instagram' | 'linkedin'; href: string }>
  showLanguageSwitch?: boolean
  copyrightText?: string
}
```

## 📄 Section Components

### Hero

```typescript
interface HeroProps {
  badge?: string              // Badge sopra il titolo
  title?: string              // Titolo principale
  titleAccent?: string        // Parte titolo colorata
  subtitle?: string           // Sottotitolo
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string; icon?: boolean }
  backgroundImage?: string
}
```

**Novità V2:**
- Badge sopra il titolo
- Titolo split con accent colorato
- Icon opzionale su secondary CTA

**Esempio:**
```typescript
<Hero 
  badge="Clean Air Tech"
  title="Removing pollution"
  titleAccent="Restoring life."
  subtitle="Trasforma le sfide ambientali..."
  primaryCTA={{ text: 'Prenota Call', href: '#contact' }}
  secondaryCTA={{ text: 'Business Case', href: '/case', icon: true }}
/>
```

### FeaturedIn

```typescript
interface MediaPartner {
  name: string
  logo?: string
  textContent?: string
  className?: string
}

interface FeaturedInProps {
  partners?: MediaPartner[]
}
```

### Problem

```typescript
interface Stat {
  icon: LucideIcon           // 🆕 Icona Lucide
  value: string
  label: string
  iconColor?: string         // 🆕 Colore icona
  iconBgColor?: string       // 🆕 Background icona
}

interface ProblemProps {
  tagline?: string
  title?: string
  description?: string
  stats?: Stat[]
}
```

**Novità V2:**
- Icone colorate per ogni stat
- Hover effects su card
- Background icona personalizzabile

**Esempio:**
```typescript
import { Globe, Euro, MapPin } from 'lucide-react'

<Problem 
  stats={[
    {
      icon: Globe,
      value: '7M+',
      label: 'Morti globali',
      iconColor: 'text-red-500',
      iconBgColor: 'bg-red-50 group-hover:bg-red-100',
    },
  ]}
/>
```

### Solutions

```typescript
interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface SolutionsProps {
  tagline?: string
  title?: string
  description?: string
  features?: Feature[]
  ctaText?: string
  ctaHref?: string
  image?: string
}
```

**Novità V2:**
- Features con bordi colorati
- Layout con icone in box bianchi
- Hover states migliorati

### Dashboard 🆕

```typescript
interface DashboardProps {
  tagline?: string
  title?: string
  description?: string
  features?: string[]           // Lista feature
  dashboardImage?: string        // Screenshot dashboard
  deviceImage?: string           // Immagine device mobile
}
```

**Nuovo componente V2:**
- Preview dashboard con device floating
- Background blu scuro
- Lista features con checkmarks

**Esempio:**
```typescript
<Dashboard 
  title="Dashboard Real-Time"
  description="Monitora i dati in tempo reale"
  features={[
    'Monitoraggio continuo',
    'Report automatici',
    'Visualizzazione avanzata'
  ]}
  dashboardImage="/dashboard.png"
  deviceImage="/device.png"
/>
```

### Values 🆕

```typescript
interface Value {
  icon: LucideIcon
  title: string
  description: string
}

interface ValuesProps {
  tagline?: string
  title?: string
  values?: Value[]
}
```

**Nuovo componente V2:**
- Grid 3 colonne con icone circolari
- Perfetto per principi/valori aziendali
- Icone con background blue-50

**Esempio:**
```typescript
import { Search, Eye, Share2 } from 'lucide-react'

<Values 
  title="I nostri valori"
  values={[
    {
      icon: Search,
      title: 'Semplice',
      description: 'Facile da usare'
    },
    {
      icon: Eye,
      title: 'Trasparente',
      description: 'Dati aperti'
    },
    {
      icon: Share2,
      title: 'Condivisibile',
      description: 'Export report'
    },
  ]}
/>
```

### Sustainability

```typescript
interface SustainabilityProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}
```

**Novità V2:**
- Report mockup con rotazione 3D
- Animazioni bounce su floating elements
- Background blue-50

### Team

```typescript
interface TeamProps {
  title?: string
  titleHighlight?: string     // 🆕 Parte evidenziata
  description?: string
  image?: string
}
```

**Novità V2:**
- Parte del titolo in badge blu
- Border radius più ampio
- Shadow migliorata

**Esempio:**
```typescript
<Team 
  title="Conosci il"
  titleHighlight="Team"
  description="Siamo un team multidisciplinare..."
/>
```

### ContactForm

```typescript
interface ContactFormProps {
  title?: string
  titleHighlight?: string     // 🆕 Parte sottolineata
  subtitle?: string
  submitButtonText?: string
  onSubmit?: (data: FormData) => Promise<void>
}
```

**Novità V2:**
- Layout grid 2 colonne per nome/cognome
- Underline decorativo sul titolo
- Icona send nel button
- Background surface-light

**Esempio:**
```typescript
<ContactForm 
  title="Rimuoviamo l'inquinamento"
  titleHighlight="insieme"
  subtitle="Compila il form per info"
  onSubmit={async (data) => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }}
/>
```

## 🎨 UI Components

### StatCard

```typescript
interface StatCardProps {
  icon: LucideIcon           // 🆕 Icona obbligatoria
  value: string
  label: string
  iconColor?: string
  iconBgColor?: string
}
```

**Novità V2:**
- Icona required (non più optional)
- Colori personalizzabili
- Hover effect con translate-y
- Shadow più pronunciata

**Esempio:**
```typescript
import { Globe } from 'lucide-react'

<StatCard 
  icon={Globe}
  value="7M+"
  label="Morti premature globali"
  iconColor="text-red-500"
  iconBgColor="bg-red-50 group-hover:bg-red-100"
/>
```

## 🎯 Pattern di Utilizzo

### Homepage Completa

```typescript
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Problem />
      <Solutions />
      <Dashboard />        {/* 🆕 Nuovo */}
      <Values />           {/* 🆕 Nuovo */}
      <Sustainability />
      <Team />
      <ContactForm />
      <Footer />
    </>
  )
}
```

### Landing Page Settoriale

```typescript
export default function IndustriaPage() {
  return (
    <>
      <Navbar />
      <Hero 
        badge="Industria 4.0"
        title="Aria Pulita in Fabbrica"
        titleAccent="Produttività Sostenibile"
      />
      <Problem />
      <Solutions />
      <Dashboard />
      <ContactForm />
      <Footer />
    </>
  )
}
```

### Campaign Landing Page

```typescript
export default function CampaignPage() {
  return (
    <>
      <Navbar ctaText="Demo Gratuita" />
      <Hero 
        badge="Offerta Limitata"
        title="Prova Gratuita 30 Giorni"
      />
      <Values />
      <ContactForm 
        title="Richiedi la tua demo"
        titleHighlight="gratuita"
      />
      <Footer />
    </>
  )
}
```

## 🎨 Customization Tips

### Cambiare Icone

Tutte le icone usano Lucide React. [Vedi libreria completa](https://lucide.dev/)

```typescript
import { 
  Leaf,      // Natura
  Factory,   // Industria
  Heart,     // Salute
  Shield,    // Sicurezza
  Target,    // Precisione
  Award,     // Certificazioni
} from 'lucide-react'
```

### Colori Custom per Settore

```typescript
// Esempio: tema verde per sostenibilità
<StatCard 
  icon={Leaf}
  value="95%"
  label="Emissioni ridotte"
  iconColor="text-green-500"
  iconBgColor="bg-green-50 group-hover:bg-green-100"
/>
```

### Badge Custom

```typescript
<Hero 
  badge="🌿 Certificato Carbon Neutral"
  // oppure
  badge="⚡ Industria 4.0"
  // oppure
  badge="🏆 Award Winning"
/>
```

## ⚡ Performance Tips

1. **Usa Next.js Image** per tutte le immagini
2. **Lazy load** componenti pesanti (Dashboard, Sustainability)
3. **Ottimizza icone** importando solo quelle usate
4. **Riduci props** passando solo quelle necessarie

## 🔧 TypeScript

Tutti i componenti hanno tipi completi:

```typescript
import type { HeroProps, ProblemProps } from '@/components'
```

Per estendere i tipi:

```typescript
interface CustomHeroProps extends HeroProps {
  extraField?: string
}
```

---

**Riferimento aggiornato per la V2!** 🎨
