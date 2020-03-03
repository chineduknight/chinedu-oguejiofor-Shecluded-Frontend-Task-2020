import { combineReducers } from 'redux';
import catsReducer from './cats/reducer';
import lotrReducer from './lotr/reducer';

export default combineReducers({
  cats: catsReducer,
  lotr: lotrReducer
});
