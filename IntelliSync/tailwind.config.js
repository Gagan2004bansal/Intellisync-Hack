/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    function ({ addComponents }) {
      addComponents({
        '.scrollbar-hide': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Internet Explorer and Edge */
          '-ms-overflow-style': 'none',
          /* For Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      })
    }
  ]
}