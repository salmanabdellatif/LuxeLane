/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        mainRed: "#DB4444",
        hoverRed: "#E07575",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        inter: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
};
