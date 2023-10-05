/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gris':'#EAEAEA',
        'noir': '#0A122A'
      }
    },
  },
  plugins: [
  ],
}
