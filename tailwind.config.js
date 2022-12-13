/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    container :{
      center:true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#0f172a",
      },
      fontFamily: {
        fontPrim: "Poppins",
      },
      screens :{
        '2xl' :'1320px'
      } 
    },
  },
  plugins: [],
};
