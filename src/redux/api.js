import axios from 'axios'

let baseURL = 'http://localhost'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://stoggle.com'
}

console.log(process.env)

const createApi = () => {
  axios.defaults.baseURL = baseURL
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('_stoggle_key')

  return {
    getUserinfo: () => axios.get('api/userinfo'),
    getStocks: () => axios.get('api/stocks'),
    postStocks: name => axios.post('api/stocks', { name }),
    toggleStocks: id => axios.patch('api/stocks/toggle/' + id),
    deleteStocks: id => axios.delete('api/stocks/' + id)
  }
}

export default createApi()