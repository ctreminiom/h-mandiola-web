const getters = {
    isAuthenticated: state => { return state.isLoggedIn },
    users: state => { return state.users }
}

export default getters