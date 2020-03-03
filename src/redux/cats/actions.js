import {
  GET_CATS_REQUEST,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_CURRENT
} from './types';

export const getCats = () => ({
  type: GET_CATS_REQUEST
});

export const getLotr = () => ({
  type: GET_CATS_REQUEST
});

export const openModal = () => ({
  type: OPEN_MODAL
});
export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const setCurrent = payload => ({
  type: SET_CURRENT,
  payload
});
