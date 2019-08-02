import Vue from 'vue'

/* eslint-disable */
const actions = {

    loginUser(context, data) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/login",
                method: "POST",
                body: data
            }

            Vue.http(options).then(response => {
                context.commit("TOKEN", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    getUsers(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/users",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("USERS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    getRolesByUsername(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/grant",
                method: "GET",
                params: {
                    username: data
                },
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    createUser(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/user",
                method: "POST",
                body: data,
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    deleteUser(context, data) {

        return new Promise((resolve, reject) => {

            if (data == "ctreminio") {
                reject("You cannot delete this admin account")
            }


            let options = {
                url: "http://35.188.37.134/api/module/user",
                method: "DELETE",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                },
                params: {
                    username: data
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    updatePassword(context, data) {

        return new Promise((resolve, reject) => {


            let options = {
                url: "http://35.188.37.134/api/module/user",
                method: "PUT",
                body: data.body,
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                },
                params: {
                    username: data.username
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    }

}


export default actions
