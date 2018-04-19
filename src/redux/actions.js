import { StoggleActionTypes } from './constants'

// Action Creator
export const requestGetUserinfo = () => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_GET_USERINFO
})

export const requestGet = () => ({
  type: StoggleActionTypes.STOGGLE_REQUEST_GET
})

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

export const filterAll = () => ({
  type: StoggleActionTypes.STOGGLE_FILTER_ALL,
})

export const filterAvailable = () => ({
  type: StoggleActionTypes.STOGGLE_FILTER_AVAILABLE,
})

export const filterBusy = () => ({
  type: StoggleActionTypes.STOGGLE_FILTER_BUSY,
})

export const successGetUserinfo = userinfo => ({
  type: StoggleActionTypes.STOGGLE_SUCCESS_GET_USERINFO,
  payload: {
    userinfo
  }
})

export const successGetStocks = stocks => ({
  type: StoggleActionTypes.STOGGLE_SUCCESS_GET,
  payload: {
    stocks
  }
})

export const successAddStocks = stock => ({
  type: StoggleActionTypes.STOGGLE_SUCCESS_ADD,
  payload: {
    stock
  }
})

export const successToggleStocks = stock => ({
  type: StoggleActionTypes.STOGGLE_SUCCESS_TOGGLE,
  payload: {
    stock
  }
})

export const successDeleteStocks = () => ({
  type: StoggleActionTypes.STOGGLE_SUCCESS_DELETE
})

export const failureRequest = error => ({
  type: StoggleActionTypes.STOGGLE_FAILURE,
  error
})
