/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        blob: "blob 10s infinite",
        tilt: "tilt 10s infinite linear"
      },
      keyframes:{        
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(5deg)"
          },
          "75%": {
            transform: "rotate(-5deg)"
          }
        }
      }
    },
  }, 
  plugins: [
    require('flowbite/plugin')
  ],
});