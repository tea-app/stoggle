import { createStore, applyMiddleware, combineReducers } from 'redux'
import stoggleReducer from './reducer'
import logger from 'redux-logger'

import { routerMiddleware, routerReducer } from 'react-router-redux'
import history from './history'

const middleware = applyMiddleware(
  logger,
  routerMiddleware(history)
)

const reducer = combineReducers({
  stoggleReducer,
  routerReducer
})


export default createStore(reducer, middleware)
