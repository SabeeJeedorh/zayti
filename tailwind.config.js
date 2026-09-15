/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F3E7",
        paper: "#FFFCF5",
        ink: "#3B2817",
        bronze: "#B8863E",
        "bronze-dark": "#8C5E23",
        olive: "#5B6B4F",
        "olive-dark": "#3F4B37",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};
