import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ShardsVue from 'shards-vue';

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

ShardsVue.install(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
