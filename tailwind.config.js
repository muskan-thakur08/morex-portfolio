/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "rubik":["Rubik",'sans-serif'],
        "inter":["Inter",'sans-serif'],
        },
      colors: {
         "primaryOrange": "#EE5F38",
        },
    },
  },
  plugins: [],
}