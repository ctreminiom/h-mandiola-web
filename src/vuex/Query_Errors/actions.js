import Vue from 'vue'

const actions = {

    fetcherrors(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://localhost:5000/api/module/errors" ,//Pending to confirm the path 
                method: "GET",

                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("errors", response.body)
                resolve(true)

            }, error => {
                reject(false)

            })



        })

    }

}

export default actions