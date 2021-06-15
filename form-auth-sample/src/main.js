import Vue from 'vue'
import BootstrapVuew from 'bootstrap-vue'
import App from './App.vue'


import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVuew)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
