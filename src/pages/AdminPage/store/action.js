import {
  GET_ALL_CONTENT,
  SAVE_ALL_CONTENT,
  SET_LOADING,
  CREATE_CONTENT,
  DELETE_CONTENT,
  UPDATE_CONTENT,
  GET_DETAIL_CONTENT,
  SAVE_DETAIL_CONTENT,
} from "./contants";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
export const getDetailContentAction = (payload, resolve) => {
  return {
    type: GET_DETAIL_CONTENT,
    payload,
    resolve,
  };
};
export const saveDetailContent = (payload) => {
  return {
    type: SAVE_DETAIL_CONTENT,
    payload,
  };
};
export function asyncGetDetailContentAction(dispatch) {
  return function returnAsync(payload) {
    return new Promise((resolve) =>
      dispatch(getDetailContentAction(payload, resolve))
    );
  };
}
export const getAllContent = (payload) => {
  return {
    type: GET_ALL_CONTENT,
    payload,
  };
};
export const saveAllContent = (payload) => {
  return {
    type: SAVE_ALL_CONTENT,
    payload,
  };
};
export const createContent = (payload, resolve) => {
  return {
    type: CREATE_CONTENT,
    payload,
    resolve,
  };
};
export function asyncCreateContent(dispatch) {
  return function returnAsync(payload) {
    return new Promise((resolve) => dispatch(createContent(payload, resolve)));
  };
}
export const deleteContent = (payload, resolve) => {
  return {
    type: DELETE_CONTENT,
    payload,
    resolve,
  };
};
export function asyncDeleteContent(dispatch) {
  return function returnAsync(payload) {
    return new Promise((resolve) => dispatch(deleteContent(payload, resolve)));
  };
}
export const updateContent = (payload, resolve) => {
  return {
    type: UPDATE_CONTENT,
    payload,
    resolve,
  };
};
export function asyncUpdateContent(dispatch) {
  return function returnAsync(payload) {
    return new Promise((resolve) => dispatch(updateContent(payload, resolve)));
  };
}
