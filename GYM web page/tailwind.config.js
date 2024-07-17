/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        whiteShadow: "10px 10px rgb(255,255,255)", // Corrected to a string
      },
    },
  },
  plugins: [],
};
