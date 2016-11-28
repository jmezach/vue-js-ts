import Vue = require('vue')
import App from './app.component'

new Vue({
  el: '#app',
  components: { App },
  render: h => h('app')
})
