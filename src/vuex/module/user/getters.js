const getters = {
    isAuthenticated: state => {
        return state.isLoggedIn
    },
    users: state => {
        return state.users
    },
    username: state => {
        return state.username
    },
    avatar: state => {
        return state.avatar
    }
}

export default getters