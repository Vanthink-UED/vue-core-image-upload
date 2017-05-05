'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: 'site',
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '/',
  // disable babelrc by default
  babel: {
    babelrc: false,
    presets: ['vue-app','es2015','stage-2'],
  }
}
