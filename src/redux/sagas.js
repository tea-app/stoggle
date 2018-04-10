import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

import { StoggleActionTypes } from './constants'

import {
  requestGet,
  successGetStocks,
  successGetUserinfo,
  successPostStocks,
  successToggleStocks,
  successDeleteStocks,
  failureRequest
} from './actions'

import api from './api'

function* requestGetUserinfo(action) {
  try {
    const response = yield call(api.getUserinfo)
    yield put(successGetUserinfo(response.data))
  } catch (e) {
    yield put(failureRequest(e))
  }
}

// get all stocks
function* requestGetStocks(action) {
  try {
    const response = yield call(api.getStocks)
    yield put(successGetStocks(response.data))
  } catch (e) {
    yield put(failureRequest(e))
  }
}

// create new stock
function* requestPostStocks(action) {
  try {
    const response = yield call(api.postStocks, action.payload.name)
    yield put(successPostStocks(response.data))
    yield put(requestGet())
  } catch (e) {
    yield put(failureRequest(e))
  }
}

function* requestToggleStocks(action) {
  try {
    const response = yield call(api.toggleStocks, action.payload.id)
    yield put(successToggleStocks(response.data))
  } catch (e) {
    yield put(failureRequest(e))
  }
}

function* requestDeleteStocks(action) {
  try {
    const response = yield call(api.deleteStocks, action.payload.id)
    yield put(successDeleteStocks(response.data))
  } catch (e) {
    yield put(failureRequest(e))
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* watchRequestGetUserinfo() {
  yield takeLatest(StoggleActionTypes.STOGGLE_REQUEST_GET_USERINFO, requestGetUserinfo)
}

function* watchRequestGetStocks() {
 yield takeLatest(StoggleActionTypes.STOGGLE_REQUEST_GET, requestGetStocks)
}

function* watchRequestPostStocks() {
  yield takeLatest(StoggleActionTypes.STOGGLE_REQUEST_ADD, requestPostStocks)
}

function* watchRequestToggleStocks() {
  yield takeLatest(StoggleActionTypes.STOGGLE_REQUEST_TOGGLE, requestToggleStocks)
}

function* watchRequestDeleteStocks() {
  yield takeLatest(StoggleActionTypes.STOGGLE_REQUEST_DELETE, requestDeleteStocks)
}

function* sagas() {
  yield all([
    fork(watchRequestGetUserinfo),
    fork(watchRequestGetStocks),
    fork(watchRequestPostStocks),
    fork(watchRequestToggleStocks),
    fork(watchRequestDeleteStocks),
  ])
}

export default sagas