/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        // 'showSearch': 'showSearch ease .25s',
      },
      keyframes: {
        // showSearch: {
        //   '0%': {maxHeight: '0rem'},
        //   '100%': {maxHeight: '14rem'},
        // },
      },
    },
  },
  plugins: [],
}
