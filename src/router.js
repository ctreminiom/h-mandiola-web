import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/index'



import AdminDashboard from './layout/admin/dashboard'

import ClientLogin from './views/client/Login'
import AdminLogin from './views/admin/Login'
import Errorr from './views/admin/401'


import AdminUser from './views/admin/security/User'
import newUser from './views/admin/security/NewUser'
import ChangePassword from './views/admin/security/ChangePassword'
import ChangeRoles from './views/admin/security/ChangeRoles'

import AdminRole from './views/admin/security/Role'
import AdminLog from './views/admin/queries/Logs'
import AdminError from './views/admin/queries/Errors'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'client-login',
    component: ClientLogin,
  },
  {
    path: "/admin/login",
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: "/error/401",
    name: '401',
    component: Errorr,
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: AdminDashboard,
    meta: {
      guest: false
    },
    children: [{
      path: "/admin/dashboard/security/users",
      name: "admin-dashboard-security",
      component: AdminUser,
      meta: {
        admin: true,
        security: true
      }
    },
    {
      path: "/admin/dashboard/security/roles",
      name: "admin-dashboard-roles",
      component: AdminRole,
      meta: {
        jwt: true,
        admin: true,
        security: true
      }
    },
    {
      path: "/admin/dashboard/security/users/new",
      name: "security-users-new",
      component: newUser,
      meta: {
        jwt: true,
        admin: true,
        security: true
      }
    },
    {
      path: "/admin/dashboard/security/user/:username/change/password",
      name: "security-users-change-password",
      component: ChangePassword,
      meta: {
        jwt: true,
        admin: true,
        security: true
      },
      props: true
    },
    {
      path: "/admin/dashboard/security/user/:username/change/roles",
      name: "security-users-change-roles",
      component: ChangeRoles,
      meta: {
        jwt: true,
        admin: true,
        security: true
      },
      props: true
    },
    {
      path: "/admin/dashboard/queries/logs",
      name: "queries-logs",
      component: AdminLog,
      meta: {
        queries: true
      }
    },
    {
      path: "/admin/dashboard/queries/errors",
      name: "queries-errors",
      component: AdminError,
      meta: {
        queries: true
      }
    }
    ]
  },

  ]


})

router.beforeEach((to, from, next) => {

  if (to.meta.admin) {
    store.dispatch("me", '').then(response => {

      if (!response.body.admin) {
        next({ name: "401" })
      }

      next()
    }, () => {
      next({ name: "401" })
    });

  }


  else if (to.meta.security) {
    store.dispatch("me", '').then(response => {

      if (!response.body.security) {
        next({ name: "401" })
      }

      next()
    }, () => {
      next({ name: "401" })
    });

  }

  else if (to.meta.queries) {
    store.dispatch("me", '').then(response => {

      if (!response.body.queries) {
        next({ name: "401" })
      }

      next()
    }, () => {
      next({ name: "401" })
    });

  }


  next()




})



export default router