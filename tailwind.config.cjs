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
      secondary: "#676BDC",
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
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "8rem",
      },
    },
    fontFamily: {
      body: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
      display: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
      primary: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      secondary: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
