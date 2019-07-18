const mutations = {
    TOKEN: (state, token) => {
        localStorage.setItem("token", token)
    },
    PERMISSIONS: (state, json) => {
        state.permissions = json
    }
}



export default mutations