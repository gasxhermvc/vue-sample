import Vue from 'vue'

import "./scss/app.scss"

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
