import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'

import Notifications from 'vue-notification'
import Resource from 'vue-resource' // Setup HTTP requested funcionality

import ShardsVue from 'shards-vue';

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

ShardsVue.install(Vue);
Vue.use(Resource);
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
