import Vue from 'vue'
import axios from 'axios'

import 'bulma-modal-fx/dist/css/modal-fx.css'
import 'bulma/css/bulma.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
