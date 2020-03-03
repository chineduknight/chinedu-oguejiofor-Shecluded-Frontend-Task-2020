import { combineReducers } from 'redux';
import itemsReducer from './cats/reducer';

export default combineReducers({
  items: itemsReducer
});
