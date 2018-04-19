import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import stoggleReducer from './reducer'
import logger from 'redux-logger'

import { routerMiddleware, routerReducer } from 'react-router-redux'
import history from './history'

const sagaMiddleware = createSagaMiddleware()

const middleware = process.env.NODE_ENV === 'production'
  ? applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  )
  : applyMiddleware(
    logger,
    routerMiddleware(history),
    sagaMiddleware
  )

const reducer = combineReducers({
  stoggleReducer,
  routerReducer
})

export default createStore(reducer, middleware)

sagaMiddleware.run(sagas)