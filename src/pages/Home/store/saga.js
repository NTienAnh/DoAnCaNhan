import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_HOME_NEW_CONTENT } from "./contanst";
import { getZingContent } from "../../../ServiceAPI/classServices";
import { setLoading, saveHomeNewContent } from "./action";

function* zingHomeContent() {
    try {
        yield put(setLoading(true));
        const response = yield call(getZingContent);
        console.log(response);
        yield all([put(setLoading(false)), put(saveHomeNewContent(response.data))]);
    } catch (error) {
        yield put(setLoading(false));
    }
}

export function* listMyContent() {
    yield takeLatest(GET_HOME_NEW_CONTENT, zingHomeContent);
}
