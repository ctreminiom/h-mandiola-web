import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VeeValidate from 'vee-validate';

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)


Vue.use(AuthPlugin);
Vue.directive("highlightjs", HighlightJs);

import { VueReCaptcha } from 'vue-recaptcha-v3'
 
// For more options see below
Vue.use(VueReCaptcha, { siteKey: '6LcNDbUUAAAAANnS7j4i5oM-LE4O6cvlX6Y02t4I' })

Vue.use(VeeValidate);


import DateRangePicker from "@gravitano/vue-date-range-picker";
 
// use the plugin
Vue.use(DateRangePicker);



Vue.config.productionTip = false;

library.add(faLink, faUser, faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  methods: {
    recaptcha() {
      this.$recaptcha('login').then((token) => {
        console.log(token) // Will print the token
      })
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')