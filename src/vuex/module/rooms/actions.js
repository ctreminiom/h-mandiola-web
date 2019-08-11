import Vue from 'vue'

const actions = {

    Rooms(context) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/rooms",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("Rooms", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    RoomsTypes(context) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/room/types",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("Rooms", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },
    createRoom(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/room",
                method: "POST",
                body: data,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

}


export default actions
