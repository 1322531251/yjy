/** @type {import('tailwindcss').Config} */

// 使用静态工具或动态工具
// const plugin = require('tailwindcss/plugin')


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require(
      '@tailwindcss/typography',
      '@tailwindcss/forms',
      '@tailwindcss/aspect-ratio',
      '@tailwindcss/container-queries'),
  ],


// 静态工具
// module.exports = {
//   plugins: [
//     plugin(function({ addUtilities }) {
//       addUtilities({
//         '.content-auto': {
//           'content-visibility': 'auto',
//         },
//         '.content-hidden': {
//           'content-visibility': 'hidden',
//         },
//         '.content-visible': {
//           'content-visibility': 'visible',
//         },
//       })
//     })
//   ]
// }


// 动态工具
// module.exports = {
//   theme: {
//     tabSize: {
//       1: '1',
//       2: '2',
//       4: '4',
//       8: '8',
//     }
//   },
//   plugins: [
//     plugin(function({ matchUtilities, theme }) {
//       matchUtilities(
//         {
//           tab: (value) => ({
//             tabSize: value
//           }),
//         },
//         { values: theme('tabSize') }
//       )
//     }, {
//         theme: {
//           tabSize: {
//             1: '1',
//             2: '2',
//             4: '4',
//             8: '8',
//           }
//         }
//       })
//   ]
// }


// presets 选项允许指定一个不同的配置作为基础，从而轻松打包一组跨项目重用的自定义设置
// module.exports = {
//   presets: [
//     require('@acmecorp/tailwind-base')   //如果禁用，则将 presets 设置为空数组
//   ],
  
//   corePlugins: {  // 核心插件
//     cursor: false
//   }


// 禁用预检
// module.exports = {
//   corePlugins: {
//     preflight: false,
//   }




//   // 内容：配置所有 HTML 模板、JavaScript 组件和任何其他包含 Tailwind 类名称的源文件的路径
//   // ps：应编写针对于项目根目录的路径
//   content: {
//     // 解析相对路径
//     relative: true,
//     files:[
//       './public/**/*.html',

//       // 永远不要在内容配置中包含 CSS 文件
//       // './src/**/*.css',
//       './src/**/*.{html,js,jsx,ts,tsx,vue}',
    
//       './pages/**/*.{html,js}',
//       './components/**/*.{html,js}',

//       // 路径
//       // './public/index.html',
//       // './src/pages/**/*.{html,js}',
//       // './src/components/**/*.{html,js}',
//       // './src/layouts/**/*.{html,js}',
//       // './src/index.html',

    
//       // 如果在带有工作区的单一仓库中工作，需要使用 require.resolve 来确保 Tailwind 可以看到内容文件
//       // path.join(path.dirname(require.resolve('@my-company/tailwind-components')), '**/*.js'),

//       // 配置原始内容
//       // { raw: '<div class="font-bold">', extension: 'html' },
//     ],

//     // 确保 Tailwind 生成内容文件中不存在的某些类名
//     // safelist: [
//     //   'bg-red-500',
//     //   'text-3xl',
//     //   'lg:text-4xl',

//     // //使用正则表达式
//     //       {
//     //         pattern: /bg-(red|green|blue)-(100|200|300)/,

//     //         // 强制 Tailwind 为任何匹配的类生成变体
//     //         variants: ['lg', 'hover', 'focus', 'lg:hover'],
//     //       },
//     // ],

//     // 告诉 Tailwind 忽略它在你的内容中检测到的特定类
//     // 仅支持字符串
//     // blocklist: [
//     //   'container',
//     //   'collapse',
//     // ],

//     // 在提取类之前，使用 content.transform 选项转换与特定文件扩展名匹配的任何内容
//     // ps：使用 content.transform 时，你需要使用 content.files 提供源路径，而不是作为 content 下的顶层数组。
//     transform: {
//       md: (content) => {
//         return remark().process(content)
//       }
//     },

//     // 使用 extract 选项覆盖 Tailwind 用于检测特定文件扩展名的类名的逻辑
//     // ps：同transform
//     // extract: {
//     //   wtf: (content) => {
//     //     return content.match(/[^<>"'`\s]*/)
//     //   }
//     // },


//   },

// // 主题
//   theme: {

//     // 屏幕
//     // 添加较小断点不能使用extend，需使用screens
//     screens:{
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       '2xl': '1536px',


//       // 可以自定义'sm','md'等名称
//       // 'tablet': '640px',
//       // // => @media (min-width: 640px) { ... }

//       // 'laptop': '1024px',
//       // // => @media (min-width: 1024px) { ... }

//       // 'desktop': '1280px',
//       // // => @media (min-width: 1280px) { ... }


//       // 最大宽度断点
//       '2xl': {'max': '1535px'},
//       // => @media (max-width: 1535px) { ... }

//       'xl': {'max': '1279px'},
//       // => @media (max-width: 1279px) { ... }

//       'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }

//       'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       'sm': {'max': '639px'},
//       // => @media (max-width: 639px) { ... }


//       // 固定范围断点
//       'sm': {'min': '640px', 'max': '767px'},
//       // => @media (min-width: 640px and max-width: 767px) { ... }

//       'md': {'min': '768px', 'max': '1023px'},
//       // => @media (min-width: 768px and max-width: 1023px) { ... }

//       'lg': {'min': '1024px', 'max': '1279px'},
//       // => @media (min-width: 1024px and max-width: 1279px) { ... }

//       'xl': {'min': '1280px', 'max': '1535px'},
//       // => @media (min-width: 1280px and max-width: 1535px) { ... }

//       '2xl': {'min': '1536px'},
//       // => @media (min-width: 1536px) { ... }


//       // 使用 raw 键定义的媒体查询将按原样输出，而 min 和 max 键将被忽略
//       'tall': { 'raw': '(min-height: 800px)' },
//       // => @media (min-height: 800px) { ... }
//     },

//     // 颜色
//     colors:{
//       transparent: 'transparent',
//       black: '#000',
//       white: '#fff',
//       gray: {
//         100: '#f7fafc',
//         // ...
//         900: '#1a202c',
//       },

//       current: 'currentColor',
//       purple: '#3f3cbb',
//       midnight: '#121063',
//       metal: '#565584',
//       tahiti: '#3ab7bf',
//       silver: '#ecebff',
//       'bubble-gum': '#ff77e9',
//       bermuda: '#78dcca',
//     },

//     //间距
//     spacing: {
//       px: '1px',
//       0: '0',
//       0.5: '0.125rem',
//       1: '0.25rem',
//       1.5: '0.375rem',
//       2: '0.5rem',
//       2.5: '0.625rem',
//       3: '0.75rem',
//       3.5: '0.875rem',
//       4: '1rem',
//       5: '1.25rem',
//       6: '1.5rem',
//       7: '1.75rem',
//       8: '2rem',
//       9: '2.25rem',
//       10: '2.5rem',
//       11: '2.75rem',
//       12: '3rem',
//       14: '3.5rem',
//       16: '4rem',
//       20: '5rem',
//       24: '6rem',
//       28: '7rem',
//       32: '8rem',
//       36: '9rem',
//       40: '10rem',
//       44: '11rem',
//       48: '12rem',
//       52: '13rem',
//       56: '14rem',
//       60: '15rem',
//       64: '16rem',
//       72: '18rem',
//       80: '20rem',
//       96: '24rem',
//     },

//     //自定义生成边界半径工具
//     borderRadius: {
//       'none': '0',
//       'sm': '.125rem',
//       DEFAULT: '.25rem',
//       'lg': '.5rem',
//       'full': '9999px',
//     },

//     // 引用其他值
//     // 通过在 backgroundSize 配置中引用 theme('spacing') 为间距比例中的每个值生成 background-size 工具
//     backgroundSize: ({ theme }) => ({
//       auto: 'auto',
//       cover: 'cover',
//       contain: 'contain',
//       ...theme('spacing')
//     }),

//     // 扩展默认主题
//     extend: {
//       fontFamily: {
//         display: 'Oswald, ui-serif', // Adds a new `font-display` class
//         // 引用默认主题
//         sans: [
//           'Lato',
//         ],
//       },

//       // 覆盖单个屏幕
//       screens: {
//         '3xl': '1600px', // Adds a new `3xl:` screen variant
//       },
//       colors: {
//         current: 'currentColor',
//         green: colors.emerald,
//         yellow: colors.amber,
//         purple: colors.violet,
//         gray: colors.neutral,
//       },
//       aria: {
//         asc: 'sort="ascending"',
//         desc: 'sort="descending"',
//       },
//     },
//     supports: {
//       grid: 'display: grid',
//     },
//   },

//   // 插件
//   plugins: [
//     // 如果您发现自己在项目中多次使用相同的任意修饰符，则可能值得使用 API 将其提取到插件中：addVariant
//     plugin(function ({ addVariant }) {
//       // addVariant('third', '&:nth-child(3)')
//     }),

//     // 官方插件
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/container-queries'),
//   ],

//   // 核心插件
//   corePlugins: {
//     preflight: false,
//     float: false,
//     objectFit: false,
//     objectPosition: false,
//     opacity:false,
//   },

//   // 预设
//   presets: [
//     require('@acmecorp/base-tailwind-config')
//   ],

//   // 前缀
//   prefix: 'tw-',

//   // 重要
//   important:true,
//   // 选择器策略
//   important:'#app',

//   // 重要修饰符
//   // 在开头添加 '!' 字符来使任何工具变得重要，'!' 始终位于工具名称的开头，在任何变体之后，但在任何前缀之前

//   // 分隔器：将修饰符（屏幕尺寸、hover、focus 等）与工具名称（text-center、items-end 等）分开。
//   separator:'_',//默认使用冒号





//   // 手动切换深色模式
//   darkMode:'class',

//   // 自定义主题
//   screens: {
//     'tablet': '640px',
//     // => @media (min-width: 640px) { ... }

//     'laptop': '1024px',
//     // => @media (min-width: 1024px) { ... }

//     'desktop': '1280px',
//     // => @media (min-width: 1280px) { ... }
//   },


//   // 自定义样式
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
