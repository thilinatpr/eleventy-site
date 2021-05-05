// tailwind.config.js
module.exports = {
  purge: {
      enabled: true,
      content: ['./_includes/layouts/*.njk'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}