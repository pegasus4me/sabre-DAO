/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'clash-bold' : ["ClashGrotesk-Bold", 'sans-serif'],
        'clash-light' : ["ClashGrotesk-Light", 'sans-serif'],
        'clash-med' : ["ClashGrotesk-Medium", 'sans-serif'],
        'clash-reg' : ["ClashGrotesk-Regular", 'sans-serif'],
      },
      colors: {
        'button':  "bg-gradient-to-r from-[#433EFF] to-[#22214E]"
      }
    },
  },
  plugins: [],
}

