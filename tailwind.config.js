/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "rgb(20 184 166)",
        secondary: "#64748b",
        dark: "rgb(15 23 42)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
