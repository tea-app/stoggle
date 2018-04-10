import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://stoggle.net'
  : 'http://localhost'

const createApi = () => {
  const request = axios.create({
    baseURL: baseURL,
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