import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

import { StoggleActionTypes } from './constants'

const STORAGE_KEY = '_stoggle_storage'

const initialState = {
  stocks: [],
  filter: 0
}

const getStocks = () => {
  const stringStocks = localStorage.getItem(STORAGE_KEY) || '[]'
  return JSON.parse(stringStocks)
}

// reducers
const reduceRequestGet = (state, action) => {
  return Object.assign({}, state, {
    stocks: getStocks()
  })
}

const reduceRequestAdd = (state, action) => {
  const allStocks = getStocks()
  const newStock = {
    id: uuid(),
    name: action.payload.name,
    status: true
  }

  let isExist = false

  allStocks.forEach(stock => {
    if (stock.name === action.payload.name) {
      isExist = true
      return
    }
  })

  if(isExist) {
    return state
  }

  allStocks.push(newStock)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allStocks))

  const currentStocks = state.stocks
  if (state.filter !== 2) {
    currentStocks.push(newStock)
  }

  return Object.assign({}, state, {
    stocks: currentStocks
  })
}

const reduceRequestToggle = (state, action) => {
  const allStocks = getStocks().map(stock => {
    if(stock.id === action.payload.id) {
      stock.status = !stock.status
      return stock
    }
    return stock
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(allStocks))

  let currentStocks = []
  if (state.filter !== 0) {
    currentStocks = state.stocks.filter(stock => {
      return stock.id !== action.payload.id
    })
  } else {
    currentStocks = state.stocks.map(stock => {
      if(stock.id === action.payload.id) {
        stock.status = !stock.status
        return stock
      }
      return stock
    })
  }
  return Object.assign({}, state, {
    stocks: currentStocks
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

const reduceFilterAll = (state, action) => {
  return Object.assign({}, state, {
    stocks: getStocks(),
    filter: 0
  })
}

const reduceFilterAvailable = (state, action) => {
  const newStocks = getStocks().filter(stock => {
    return stock.status
  })

  return Object.assign({}, state, {
    stocks: newStocks,
    filter: 1
  })
}

const reduceFilterBusy = (state, action) => {
  const newStocks = getStocks().filter(stock => {
    return !stock.status
  })

  return Object.assign({}, state, {
    stocks: newStocks,
    filter: 2
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

    case StoggleActionTypes.STOGGLE_FILTER_ALL:
    return reduceFilterAll(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_AVAILABLE:
    return reduceFilterAvailable(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_BUSY:
    return reduceFilterBusy(state, action)

    default:
    return state
  }
}

export default combineReducers({
  stoggleReducer
})
