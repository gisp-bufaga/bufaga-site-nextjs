# Sample Landing Pages

Usa questi dati per creare le prime landing page di test in Sanity Studio.

## Landing 1: Industria

**Titolo Pagina**: `Landing Industria`
**Slug**: `industria`

**SEO**:
- Titolo: `Aria Pulita per l'Industria | Bufaga`
- Descrizione: `Riduci l'inquinamento e migliora il benessere dei tuoi dipendenti con i nostri totem intelligenti di purificazione dell'aria.`

**Tema**: `Corporate (Blu)`

**Hero**:
- Headline: `Aria Pulita per la Tua Industria`
- Sottotitolo: `Riduci le polveri sottili fino al 90% con tecnologia HEPA professionale. Monitora la qualità dell'aria in tempo reale.`
- Layout: `Immagine a Destra`

**CTA**:
- Testo Primario: `Richiedi Demo Gratuita`
- Link Primario: `#contatto`
- Testo Secondario: `Scopri le Specifiche`
- Link Secondario: `/specifiche-tecniche`
- Stile: `Grande (Emphasis)`

**Form**:
- Titolo: `Richiedi una Demo nel Tuo Stabilimento`
- Descrizione: `Un nostro tecnico ti contatterà entro 24 ore per programmare una dimostrazione gratuita.`
- Campi: `name`, `email`, `phone`, `company`, `sector`, `message`
- Testo Pulsante: `Richiedi Demo`
- Messaggio Successo: `Grazie! Il nostro team ti contatterà entro 24 ore per programmare la demo.`
- ID Tracking: `form-demo-industria`

---

## Landing 2: Logistica

**Titolo Pagina**: `Landing Logistica`
**Slug**: `logistica`

**SEO**:
- Titolo: `Soluzioni Aria Pulita per Magazzini | Bufaga`
- Descrizione: `Proteggi i tuoi operatori con sistemi di purificazione aria per magazzini e hub logistici. Riduci le polveri da traffico pesante.`

**Tema**: `Sostenibilità (Verde)`

**Hero**:
- Headline: `Aria Pulita nei Magazzini e Hub Logistici`
- Sottotitolo: `Proteggi i tuoi operatori dalle emissioni di mezzi pesanti. Soluzioni progettate per ambienti semi-outdoor ad alto traffico.`
- Layout: `Immagine a Sinistra`

**CTA**:
- Testo Primario: `Parla con un Esperto`
- Link Primario: `#contatto`
- Testo Secondario: `Vedi i Casi Studio`
- Link Secondario: `/case-studies`
- Stile: `Standard`

**Form**:
- Titolo: `Richiedi una Consulenza Personalizzata`
- Descrizione: `Analizziamo insieme le esigenze del tuo magazzino e ti proponiamo la soluzione migliore.`
- Campi: `name`, `email`, `phone`, `company`, `message`
- Testo Pulsante: `Richiedi Consulenza`
- Messaggio Successo: `Grazie! Un nostro consulente ti contatterà a breve.`
- ID Tracking: `form-consulenza-logistica`

---

## Landing 3: Parcheggi

**Titolo Pagina**: `Landing Parcheggi`
**Slug**: `parking`

**SEO**:
- Titolo: `Aria Pulita + Pubblicità Digitale per Parcheggi | Bufaga`
- Descrizione: `Totem intelligenti che purificano l'aria e mostrano pubblicità digitale. ROI positivo grazie al revenue da advertising.`

**Tema**: `Energia (Arancione)`

**Hero**:
- Headline: `Aria Pulita e Pubblicità Digitale per il Tuo Parcheggio`
- Sottotitolo: `Monetizza il tuo spazio con totem che purificano l'aria e generano revenue da pubblicità digitale. Installazione gratuita con contratto advertising.`
- Layout: `Centrato`

**CTA**:
- Testo Primario: `Scopri il Modello Business`
- Link Primario: `#contatto`
- Testo Secondario: `Calcola il Tuo ROI`
- Link Secondario: `/roi-calculator`
- Stile: `Grande (Emphasis)`

**Form**:
- Titolo: `Richiedi un'Analisi di Fattibilità`
- Descrizione: `Ti contattiamo per capire il potenziale del tuo parcheggio e calcolare insieme il ROI previsto.`
- Campi: `name`, `email`, `phone`, `company`, `sector`, `message`
- Testo Pulsante: `Richiedi Analisi`
- Messaggio Successo: `Perfetto! Ti contattiamo entro 48 ore con un'analisi preliminare del potenziale advertising.`
- ID Tracking: `form-analisi-parking`

---

## Landing 4: A/B Test Example - Variante A

**Titolo Pagina**: `Homepage Variante A`
**Slug**: `home-a`

**Tema**: `Corporate (Blu)`

**Hero**:
- Headline: `Aria Pulita per le Città del Futuro`
- Sottotitolo: `Tecnologia italiana per purificazione aria e comunicazione digitale in ambienti semi-outdoor.`
- Layout: `Immagine di Sfondo`

**CTA**:
- Testo Primario: `Esplora le Soluzioni`
- Link Primario: `/soluzioni`

**Variante A/B Test**: `Variante A`

---

## Landing 5: A/B Test Example - Variante B

**Titolo Pagina**: `Homepage Variante B`
**Slug**: `home-b`

**Tema**: `Sostenibilità (Verde)`

**Hero**:
- Headline: `Riduci l'Inquinamento, Monetizza i Tuoi Spazi`
- Sottotitolo: `Totem intelligenti che purificano l'aria e generano revenue. Zero costi con il nostro modello advertising.`
- Layout: `Immagine di Sfondo`

**CTA**:
- Testo Primario: `Calcola il Tuo ROI`
- Link Primario: `/roi-calculator`

**Variante A/B Test**: `Variante B`

---

## Note per il Test

1. **Crea almeno le prime 3 landing** (Industria, Logistica, Parcheggi)
2. **Le varianti A/B** (4 e 5) servono per testare il sistema di A/B testing
3. **Non hai immagini?** Usa immagini placeholder o salta il campo immagine per ora
4. **Testa immediatamente**:
   - http://localhost:3000/landing/industria
   - http://localhost:3000/landing/logistica
   - http://localhost:3000/landing/parking

## Workflow di Test per il Team Marketing

1. Login su Sanity Studio
2. Duplica una delle landing sopra
3. Modifica solo l'headline e il testo del CTA
4. Pubblica
5. Verifica che appaia immediatamente su `/landing/[nuovo-slug]`

Questo dimostra come il team marketing può creare nuove landing in autonomia!
