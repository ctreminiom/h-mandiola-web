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

    }

}


export default actions
