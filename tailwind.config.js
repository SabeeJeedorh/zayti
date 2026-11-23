/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F0",
        paper: "#FBF6ED",
        ink: "#683519",
        bronze: "#C38738",
        "bronze-dark": "#5A3018",
        olive: "#704E34",
        "olive-dark": "#5A3018",
        zayti: {
          brown: "#683519",
          deep: "#5A3018",
          gold: "#C38738",
          cream: "#FAF7F0",
          soft: "#FBF6ED",
          taupe: "#704E34",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
        sans: ["var(--font-worksans)", "sans-serif"],
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};
