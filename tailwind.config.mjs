import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", ...defaultTheme.fontFamily.sans] },

      colors: {
        white: "#FCFCFC",
        black: "#1B1B1B",

        landing: {
          lightest: "#fdf8e1",
          light: "#fcefb4",
          DEFAULT: "#fae588",
          dark: "#ECC209",
          darkest: "#352C02",
        },

        bestpizza: {
          lightest: "#FFF8F0",
          light: "#FFE4C2",
          DEFAULT: "#FF6A00",
          dark: "#B34700",
          darkest: "#4D1F00",
        },

        // company-1
      },
    },
  },

  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
