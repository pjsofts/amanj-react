/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: colors.red,
      primary: "#102448",
    },
    extend: {},
  },
  plugins: [],
};
