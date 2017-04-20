const webpack = require( 'webpack' );
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'index': './vue-core-image-upload.vue'
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    library: 'VueCoreImageUpload',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
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
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ],
}
