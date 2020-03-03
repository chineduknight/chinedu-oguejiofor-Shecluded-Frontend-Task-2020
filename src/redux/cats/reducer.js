import {
  GET_CATS_SUCCESS,
  GET_CATS_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

const initialState = {
  cats: null,
  lotr: null,
  error: null,
  current: null,
  showModal: false,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATS_SUCCESS:
      return {
        ...state,
        cats: payload,
        loading: false
      };
    case GET_CATS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
