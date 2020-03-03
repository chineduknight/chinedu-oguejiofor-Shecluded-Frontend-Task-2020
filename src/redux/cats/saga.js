import { GET_CATS_REQUEST, GET_CATS_SUCCESS, GET_CATS_ERROR } from './types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { catsAPI } from '../../services/api';
function* requestCats() {
  try {
    const { data } = yield call([catsAPI, 'get']);
    yield put({
      type: GET_CATS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: GET_CATS_ERROR,
      payload: error
    });
  }
}

export default function* catsSaga() {
  yield takeEvery(GET_CATS_REQUEST, requestCats);
}
