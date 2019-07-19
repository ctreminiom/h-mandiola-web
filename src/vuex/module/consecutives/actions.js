import Vue from 'vue'

const actions = {

    Consecutives(context) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/consecutives",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("CONSECUTIVES", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    }

}


export default actions
