/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans serif"],
    },
    extend: {
      colors: {
        black: "#000000",
        footergradwhite: "#ffffff",
        footergradmidgrey: "#D9D3D3",
        footergradgrey: "#ADAAAA",
        makegradgrey: "#D4D4D4",
        footertextgrey: "#62646C",
        footertextnavyblue: "#OE1735",
        themered: "#FF4747",
      },

      backgroundColor: {
        d9d7d7: "#d9d7d7",
      },

      height: {
        footerlg: "412px",
        makelg: "666px",
        slogo: "74px",
        logo: "92px",
      },
      width: {
        slogo: "266px",
        logo: "333px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
