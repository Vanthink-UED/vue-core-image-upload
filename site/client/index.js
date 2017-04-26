import './promise-polyfill'
import { app } from './app'
import vendor from './lib/vendor';
import './less/vtui.less'

const lan = vendor.getLocalData('lan');
window.lan = lan;
console.log(lan);
// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
