import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './module/user'
import logModule from './module/logs'
import errorModule from './module/errors'



Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user: userModule,
    logs: logModule,
    errors: errorModule,
  }
})