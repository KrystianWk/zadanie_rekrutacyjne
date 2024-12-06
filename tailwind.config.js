/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Primary: "#7209B7",
        Primary50: "rgba(114, 9, 183, 0.5)",
        Black100: "#353535",
        Black75: "#676767",
        Black50: "#9B9B9B",
        Black25: "#CDCDCD",
        White: "#FFFFFF",
        white98: "#FAFAFA",
        white97: "#F7F7F8",
      },
    },
  },
  plugins: [],
};
