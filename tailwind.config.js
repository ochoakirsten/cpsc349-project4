/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs", "./mockups/*.html"],
  theme: {
    extend: {},
  },

  plugins: [require("tw-elements/dist/plugin")],

};
