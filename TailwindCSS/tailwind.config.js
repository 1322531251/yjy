/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
  './public/**/*.html',
  './src/**/*.{html,js,jsx,ts,tsx,vue}',
],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      }
    },
    supports: {
      grid: 'display: grid',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  
}

