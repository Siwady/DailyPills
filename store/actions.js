import api from '../utils/api'

export const getPillsInventory = ({ commit }) => {
  commit('GET_PILLS_INVENTORY_REQUEST')
  api.getPillsInventory().then((response) => {
    commit('GET_PILLS_INVENTORY_SUCCESS', response.data)
  }, () => {
    commit('GET_PILLS_INVENTORY_FAIL')
  })
}
