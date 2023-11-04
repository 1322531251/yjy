// postcss.config.js
module.exports = {
    plugins: {

      // 使用多个CSS文件
      'postcss-import': {},

      
      'tailwindcss/nesting': 'postcss-nesting',
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
      tailwindcss: {},
      // 自定义配置路径
      // tailwindcss: {config: './tailwindcss-config.js'},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  }