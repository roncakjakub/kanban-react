/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: '#20212C',
        secondaryBg: '#2B2C37',
        lightGrayText: '#A4A6B3',
      }
    },
  },
  plugins: [],
}