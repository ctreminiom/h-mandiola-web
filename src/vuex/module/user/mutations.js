const mutations = {
    TOKEN: (state, token) => {
        localStorage.setItem("token", token)
    },
    USERS: (state, json) => {
        state.USERS = json
    }
}



export default mutations