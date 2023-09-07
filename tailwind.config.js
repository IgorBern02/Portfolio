/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#1E192F',
          200: '#191970',
          300: '#483D8B',
          400: '#654AD7',
        },
        'black': '#000',
      }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
};