/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "index.html"
          ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#1E192F",
          200: "#191970",
          300: "#483D8B",
          400: "#654AD7",
        },
        corLua: "#f1c40f",
        corSol: "#f39c12",
      },
      fontFamily: {
        'mooli': ['Mooli', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


