const webpack = require( 'webpack');
const path = require('path');
const fse = require('fs-extra');

const srcPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');

fse.copySync(srcPath, distPath);

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    'index': './vue-core-image-upload.vue',
    'lib/helper': './lib/helper.js',
    'lib/drag': './lib/drag.js',
    'lib/resize': './lib/resize.js',
    'lib/loading-gif': './lib/loading-gif.js',
    'props': './props',

  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'VueCoreImageUpload',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          },
        }],
        exclude: /dist/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: [{
            loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader'
        },
      },
      {
        test: /\.css$/,
        use: {
            loader: 'style!css'
        },
      }
    ]
  },
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )*/
  ],
}
