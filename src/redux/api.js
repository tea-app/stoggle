import axios from 'axios'
import config from '../config'

const createApi = () => {
  const request = axios.create({
    baseURL: config.baseURL,
    withCredentials: true
  })

  return {
    getUserinfo   : ()    => request.get('api/userinfo'),
    getStocks     : ()    => request.get('api/stocks'),
    addStocks     : name  => request.post('api/stocks', { name }),
    toggleStocks  : id    => request.patch('api/stocks/toggle/' + id),
    deleteStocks  : id    => request.delete('api/stocks/' + id)
  }
}

export default createApi()