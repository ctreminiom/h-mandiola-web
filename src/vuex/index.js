import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './module/user'
import errorModule from './module/errors'
import consecutiveModule from './module/consecutives'
import logModule from './module/logs'



Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user: userModule,
    logs: logModule,
    errors: errorModule,
    consecutives: consecutiveModule,
  }
})