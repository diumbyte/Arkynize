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
        }
      },
      fontFamily: {
        "mulish": ["Mulish", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
