/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBg: '#20212C',
        primaryLightBg: '#F4F7FD',
        secondaryDarkBg: '#2B2C37',
        secondaryLightBg: '#ffffff',
        lightGrayText: '#A4A6B3',
        highlightDarkBg: '#635FC7',
      }
    },
  },
  plugins: [],
}