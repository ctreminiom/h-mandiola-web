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
                context.commit("ROOMS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    }

}


export default actions
