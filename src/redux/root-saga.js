import { all } from 'redux-saga/effects';
import catsSaga from './cats/saga';
import lotrSaga from './lotr/saga';

export default function* rootSaga() {
  yield all([catsSaga(), lotrSaga()]);
}
