import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Callback from "./components/Callback.vue";
import ClientDashboard from './layouts/client/dashboard'

import auth from "./auth/authService";



import AdminDashboard from './layouts/admin'
import AdminUser from './views/admin/user'
import AdminUserPassword from './views/admin/password'
import AdminNewUser from './views/admin/newUser'
import AdminGrant from './views/admin/grant'
import AdminConsecutive from './views/admin/consecutive'
import AdminActivity from './views/admin/activity'
import AdminNewActivity from './views/admin/newActivity'
import AdminRoom from './views/admin/room'
import AdminNewRoom from './views/admin/newRoom'
import AdminProduct from './views/admin/product'
import AdminNewProduct from './views/admin/newProduct'
import AdminLogs from './views/admin/logs'
import AdminErrors from './views/admin/errors'
import AdminClients from './views/admin/client'

import CLientRooms from './views/client/room/Rooms'
import CLientArticle from './views/client/article/Article'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/callback",
            name: "callback",
            component: Callback
        },
        {
            path: "/client/dashboard",
            name: 'client-dashboard',
            component: ClientDashboard,
            children: [{
                    path: "/client/dashboard/rooms",
                    name: "client-rooms",
                    component: CLientRooms,
                },
                {
                    path: "/client/dashboard/activities",
                    name: "client-article",
                    component: CLientArticle,
                }
            ]
        },
        {
            path: "/admin/dashboard",
            name: 'admin-dashboard',
            component: AdminDashboard,
            children: [{
                    path: "/admin/dashboard/users",
                    name: "admin-user",
                    component: AdminUser,
                },
                {
                    path: "/admin/dashboard/user/:username/change/password",
                    name: "admin-user-password",
                    component: AdminUserPassword,
                    props: true
                },
                {
                    path: "/admin/dashboard/user/new",
                    name: "admin-user-new",
                    component: AdminNewUser,
                },
                {
                    path: "/admin/dashboard/user/:username/grants",
                    name: "admin-user-grant",
                    component: AdminGrant,
                    props: true
                },
                {
                    path: "/admin/dashboard/consecutives",
                    name: "admin-consecutives",
                    component: AdminConsecutive,
                },
                {
                    path: "/admin/dashboard/activities",
                    name: "admin-activities",
                    component: AdminActivity,
                },
                {
                    path: "/admin/dashboard/activity/new",
                    name: "admin-activities-new",
                    component: AdminNewActivity,
                },
                {
                    path: "/admin/dashboard/rooms",
                    name: "admin-rooms",
                    component: AdminRoom,
                },
                {
                    path: "/admin/dashboard/room/new",
                    name: "admin-rooms-new",
                    component: AdminNewRoom,
                },
                {
                    path: "/admin/dashboard/products",
                    name: "admin-products",
                    component: AdminProduct,
                },
                {
                    path: "/admin/dashboard/product/new",
                    name: "admin-product-new",
                    component: AdminNewProduct,
                },
                {
                    path: "/admin/dashboard/logs",
                    name: "admin-logs",
                    component: AdminLogs,
                },
                {
                    path: "/admin/dashboard/errors",
                    name: "admin-errors",
                    component: AdminErrors,
                },
                {
                    path: "/admin/dashboard/clients",
                    name: "admin-clients",
                    component: AdminClients,
                },
            ]
        }

    ]
})


export default router;