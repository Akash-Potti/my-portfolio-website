/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondery: "#111212",
        accent: {
          DEFAULT: "#131327",
          text: "#c0e3ed"
        }
      }
    },
  },
  plugins: [],
}

