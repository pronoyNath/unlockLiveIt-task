/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bakidaHistory: 'Bakilda Histori', 
        lemonada: '"Lemonada", cursive',
        Jost: '"Jost", sans-serif',
        Abril:'"Abril Fatface", serif',              
      }
    },
  },
  plugins: [require("daisyui")],
}

