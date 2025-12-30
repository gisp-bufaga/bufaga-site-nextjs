# 🚀 Setup Rapido (5 minuti)

Guida step-by-step per avere il progetto funzionante in locale.

## 1. Installa Dipendenze

```bash
npm install
```

## 2. Setup Sanity

### Opzione A: Nuovo Progetto Sanity

```bash
# Login (se non lo hai già fatto)
npx sanity login

# Crea nuovo progetto
npx sanity init --project-name "Bufaga Marketing" --dataset production

# Ti chiederà:
# - Use existing dataset? NO → crea "production"
# - Output path: . (punto, cartella corrente)
```

### Opzione B: Usa Progetto Esistente

Se hai già un progetto Sanity:

1. Vai su https://www.sanity.io/manage
2. Seleziona il tuo progetto
3. Copia il Project ID

## 3. Configura Environment Variables

```bash
# Crea file .env.local
cp .env.example .env.local

# Modifica .env.local con i tuoi dati
nano .env.local  # o usa qualsiasi editor
```

Inserisci:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx  # Dal punto 2
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## 4. Avvia il Progetto

Apri 2 terminali:

### Terminal 1: Next.js
```bash
npm run dev
```
→ http://localhost:3000

### Terminal 2: Sanity Studio (opzionale)
```bash
npm run sanity
```
→ http://localhost:3333

## 5. Crea Prima Landing Page

1. **Apri Sanity Studio**: http://localhost:3333

2. **Login** con il tuo account Sanity

3. **Crea Landing Page**:
   - Click "Landing Page" nel menu
   - Click "Create"
   - Compila usando i dati da `SAMPLE_DATA.md`

4. **Pubblica**:
   - Click "Publish"

5. **Verifica**:
   - Vai su http://localhost:3000/landing/industria
   - Dovresti vedere la landing page!

## 6. Deploy su Vercel (Opzionale)

```bash
# Assicurati che tutto sia committato
git add .
git commit -m "Initial setup"
git push origin main

# Poi su Vercel:
# 1. Importa repo da GitHub
# 2. Aggiungi le stesse env variables
# 3. Deploy
```

## ✅ Checklist

- [ ] `npm install` completato
- [ ] Progetto Sanity creato
- [ ] `.env.local` configurato con Project ID corretto
- [ ] `npm run dev` funziona
- [ ] Sanity Studio accessibile
- [ ] Prima landing page creata e visibile

## 🐛 Problemi Comuni

### "Project ID not found"
→ Controlla `.env.local`, assicurati che il Project ID sia corretto

### "Cannot connect to Sanity"
→ Verifica di essere loggato: `npx sanity login`

### "Module not found"
→ Rimuovi node_modules e reinstalla:
```bash
rm -rf node_modules
npm install
```

### Pagina landing mostra 404
→ Assicurati di aver pubblicato la landing page su Sanity Studio

## 📞 Hai Bisogno di Aiuto?

Se qualcosa non funziona:

1. Controlla i log nel terminal
2. Verifica che tutte le env variables siano settate
3. Assicurati che Sanity Studio sia accessibile
4. Riavvia i server (`Ctrl+C` e poi `npm run dev`)

## 🎉 Tutto Funziona?

Ora puoi:

1. Creare più landing page
2. Testare i diversi layout e temi
3. Provare l'A/B testing
4. Mostrare al team marketing quanto è facile!

**Next steps**: Leggi `README.md` per tutte le funzionalità avanzate.
