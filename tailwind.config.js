/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#4CE0D2',
        secondary: '#22AAA1',
        pineGreen: '#135F63',
        darkGreen: '#041B15',
      },
    },
  },
  plugins: [],
}
