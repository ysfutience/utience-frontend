/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#22272f",
        searchbarColor: "hsl(220deg 14.75% 23.92%)",
        searchbarText: "hsl(218deg 14% 64%)",
        selectedBg: "#283844"
      }
    },
  },
  plugins: [],
}

