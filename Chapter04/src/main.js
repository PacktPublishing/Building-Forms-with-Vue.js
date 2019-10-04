import Vue from 'vue'
import App from './App.vue'

import VueMask from 'v-mask'
Vue.use(VueMask);

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
