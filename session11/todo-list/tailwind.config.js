/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052CC",
        secondary: "#172B4D",
        gray: "#CCC",
      },
    },
  },
  plugins: [],
};
