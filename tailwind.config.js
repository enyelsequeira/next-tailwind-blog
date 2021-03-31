const colors = require("tailwindcss/colors")
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      nav:{
        light: '#f39189',
        dark: '#1e5f74',
      },
      body:{
        light:"#F6F6F6",
        dark:"#1d2d50"
      },
      button:{
        light: "#e63946",
        dark: "#c26406",
      },
      words: {
        light: "#1d3557",
        dark:"#ebe8e5"
      }

    },
    boxShadow:{
      personal: "0 8px 8px 0 rgba( 31, 38, 135, 0.37 )"

    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Cabin', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns:{
        "cards": "repeat(auto-fill, minmax(450px, 1fr))"
      }
    },
  },
  plugins: [],
};
