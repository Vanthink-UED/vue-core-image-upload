const webpack = require( 'webpack' )

module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js',
    library: 'vue-core-image-upload',
    libraryTarget: 'cmd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '', '.js', '.vue' ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ['transform-runtime']
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
  ]
}