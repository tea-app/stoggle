import { StoggleActionTypes } from './constants'

// Action Creator
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
