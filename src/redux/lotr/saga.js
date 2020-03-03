import {
  GET_LOTR_CHARATERS_SUCCESS,
  GET_LOTR_CHARATERS_ERROR,
  GET_LOTR_CHARATERS_REQUEST
} from './types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { lotrAPI } from '../../services/api';
function* requestCharacters() {
  try {
    const {
      data: { docs }
    } = yield call([lotrAPI, 'get']);
    yield put({
      type: GET_LOTR_CHARATERS_SUCCESS,
      payload: docs
    });
  } catch (error) {
    yield put({
      type: GET_LOTR_CHARATERS_ERROR,
      payload: error
    });
  }
}

export default function* catsSaga() {
  yield takeEvery(GET_LOTR_CHARATERS_REQUEST, requestCharacters);
}
