import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      loading: true,
      user: {
        uid: '',
        displayName: '',
        photoURL: ''
      },
      votes: {},
      vote: {
        id: null,
        status: false
      },
      oauth: {
        login: false
      },
      modal: {
        share: false
      }
    },
    actions,
    getters,
    mutations
  })
}
