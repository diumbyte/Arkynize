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
        "logo": "url(/src/assets/logo.png)"
      },
      fontFamily: {
        "mulish": ["Mulish", "sans-serif"]
      },
      maxWidth: {
        "2xs": "110px",
      },
      boxShadow: {
        "icon": "0 0 2px 2px rgba(0,0,0,.4), 0 0 0 3px rgba(156,127,89,1), 0 0 3px 5px rgba(0,0,0,0.6)"
      },
      width: {
        "30": "30%",
      },
      minWidth: {
        "90": "90px",
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
