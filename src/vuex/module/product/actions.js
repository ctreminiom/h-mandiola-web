import Vue from 'vue'

const actions = {

    Products() {
        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/products",
                method: "GET",
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
    createProduct(context, data) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://35.188.37.134/api/module/product",
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
