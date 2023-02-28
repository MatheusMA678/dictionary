/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      serif: "Roboto Slab, serif",
      cursive: "Courgette, cursive",
      mono: "monospace",
    },
    extend: {},
  },
  plugins: [],
};
