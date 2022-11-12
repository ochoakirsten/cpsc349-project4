/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs"],
  theme: {
    extend: {},
  },

  plugins: [require("tw-elements/dist/plugin")],

};
