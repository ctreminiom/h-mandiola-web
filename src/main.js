import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VeeValidate from 'vee-validate';

import Resource from 'vue-resource'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(AuthPlugin);
Vue.directive("highlightjs", HighlightJs);

Vue.use(VeeValidate);

Vue.use(Resource);


Vue.http.interceptors.push((request, next) => {
  request.headers['Authorization'] = "Bearer " + localStorage.getItem("token")
  request.headers['Accept'] = 'application/json'
  next()
})


Vue.config.productionTip = false;

library.add(faLink, faUser, faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
