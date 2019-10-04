import Vue from 'vue';
import App from './App.vue';

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import VueMask from 'v-mask';
Vue.use(VueMask);

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
