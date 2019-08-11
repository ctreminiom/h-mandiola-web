import actions from './actions'
import getters from './getters'
import mutations from './mutations'


const state = {
    errors: null
}


export default {
    namespace: false,
    state,
    actions,
    getters,
    mutations
}