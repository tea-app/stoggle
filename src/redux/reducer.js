import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

import { StoggleActionTypes } from './constants'

const initialState = {
  stocks: [],
  userinfo: {},
  filter: 0
}

// reducers
const reduceSuccessGet = (state, action) => {
  return Object.assign({}, state, {
    stocks: action.payload.stocks
  })
}

const reduceSuccessAdd = (state, action) => {
  const newStocks = state.stocks
  newStocks.push(action.payload.stock)

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

const reduceSuccessToggle = (state, action) => {
  const stocks = state.stocks.map(stock => {
    if(stock.id === action.payload.id) {
      stock.status = !stock.status
      return stock
    }
    return stock
  })

  return Object.assign({}, state, {
    stocks: stocks
  })
}

const reduceSuccessDelete = (state, action) => {
  const stocks = state.stocks.filter(stock => {
    return stock.id !== action.payload.id
  })

  return Object.assign({}, state, {
    stocks
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

const reduceSuccessGetUserinfo = (state, action) => {
  return Object.assign({}, state, {
    userinfo: action.payload.userinfo
  })
}

export const stoggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoggleActionTypes.STOGGLE_SUCCESS_GET:
    return reduceSuccessGet(state, action)

    case StoggleActionTypes.STOGGLE_SUCCESS_POST:
    return reduceSuccessAdd(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_TOGGLE:
    return reduceSuccessToggle(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_DELETE:
    return reduceSuccessDelete(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_ALL:
    // return reduceFilterAll(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_AVAILABLE:
    // return reduceFilterAvailable(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_BUSY:
    // return reduceFilterBusy(state, action)

    case StoggleActionTypes.STOGGLE_SUCCESS_GET_USERINFO:
    return reduceSuccessGetUserinfo(state, action)

    default:
    return state
  }
}

export default stoggleReducer