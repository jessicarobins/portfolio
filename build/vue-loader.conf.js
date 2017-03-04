var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var postcssScss = require('postcss-scss')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: {
    plugins: [
      require('precss')(),
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  options: {
    parser: postcssScss
  }
}
