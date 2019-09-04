import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  isLoading: false,
  pills: []
}

const createStore = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations
  })

// if (module.hot) {
//   module.hot.accept([
//     './actions',
//     './mutations'
//   ], () => {
//     store.hotUpdate({
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   })
}

export default createStore
