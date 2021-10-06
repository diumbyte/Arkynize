module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          light: "#42658B",
          DEFAULT: "#284b71",
          dark: "#0F3258"
        },
        primaryGreen: {
          light: "#44EEBE",
          DEFAULT: "#2ad4a4",
          dark: "#11BB8B"
        },
        secondaryBlue: {
          light: "#CEFAFD",
          DEFAULT: "#b4e0e3",
          dark: "#9BC7CA"
        },
        offWhite: {
          light: "#fff",
          DEFAULT: "#eaf2f5",
          dark: "#D1D9DC"
        },
        accentOrange: {
          light: "#FFC075",
          DEFAULT: "#f5a65b",
          dark: "#DC8D42"
        },
        iconBlue: {
          DEFAULT: "#253466"
        },
        tavernBrown: {
          DEFAULT: "rgba(28,20,16,1)",
          light: "#9c7f59"
        }
      },
      fontFamily: {
        "mulish": ["Mulish", "sans-serif"]
      },
      maxWidth: {
        "2xs": "110px"
      },
      boxShadow: {
        "icon": "0 0 2px 2px rgba(0,0,0,.4), 0 0 0 3px rgba(156,127,89,1), 0 0 3px 5px rgba(0,0,0,0.6)"
      },
      width: {
        "1/8": "12.5%"
      },
      minWidth: {
        "90": "90px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
