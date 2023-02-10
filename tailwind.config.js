const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
      },
      colors: {
        blue: "#24303E",
      },
    },
  },
  plugins: [],
};
