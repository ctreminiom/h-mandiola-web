import Vue from 'vue'

const actions = {

  fetchUsers (context) {
    return new Promise((resolve, reject) => {
      let options = {
        url: 'http://localhost:5000/api/module/users', //Confirm
        method: 'GET'
      }

      Vue.http(options).then(response => {
        context.commit('USERS', response.body)
        resolve(true)
      }, error => {
        reject(false)
        console.log(error)
      })
    })
  }

}

export default actions
