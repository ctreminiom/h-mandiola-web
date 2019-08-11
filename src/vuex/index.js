import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './module/user'
import errorModule from './module/errors'
import consecutiveModule from './module/consecutives'
import logModule from './module/logs'
import roleModule from './module/roles'
import grantModule from './module/grants'

import activityModule from './module/activities'
import roomModule from './module/rooms'



Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user: userModule,
    logs: logModule,
    errors: errorModule,
    consecutives: consecutiveModule,
    roles: roleModule,
    grants: grantModule,
    activity: activityModule,
    rooms: roomModule,
  }
})