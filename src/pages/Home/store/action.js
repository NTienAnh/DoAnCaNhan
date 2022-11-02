import {
    SET_LOADING,
    GET_HOME_NEW_CONTENT,
    SAVE_HOME_NEW_CONTENT
} from "./contanst";

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload,
    };
};

export const getHomeNewContent = (payload) => {
    return {
        type: GET_HOME_NEW_CONTENT,
        payload,
    };
};

export const saveHomeNewContent = (payload) => {
    return {
        type: SAVE_HOME_NEW_CONTENT,
        payload,
    };
};