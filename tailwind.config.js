const { fontFamily } = require("tailwindcss/defaultTheme");

const pxToRem = (px) => `${px / 16}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
      },
      colors: {
        blue: "#24303E",
        light: "#FFFCF8",
        yellow: "#FBD600",
        gray: {
          100: "#808397",
          200: "#A7AAAD",
          300: "#5B636D",
        },
        link: {
          yellow: "#FAD400",
          red: "#FE7766",
        },
      },
      borderWidth: {
        12: "12px",
      },
      fontSize: {
        h2: [pxToRem(40), pxToRem(49)],
        desc: [pxToRem(18), pxToRem(30)],
        link: [pxToRem(15), pxToRem(25)],
        "h2-alt": [pxToRem(28), pxToRem(35)],
        "desc-alt": [pxToRem(16), pxToRem(27)],
      },
      padding: {
        27.5: "6.875rem",
      },
      height: {
        600: "",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
