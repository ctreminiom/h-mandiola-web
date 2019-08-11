const mutations = {
    TOKEN: (state, token) => {
        localStorage.setItem("token", token)
    },
    USERS: (state, json) => {
        state.USERS = json
    },

    username: (state, json) => {
        state.username = json
        localStorage.setItem("username", json)
    },

    avatar: (state, json) => {
        state.avatar = json
        localStorage.setItem("avatar", json)
    }


}



export default mutations