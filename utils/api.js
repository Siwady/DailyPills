import backendUrl from '../config/backend'
const axios = require('axios')

const getPillsInventory = () => {
  return axios({
    method: 'get',
    url: `${backendUrl}/pills`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export default {
  getPillsInventory
}
