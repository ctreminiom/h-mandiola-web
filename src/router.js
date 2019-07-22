import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/admin/Login.vue'

import Dashboard from './layouts/AdminLayout.vue'
import NotFound from './views/admin/NotFound.vue'

import Security from './views/admin/Security.vue'
import Administration from './views/admin/Administration.vue'
import Queries from './views/admin/Queries.vue'

import Consecutives from './views/admin/Consecutive.vue'
import Rooms from './views/admin/Rooms.vue'
import Activities from './views/admin/Activities.vue'
import Prices from './views/admin/Prices.vue'
import Clients from './views/admin/Clients.vue'

import Logs from './views/admin/Logs.vue'
import Errors from './views/admin/Errors.vue'
import ActiveClients from './views/admin/ActiveClients.vue'
import RoomsReady from './views/admin/ReadyRooms.vue'

import UserManagement from './views/admin/NewUser.vue'
import ChangePassword from './views/admin/ChangePassword.vue'

Vue.use(Router)

export default new Router({ 
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound,
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'security',
          name: 'user',
          component: Security
        },
        {
          path: 'administration',
          name: 'administration',
          component: Administration,
        },
        {
          path: 'queries',
          name: 'queries',
          component: Queries
        }
      ]
    },
    {
      path: '/dashboard/administration',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'consecutives',
          name: 'consecutives',
          component: Consecutives
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: Rooms
        },
        {
          path: 'activities',
          name: 'activities',
          component: Activities
        },
        {
          path: 'prices',
          name: 'prices',
          component: Prices
        },
        {
          path: 'clients',
          name: 'clients',
          component: Clients
        }
      ]
    },
    {
      path: '/dashboard/queries',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'errors',
          name: 'errors',
          component: Errors
        },
        {
          path: 'logs',
          name: 'logs',
          component: Logs
        },
        {
          path: 'clients',
          name: 'clients',
          component: ActiveClients
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: RoomsReady
        }
      ]
    },
    {
      path: '/dashboard/security',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'user/new',
          name: 'newUser',
          component: UserManagement
        },
        {
          path: 'user/:id/change/password',
          name: 'changePassword',
          component: ChangePassword,
          props: true
        }
      ]
    },

    {
      path: '*',
      redirect: '/NotFound'
    }

  ]
})
