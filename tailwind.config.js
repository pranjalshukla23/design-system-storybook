/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans"],
      },
      boxShadow: {
        "3xl": "0px 4px 16px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        bcolor: "rgba(24, 24, 24, 0.25)",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(90deg, #FCD635 0%, #F7A928 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
