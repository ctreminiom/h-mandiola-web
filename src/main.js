import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'
import Resource from 'vue-resource'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'


Vue.use(Antd)
Vue.use(Resource);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
