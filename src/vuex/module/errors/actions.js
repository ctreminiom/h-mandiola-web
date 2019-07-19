import Vue from 'vue'

const actions = {

    Errors(context) {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/errors",
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("ERRORS", response.body)
                resolve(response)
            }, error => {
                reject(error)
            })

        })

    }

}


export default actions
