import { StoggleActionTypes } from './constants'

// Action Creator
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
