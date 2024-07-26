/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "first-orange": "#F44336",
        "first-gray": "#CAD0D3",
      },
      fontFamily: {
        "initial-font": ["Ubuntu", "sans-serif"],
        "logo-font": ["Playwrite IN", "serif"],
        "header-top-font": ["IBM Plex Sans", "sans-serif"],
        "footer-font": ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
