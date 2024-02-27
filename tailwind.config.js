module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      fontSize: {
        '38': '38px',
        '46': '46px',
      },
      colors: {
        gray: {
          600: "#71717a",
          900: "#241715",
          "900_02": "#1c1c1c",
          "900_01": "#0e1729",
        },
        deep_orange: { A100: "#ff9581" },
        blue_gray: {
          50: "#edefef",
          100: "#d4d4d8",
          500: "#667084",
          800: "#2b454e",
          900: "#1a2e35",
        },
        black: { 900: "#000000", "900_01": "#000001" },
        teal: { 700: "#027269" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { sora: "Sora" },
    },
  },
  plugins: [],
};
