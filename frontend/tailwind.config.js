/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headingFont: ['"Bebas Neue"', 'sans-serif'], // Add custom font
        subheadingFont:['"Lato"', 'sans-serif'],
        logo:['"Monoton"', 'sans-serif']
      }
    },
  },
  plugins: [],
}