/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#364A63",
        priceText: "#6576FF",
        baseText: "#8091A7",
        bandColor1: "#816BFF",
        bandColor2: "#1FCEC9",
        bandColor3: "#4B97D3",
        bandColor4: "#3B4747",
        buttonBorder: "#DBDFEA",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

