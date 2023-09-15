/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans serif"],
    },
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 0)",
        midgrey: "rgba(217, 211, 211, 0.724)",
        grey: "rgba(172, 170, 170, 1)",
        red: "#ff0000",
        green: "#00ff00",
        footertextgrey: "#62646C",
        footertextnavyblue: "#OE1735",
      },
      height: {
        footerlg: "412px",
        slogo: "74px",
        logo: "92px",
      },
      width: {
        slogo: "266px",
        logo: "333px",
      },
    },
  },
  plugins: [],
};
