import { combineReducers } from 'redux'

const StoggleActionTypes = {
  STOGGLE_REQUEST_ADD: '@@stoggle/STOGLLE_REQUEST_ADD',
  STOGGLE_REQUEST_DELETE: '@@stoggle/STOGLLE_REQUEST_DELETE'
}

const requestAdd = name => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_ADD,
  payload: {
    name
  }
})

const requestDelete = id => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_DELETE,
  payload: {
    id
  }
})


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
    return Object.assign({}, state, {
      stocks: {
        id:'stoggle-2',
        name: action.payload.name,
        status: true
      }
    })
    default:
    return state
  }
}

export const reducer = combineReducers({
  stoggleReducer
})