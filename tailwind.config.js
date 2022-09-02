/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["times new roman", "times", "serif"],
        'lato': ["lato", "sans-serif"],
        'playfair': ["playfair display", "serif"],

      },
      screens: {
        "mobile": { "min": "360px","max": "640px" },
      }
    },
  },
  plugins: [],
}
