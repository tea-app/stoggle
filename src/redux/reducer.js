import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

import { StoggleActionTypes } from './constants'

const initialState = {
  stocks: [{
    id: -1,
    name: 'ただいま、SignInした状態でないと動作しません。',
    status: false
  }],
  userinfo: {},
  filter: 0
}

// reducers
const reduceSuccessGet = (state, action) => {
  return Object.assign({}, state, {
    stocks: action.payload.stocks
  })
}

const reduceRequestAdd = (state, action) => Object.assign({}, state, {
  stocks: [
    ...state.stocks,
    {
      id: uuid(),
      name: action.payload.name,
      status: false
    }
  ]
})

const reduceSuccessAdd = (state, action) => Object.assign({}, state, {
  stocks: [
    ...state.stocks,
    action.payload.stock
  ]
})

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
    filter: 0
  })
}

const reduceFilterAvailable = (state, action) => {
  return Object.assign({}, state, {
    filter: 1
  })
}

const reduceFilterBusy = (state, action) => {
  return Object.assign({}, state, {
    filter: 2
  })
}

const reduceSuccessGetUserinfo = (state, action) => {
  return Object.assign({}, state, {
    userinfo: action.payload.userinfo
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

    case StoggleActionTypes.STOGGLE_SUCCESS_ADD:
    return reduceSuccessAdd(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_TOGGLE:
    return reduceSuccessToggle(state, action)

    case StoggleActionTypes.STOGGLE_REQUEST_DELETE:
    return reduceSuccessDelete(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_ALL:
    return reduceFilterAll(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_AVAILABLE:
    return reduceFilterAvailable(state, action)

    case StoggleActionTypes.STOGGLE_FILTER_BUSY:
    return reduceFilterBusy(state, action)

    case StoggleActionTypes.STOGGLE_SUCCESS_GET_USERINFO:
    return reduceSuccessGetUserinfo(state, action)

    case StoggleActionTypes.STOGGLE_SUCCESS_GET_USERINFO:
    return reduceSuccessGetUserinfo(state, action)

    default:
    return state
  }
}

export default stoggleReducer