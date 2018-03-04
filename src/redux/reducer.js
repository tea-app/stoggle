import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

import { StoggleActionTypes } from './constants'

const initialState = {
  stocks: [
    {
      id: 'stoggle-1',
      name: '塩',
      status: true
    }
  ]
}

// reducers
const reduceRequestAdd = (state, action) => {
  const newStocks = state.stocks
  const newStock = {
    id: uuid(),
    name: action.payload.name,
    status: true
  }
  newStocks.push(newStock)

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

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

const reduceRequestDelete = (state, action) => {
  const newStocks = state.stocks.filter(stock => {
    return stock.id !== action.payload.id
  })

  return Object.assign({}, state, {
    stocks: newStocks
  })
}

export const stoggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoggleActionTypes.STOGGLE_REQUEST_ADD:
    return reduceRequestAdd(state,action)

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
