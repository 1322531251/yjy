/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
let plugin = require('tailwindcss/plugin')
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
      },
      aria: {
        asc: 'sort="ascending"',
        desc: 'sort="descending"',
      },
    },
    supports: {
      grid: 'display: grid',
    },
  },
  plugins: [
    // 如果您发现自己在项目中多次使用相同的任意修饰符，则可能值得使用 API 将其提取到插件中：addVariant
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      // addVariant('third', '&:nth-child(3)')
    })
  ],
  corePlugins: {
    preflight: false,
  },

  // 手动切换深色模式
  // darkMode:'class',

  // 自定义主题
  // screens: {
  //   'tablet': '640px',
  //   // => @media (min-width: 640px) { ... }

  //   'laptop': '1024px',
  //   // => @media (min-width: 1024px) { ... }

  //   'desktop': '1280px',
  //   // => @media (min-width: 1280px) { ... }
  // },


  // 自定义样式
//   screens: {
//     sm: '480px',
//     md: '768px',
//     lg: '976px',
//     xl: '1440px',
//   },
//   colors: {
//     'blue': '#1fb6ff',
//     'pink': '#ff49db',
//     'orange': '#ff7849',
//     'green': '#13ce66',
//     'gray-dark': '#273444',
//     'gray': '#8492a6',
//     'gray-light': '#d3dce6',
//   },
//   fontFamily: {
//     sans: ['Graphik', 'sans-serif'],
//     serif: ['Merriweather', 'serif'],
//   },
//   extend: {
//     spacing: {
//       '128': '32rem',
//       '144': '36rem',
//     },
//     borderRadius: {
//       '4xl': '2rem',
//     }
//   }
}

