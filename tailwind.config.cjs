/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'megasena': '#6BEFA3',
        'quina': '#8666cf',
        'lotofacil': '#dd7ac6',
        'lotomania': '#ffab64',
        'timemania': '#5aad7d',
        'diadesorte': '#bfaf83'
      }
    },
  },
  plugins: [],
}