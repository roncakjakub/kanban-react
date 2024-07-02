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
        // rewrite names
        purple: '#635FC7',
        lightPurple: '#A8A4FF',
        darkBlue: '#000112',
        darkGray: '#2B2C37',
        mediumGray: '#3E3F4E',
        grayBlue: '#828FA3',
        lightBlue: '#E4EBFA',
        lightestBlue: '#F4F7FD',
        white: '#FFFFFF',
        red: '#EA5555',
        lightRed: '#FF9898',
      },
      screens: {
        "sm": "671px",
      }
    },
  },
  plugins: [],
}