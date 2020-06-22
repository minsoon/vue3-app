const path = require('path');
const pjson = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = Object.is(process.env.NODE_DEV, 'production');

process.env.VUE_APP_VERSION = pjson.version

module.exports = {
  assetsDir: './static',

  configureWebpack: (config) => {
    const env = process.env.NODE_ENV;
    switch (env) {
      case 'development':
        console.log('build: development');
        break;
      case 'production':
        console.log('build: production');
        break;
      case 'develop':
        console.log('build: develop');
        break;
      default:
        console.error('build: error');
        break;
    }
    let plugins = [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: pjson.name,
        hash: true,
        favicon: './public/favicon.ico',
        href: path.join('/', pjson.name, '/'),
        minify: {
          removeAttributeQuotes: false,
          collapseWhitespace: false,
        }
      })
    ];
    config.plugins = [...config.plugins, ...plugins];
    if (isProduction) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
            }
          },
          sourceMap: false,
          parallel: true,
        })
      )
    }
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
    compress: true,
    open: true,
    inline: true,
    hot: true,
  },

  publicPath: './'
}