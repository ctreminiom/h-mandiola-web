import Vue from 'vue'

const actions = {

    grant(context, data) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://localhost:5000/api/module/grant",
                method: "POST",
                body: data,
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("GRANTS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    },

    deleteGrant(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://localhost:5000/api/module/grant",
                method: "DELETE",
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
