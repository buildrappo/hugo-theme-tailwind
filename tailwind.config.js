/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./themes/**/layouts/**/*.html", "./layouts/**/*.html"],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            "> ul > li > input:first-child": {
              marginTop: 0,
            },
            "> ul > li > input:last-child": {
              marginBottom: 0,
            },
            "> ol > li > input:first-child": {
              marginTop: 0,
            },
            "> ol > li > input:last-child": {
              marginBottom: 0,
            },
            ".gist .highlight tbody tr": {
              borderWidth: 0,
            },
          },
        },
      },
    },
    colors: {
      white: "#FFFFFFF",
      blurple: {
        50: "#dcccff",
        100: "#9665FF",
        900: "#5200FF",
        950: "#100033",
      },
      zinc: {
        50: "#FAFAFA",
        100: "#F3F3F3",
        200: "#F0F0F0",
        250: "#E6E6E6",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#B0B0B0",
        600: "#898989",
        700: "#787878",
        800: "#4C4C4C",
        900: "#191A23",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
