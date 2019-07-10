import Vue from 'vue'

const actions = {

    fetchRooms(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "" ,//Pending to confirm the path 
                method: "GET",

                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("Rooms", response.body)
                resolve(true)

            }, error => {
                reject(false)

            })



        })

    }

}

export default actions