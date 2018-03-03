import { combineReducers } from 'redux'

export const StoggleActionTypes = {
  STOGGLE_REQUEST_ADD: '@@stoggle/STOGLLE_REQUEST_ADD',
  STOGGLE_REQUEST_DELETE: '@@stoggle/STOGLLE_REQUEST_DELETE'
}

export const requestAdd = name => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_ADD,
  payload: {
    name
  }
})

export const requestDelete = id => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_DELETE,
  payload: {
    id
  }
})

const reduceRequestAdd = (state, action) => {
  const newStock = {
    id:'stoggle-2',
    name: action.payload.name,
    status: true
  }
  const newStocks = state.stocks
  newStocks.push(newStock)
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
    default:
    return state
  }
}

export const reducer = combineReducers({
  stoggleReducer
})
