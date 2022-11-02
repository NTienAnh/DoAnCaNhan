import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_ALL_BOOK } from "./contants";
import { getBook } from "../../../ServiceAPI/classServices";
import { setLoading, saveAllBook } from "./action";

function* myListBook() {
    try {
        yield put(setLoading(true));
        const response = yield call(getBook);
        console.log(response);
        yield all([put(setLoading(false)), put(saveAllBook(response.data))]);
    } catch (error) {
        yield put(setLoading(false));
    }
}
export function* listMyBook() {
    yield takeLatest(GET_ALL_BOOK, myListBook);
}