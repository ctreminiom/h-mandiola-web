import Vue from 'vue'
import Router from 'vue-router'

import AdminDashboard from './layout/admin/dashboard'

import ClientLogin from './views/client/Login'
import AdminLogin from './views/admin/Login'

import AdminUser from './views/admin/security/User'
import newUser from './views/admin/security/NewUser'
import ChangePassword from './views/admin/security/ChangePassword'
import AdminRole from './views/admin/security/Role'


import AdminLog from './views/admin/queries/Logs'
import AdminError from './views/admin/queries/Errors'


import ActivityAdmin from './views/admin/administration/Activity'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'client-login',
      component: ClientLogin
    },
    {
      path: "/admin/login",
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: "/admin/dasboard",
      name: 'admin-dashboard',
      component: AdminDashboard,
      children: [
        {
          path: 'security/users',
          name: 'users',
          component: AdminUser
        },
        {
          path: 'security/roles',
          name: 'roles',
          component: AdminRole
        },
        {
          path: 'queries/logs',
          name: 'logs',
          component: AdminLog
        },
        {
          path: 'queries/errors',
          name: 'errors',
          component: AdminError
        },
        {
          path: 'administration/actities',
          name: 'admin-activity',
          component: ActivityAdmin
        }
      ]
    },
    {
      path: "/admin/dasboard/security",
      name: 'dashboard',
      component: AdminDashboard,
      children: [
        {
          path: 'user/new',
          name: 'new-user',
          component: newUser,
        },
        {
          path: 'user/:id/change/password',
          name: 'changePassword',
          component: ChangePassword,
          props: true
        }
      ]
    }
  ]
})
