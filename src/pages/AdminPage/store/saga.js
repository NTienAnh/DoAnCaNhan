import { takeLatest, put, call, all } from "redux-saga/effects";
import {
    GET_ALL_CONTENT,
    GET_DETAIL_CONTENT,
    CREATE_CONTENT,
    DELETE_CONTENT,
    UPDATE_CONTENT,
} from "./contants";
import {
    getZingContent,
    getDetailContent,
    createContent,
    updateContent,
    deleteContent,
} from "../../../ServiceAPI/classServices";

import { saveDetailContent, saveAllContent, setLoading } from "./action";

function* getListContent() {
    try {
        yield put(setLoading(true));
        const response = yield call(getZingContent);
        yield all([put(setLoading(false)), put(saveAllContent(response.data))]);
    } catch (error) {
        yield put(setLoading(false));
    }
}

function* getDetailListContent({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        const response = yield call(getDetailContent, payload.id);
        resolve(response.data);
        yield put(saveDetailContent(response.data));
        yield put(setLoading(true));
    } catch (error) {
        // resolve(false);
        yield put(setLoading(false));
    }
}

function* createContentServices({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        const response = yield call(createContent, payload);
        console.log(response)
        resolve(response);
        yield put(setLoading(false));
    } catch (error) {
        resolve(false);
        yield put(setLoading(false));
    }
}

function* deleteContentServices({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        console.log(payload);
        const response = yield call(deleteContent, payload);
        console.log(response);
        resolve(response);
        yield put(setLoading(false));
    } catch (error) {
        resolve(false);
        yield put(setLoading(false));
    }
}
function* updateContentServices({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        console.log(payload);
        const response = yield call(updateContent, payload);
        console.log(response.data);
        resolve(response.data);
        yield put(setLoading(false));
    } catch (error) {
        resolve(false);
        yield put(setLoading(false));
    }
}
export function* listAllZingContent() {
    yield takeLatest(GET_ALL_CONTENT, getListContent);
    yield takeLatest(CREATE_CONTENT, createContentServices);
    yield takeLatest(DELETE_CONTENT, deleteContentServices);
    yield takeLatest(UPDATE_CONTENT, updateContentServices);
    yield takeLatest(GET_DETAIL_CONTENT, getDetailListContent);
}
