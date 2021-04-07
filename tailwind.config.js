const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled:true,
    content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}', "./styles/**/*.{js,ts,jsx,tsx}", './utils/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: 'class', 
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      special: "rgba( 255, 255, 255, 0.20 )",
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
    height:{
      card: "390px"
    },
    
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Cabin', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns:{
        "cards": "repeat(auto-fill, minmax(450px, 1fr))"
      },
      gridTemplateRows:{
        "testimonials": "250px, 1fr"
      },
      typography: (theme) => ({
         
        DEFAULT: {
          css: {
            "max-width": "74ch",
            "width": "100%",
            color: "inherit",
            padding: "1rem",
            a: {
              color: '#1864af',
              textDecoration: 'none',
              '&:hover': {
                color: '#414e4e',
              },
            },
            pre:{
              padding: ".5rem",
              margin: ".5rem",
              background: "#2A2D40",
              color: "#c7b7ab",
              fontWeight: "bolder"
            },
            ".remark-code-title":{
              color: "#4a9fb4"
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.red.400'),
            },
            strong:{
              color: theme("colors.red.600"),
            },
            "p > code":{
              color: theme("colors.red.600")
            }
          },
        },
      }
  )},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};


