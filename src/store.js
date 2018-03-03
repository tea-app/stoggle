import { createStore,applyMiddleware } from 'redux'
import { reducer } from './stoggle'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger)

export default createStore(reducer, middleware)