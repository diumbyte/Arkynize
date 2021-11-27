const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aliceBlue: {
          DEFAULT: "#F3F5F6"
        },
        midnightBlue: {
          DEFAULT: "#263645"
        },
        primaryBlue: {
          light: "#42658B",
          DEFAULT: "#284b71",
          dark: "#0F3258"
        },
        secondaryBlue: {
          light: "#CEFAFD",
          DEFAULT: "#b4e0e3",
          dark: "#9BC7CA"
        },
        blueGray: colors.blueGray,
        emerald: colors.emerald
      },
      boxShadow: {
        "outline": "0 0 0 3px rgba(66, 153, 225, 0.5)"
      },
      backgroundImage: {
        "primary-button": "linear-gradient(180deg, rgba(5,32,18,1) 0%, rgba(6,34,18,1) 48%, rgba(14,58,13,1) 85%, rgba(43,99,10,1) 100%)",
        "logo": "url(/src/assets/logo.png)"
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
        "1/8": "12.5%",
        "60": "60px",
        "80": "80%"
      },
      maxWidth: {
        "70": "70px"
      },
      minWidth: {
        "45": "45px",
        "60": "65px",
        "90": "90px",
        "450": "450px"
      }
    },
  },
  variants: {
    extend: {
      background: ['active'],
      backgroundColor: ['active'],
      backgroundImage: ['active'],
      borderWidth: ['last'],
      fill: ['hover', 'focus'],
      appearance: ['hover', 'focus'],
      border: ['last'],
      ring: ['focus'],
    },
  },
  plugins: [],
}
