import Vue from 'vue'

const actions = {

    Activities(context) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/activities",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("Activities", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },
    createActivity(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/activity",
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
