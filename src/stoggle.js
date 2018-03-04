import { combineReducers } from 'redux'
import uuid from 'uuid/v4'

// ActionTypes
export const StoggleActionTypes = {
  STOGGLE_REQUEST_ADD: '@@stoggle/STOGGLE_REQUEST_ADD',
  STOGGLE_REQUEST_DELETE: '@@stoggle/STOGGLE_REQUEST_DELETE',
  STOGGLE_REQUEST_TOGGLE: '@@stoggle/STOGGLE_REQUEST_TOGGLE'
}

// Action Creators --------------------------------------------------
export const requestAdd = name => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_ADD,
  payload: {
    name
  }
})

export const requestToggle = id => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_TOGGLE,
  payload: {
    id
  }
})

export const requestDelete = id => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_DELETE,
  payload: {
    id
  }
})

// reducers --------------------------------------------------
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

const initialState = {
  stocks: [
    {
      id: 'stoggle-1',
      name: '塩',
      status: true
    }
  ]
}

const stoggleReducer = (state = initialState, action) => {
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

export const reducer = combineReducers({
  stoggleReducer
})
