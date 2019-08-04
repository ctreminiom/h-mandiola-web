import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
    isLoggedIn: !!localStorage.getItem("token"),
    users: null,
    username: localStorage.getItem("username"),
    avatar: localStorage.getItem("avatar")
}


export default {
    namespace: false,
    state,
    actions,
    getters,
    mutations
}