import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

import { StoggleActionTypes } from './constants'

const STORAGE_KEY = '_stoggle_storage'

const initialState = {
  stocks: []
}

// reducers
const reduceRequestGet = (state, action) => {
  const stringStocks = localStorage.getItem(STORAGE_KEY) || '[]'
  const stocks = JSON.parse(stringStocks)

  return Object.assign({}, state, {
    stocks: stocks
  })
}

const reduceRequestAdd = (state, action) => {
  const newStocks = state.stocks
  const newStock = {
    id: uuid(),
    name: action.payload.name,
    status: true
  }
  newStocks.push(newStock)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStocks))

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

const reduceRequestToggle = (state, action) => {
  const newStocks = state.stocks.map(stock => {
    if(stock.id === action.payload.id) {
      stock.status = !stock.status
      return stock
    }
    return stock
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStocks))

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

const reduceRequestDelete = (state, action) => {
  const newStocks = state.stocks.filter(stock => {
    return stock.id !== action.payload.id
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStocks))

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

export const stoggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoggleActionTypes.STOGGLE_REQUEST_GET:
    return reduceRequestGet(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_ADD:
    return reduceRequestAdd(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_TOGGLE:
    return reduceRequestToggle(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_DELETE:
    return reduceRequestDelete(state, action)

    default:
    return state
  }
}

export default combineReducers({
  stoggleReducer
})
