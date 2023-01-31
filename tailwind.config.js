/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFThin: ["SF-Pro-Display-Thin.otf"],
        SFRegular: ["SF-Pro-Display-Regular.otf"]
      },
      padding: {
        '1/3': '33.333333%',
        '2/3': '66.666667%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
