/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#092635',
        gelap: '#121212',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
