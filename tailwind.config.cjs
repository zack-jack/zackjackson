/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFF",
      black: "#000",
      primary: "#3BAFCA",
      "primary-light": "#56C4E0",
      "primary-dark": "#169AB5",
      secondary: "#676BDC",
      "secondary-light": "#787AED",
      "secondary-dark": "#555DCB",
      gray: {
        100: "#F5F5F5",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#80858F",
        700: "#29303E",
        800: "#222A35",
        900: "#1B232E",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "4rem",
        lg: "8rem",
      },
    },
    fontFamily: {
      primary: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      secondary: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
      cursive: ["Yellowtail", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
