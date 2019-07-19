import Vue from 'vue'
import Vuex from 'vuex'

import userModule from '@/vuex/module/user'
import logModule from '@/vuex/module/logs'
import errorModule from '@/vuex/module/errors'
import consecutiveModule from '@/vuex/module/consecutives'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user: userModule,
    logs: logModule,
    errors: errorModule,
    consecutives: consecutiveModule,
  }
})