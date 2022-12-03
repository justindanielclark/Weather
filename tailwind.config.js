const slideTimings = '.5s';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      animation: {
        slideLeft: `slideLeft ease-in-out ${slideTimings}`,
        slideRight: `slideRight ease-in-out ${slideTimings}`,
      },
      keyframes: {
        slideLeft: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        slideRight: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0%)'}
        }
      },
    },
  },
  plugins: [],
}
