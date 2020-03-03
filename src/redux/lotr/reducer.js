import { GET_LOTR_CHARATERS_SUCCESS, GET_LOTR_CHARATERS_ERROR } from './types';

const initialState = {
  lotr: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOTR_CHARATERS_SUCCESS:
      return {
        ...state,
        lotr: payload
      };
    case GET_LOTR_CHARATERS_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};
