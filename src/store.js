import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

  },
  mutations: {


  },
  getters: {

  },
  actions: {

    login(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: "http://35.188.37.134:8000/public/module/user/login", method: "POST", data: data }

        Axios(options)
          .then(response => {
            console.log(response.data.message)
            localStorage.setItem("token", response.data.message)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })

      })
    },

    getUsers() {
      return new Promise((resolve, reject) => {

        let options = { url: "http://35.188.37.134:8000/private/module/users", method: "get", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })

      })
    },

    updatePassword(context, data) {
      return new Promise((resolve, reject) => {



        let options = { url: `http://35.188.37.134:8000/private/module/user/change/password/${data.username}`, method: "PUT", data: data.body, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })
    },

    createUser(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/user`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        console.log(options)

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })
    },

    deleteUser(context, username) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/user/${username}`, method: "DELETE", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        console.log(options)

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })
    },

    myGrants(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/grant/${data}`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })
    },

    getRoles(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/roles`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })
    },

    addGrant(context, data) {

      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/grant`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })

    },

    processPaymentWithCreditCard(context, data) {

      return new Promise((resolve, reject) => {

        let options = { url: `http://5.188.37.134:7000/module/card/pay`, method: "POST", data: data}

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err.error)
            reject(err.error)
          })



      })

    },

    reservate(context, data) {

      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/reservation`, method: "POST", data: data}

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err.error)
            reject(err.error)
          })



      })

    },

    removeGrant(context, data) {

      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/grant`, method: "DELETE", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            console.log(response)
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })



      })

    },
    getConsecutives(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/consecutives`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getActivities(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/activities`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    deleteActivity(context, id) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/activity/${id}`, method: "DELETE", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    createActivity(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/activity`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getRooms(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/rooms`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getPublicRooms(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/rooms`, method: "GET" }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getReservations(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/reservations`, method: "GET" }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },
    getTransactions(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:7000/module/transactions`, method: "GET" }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getClientInfo(context, username) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/client/${username}`, method: "GET" }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getCards(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:7000/module/cards`, method: "GET" }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    createRoom(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/room`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    deleteRoom(context, id) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/room/${id}`, method: "DELETE", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },


    getProducts(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/products`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    createProduct(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/product`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getLogs(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/logs`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getErrors(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/private/module/errors`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    getClients(context) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/clients`, method: "GET", headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },

    createClient(context, data) {
      return new Promise((resolve, reject) => {

        let options = { url: `http://35.188.37.134:8000/public/module/client`, method: "POST", data: data, headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } }

        Axios(options)
          .then(response => {
            resolve(response.data.message)
          })
          .catch(err => {
            console.log(err)
            reject(err.data.message)
          })



      })
    },




  }
})