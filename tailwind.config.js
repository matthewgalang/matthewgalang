module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '50vh': '50vh',
        '80vh': '80vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
