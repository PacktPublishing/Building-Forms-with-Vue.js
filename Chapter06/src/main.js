import Vue from 'vue';
import App from './App.vue';

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import VueMask from 'v-mask';
Vue.use(VueMask);

import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios';

const store = new Vuex.Store({
  state: {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      love: 'fun',
      telephone: '',
      website: ''
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    getLoggedInUser(context) {
      axios.get('http://localhost:3000/user')
      .then(response => {
        context.commit('updateUser', response.data);
      });
    },
    updateUserData(context, payload) {
      const userCopy = {...context.state.user};
      userCopy[payload.property] = payload.value;

      context.commit('updateUser', userCopy);
    }
  }
});

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');
