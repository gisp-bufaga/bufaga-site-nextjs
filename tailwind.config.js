/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bufaga brand colors - questi possono essere personalizzati
        brand: {
          primary: '#2563eb', // blu corporate
          secondary: '#10b981', // verde sostenibilità
          accent: '#f59e0b', // arancione energia
        },
      },
    },
  },
  plugins: [],
}
