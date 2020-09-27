const path = require('path');

module.exports = {
  publicPath: './',
  configureWebpack: {
      resolve: {
        alias: {
          '@': path.join(__dirname, 'src'),
        },
      },
  },
  // 禁用eslint
  devServer: {
    overlay: {
        warnings: false,
        errors: false
    },
  
  },
  lintOnSave: false,
  // rem适配
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
          }),
          // require("postcss-pxtorem")({
          //   rootValue: 37.5, // 换算的基数  
          //   propList: ["*"]
          // })
        ]
      }
    }
  }
}