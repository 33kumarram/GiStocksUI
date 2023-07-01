/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultTheme,
    colors: {
      primary: "blue",
      secondary: "red",
      tertiary: "yellow",
      white: "#FFFFFF",
    },
    extent: {},
  },
  plugins: [],
};
