/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        'showSearch': 'showSearch ease .25s',
        'hideSearch': 'hideSearch ease .25s',
      },
      keyframes: {
        showSearch: {
          '0%': {maxHeight: '0rem'},
          '100%': {maxHeight: '10rem'},
        },
        hideSearch: {
          '0%': {maxHeight: '10rem'},
          '100%': {maxHeight: '0rem'},
        },
      },
    },
  },
  plugins: [],
}
