import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { Message } from 'element-ui'
// Vue.prototype.$message = Message
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

Vue.use(VueAxios, axios)
// axios.defaults.baseURL = 'http'
// Vue.proptype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
