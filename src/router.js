import Vue from 'vue'
import Router from 'vue-router'

import AdminDashboard from './layout/admin'
import AdminHome from './views/admin/Home'
import AdminUsers from './views/admin/Users'
import AdminNewUser from './views/admin/NewUser'
import AdminChangePassword from './views/admin/ChangePassword'
import AdminUserGrants from './views/admin/ChangeGrants'


import AdminAdministrator from './views/admin/Administration'
import AdminConsecutives from './views/admin/Consecutives'
import AdminActivities from './views/admin/Activities'
import AdminNewActivity from './views/admin/NewActivity'
import AdminRooms from './views/admin/Rooms'
import AdminNewRoom from './views/admin/NewRoom'
import AdminProducts from './views/admin/Product'
import AdminNewProduct from './views/admin/NewProduct'
import AdminClients from './views/admin/Clients'

import AdminQueries from './views/admin/Queries'
import AdminLogs from './views/admin/Logs'
import AdminErrors from './views/admin/Errors'
import AdminActiveRooms from './views/admin/RoomsReady'


import AdminTransactions from './views/admin/Transations'
import AdminReservations from './views/admin/Reservations'
import AdminTransactionsAPI from './views/admin/TransactionsAPI'

import PublicLogin from './views/public/Public'

import AdminClient from './layout/client'
import ClientHome from './views/client/Home'
import RoomsClient from './views/client/Rooms'
import DateClient from './views/client/Date'
import CheckoutPayment from './views/client/Checkout'
import CreditCardsClient from './views/client/CreditCards'
import NewCreditCard from './views/client/NewCreditCard'


import Callback from "./components/Callback.vue";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/",
      name: 'public-login',
      component: PublicLogin
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard,
      meta: { requiresAdminAuth: true },
      children: [{
        path: '/admin/dashboard/home',
        name: 'admin-dashboard-home',
        component: AdminHome,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/security/users",
        name: "admin-users",
        component: AdminUsers,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/security/new/user",
        name: "admin-new-user",
        component: AdminNewUser,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/security/user/:username/change/password",
        name: "admin-change-user-password",
        component: AdminChangePassword,
        meta: { requiresAdminAuth: true },
        props: true
      },
      {
        path: "/admin/dashboard/security/user/:username/grants",
        name: "admin-user-grants",
        component: AdminUserGrants,
        meta: { requiresAdminAuth: true },
        props: true
      },
      {
        path: "/admin/dashboard/administration",
        name: "admin-administrator",
        component: AdminAdministrator,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/administration/consecutives",
        name: "admin-consecutives",
        component: AdminConsecutives,
        meta: { requiresAdminAuth: true },

      }, 
      {
        path: "/admin/dashboard/administration/activities",
        name: "admin-activities",
        component: AdminActivities,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/administration/activity/new",
        name: "admin-activity-new",
        component: AdminNewActivity,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/administration/rooms",
        name: "admin-rooms",
        component: AdminRooms,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/administration/room/new",
        name: "admin-room-new",
        component: AdminNewRoom,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/administration/products",
        name: "admin-products",
        component: AdminProducts,
        meta: { requiresAdminAuth: true },
      },
      {
        path: "/admin/dashboard/administration/product/new",
        name: "admin-product-new",
        component: AdminNewProduct,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/administration/active/clients",
        name: "admin-clients-active",
        component: AdminClients,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/queries",
        name: "admin-queries",
        component: AdminQueries,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/queries/logs",
        name: "admin-queries-logs",
        component: AdminLogs,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/queries/errors",
        name: "admin-queries-errors",
        component: AdminErrors,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/queries/active/rooms",
        name: "admin-queries-active-rooms",
        component: AdminActiveRooms,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/queries/active/clients",
        name: "admin-queries-clients-active",
        component: AdminClients,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/transactions",
        name: "admin-transactions",
        component: AdminTransactions,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/transactions/reservations",
        name: "admin-reservations",
        component: AdminReservations,
        meta: { requiresAdminAuth: true },

      },
      {
        path: "/admin/dashboard/transactions/transactions",
        name: "admin-transaction-api",
        component: AdminTransactionsAPI,
        meta: { requiresAdminAuth: true },

      }

      ]
    },
    {
      path: '/admin/client',
      name: "admin-client",
      component: AdminClient,
      meta: { requiresClientAuth: true },
      children: [
        {
          path: '/admin/client/home',
          name: 'admin-client-home',
          component: ClientHome,
          meta: { requiresClientAuth: true },
        },
        {
          path: '/admin/client/reservation/choose/room',
          name: "client-rooms",
          component: RoomsClient,
          meta: { requiresClientAuth: true },
          props: true

        },
        {
          path: '/admin/client/reservation/choose/room/:number/dates',
          name: 'rooms-dates',
          component: DateClient,
          props: true,
          meta: { requiresClientAuth: true },
        },
        {
          path: '/admin/client/reservation/choose/room/:number/checkout',
          name: "client-checkout",
          component: CheckoutPayment,
          props: true,
          meta: { requiresClientAuth: true },
        },
        {
          path: "/admin/client/credit/cards",
          name: "client-credit-cards",
          component: CreditCardsClient
        },
          {
            path: "/admin/client/credit/card/new",
            name: "client-new-credit-card",
            component: NewCreditCard
          }
      ]

    }


  ]
})
export default router;
