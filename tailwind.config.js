// const { transitionProperty } = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },

      colors: {
        Orangy: colors.orange,
      },

      backgroundImage: (theme) => ({
        "reviews-img": "url('/src/Assets/reviews-img.jpg')",
      }),

      fontFamily: { raleway: ["Raleway", "sans-serif"] },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      boxShadow: ["active"],
      textColor: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
