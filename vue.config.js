const path = require('path')
const pjson = require('./package.json')

process.env.VUE_APP_VERSION = pjson.version

module.exports = {
  assetsDir: './static',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
    compress: true,
    open: true,
    inline: true,
    hot: true,
  }
}