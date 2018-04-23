import app from './app'

export default {
  baseURL: (process.env.BUILD_ENV === 'production')
    ? app.PRODUCT_API_URL
    : (process.env.BUILD_ENV === 'staging')
    ? app.DEVELOP_SERVER_URL
    : app.DEVELOP_LOCAL_URL
}
