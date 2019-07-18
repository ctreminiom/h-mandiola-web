const getters = {
    isAuthenticated: state => { return state.isLoggedIn },
    permissions: state => { return state.permissions }
}

export default getters