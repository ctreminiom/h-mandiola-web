import Vue from 'vue'

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

    }

}


export default actions
