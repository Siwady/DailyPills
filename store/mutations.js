export const GET_PILLS_INVENTORY_REQUEST = (state) => {
  state.isLoading = true
}
export const GET_PILLS_INVENTORY_SUCCESS = (state, pills) => {
  state.isLoading = false
  state.pills = pills
}
export const GET_PILLS_INVENTORY_FAIL = (state) => {
  state.isLoading = true
  state.pills = []
}
