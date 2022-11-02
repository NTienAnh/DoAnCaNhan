import { GET_ALL_BOOK, SAVE_ALL_BOOK, SET_LOADING } from "./contants";

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload,
    };
};
export const getAllBook = (payload) => {
    return {
        type: GET_ALL_BOOK,
        payload,
    };
};
export const saveAllBook = (payload) => {
    return {
        type: SAVE_ALL_BOOK,
        payload,
    };
};
