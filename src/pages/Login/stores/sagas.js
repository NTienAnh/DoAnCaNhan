import { takeLatest, put, call, all } from "redux-saga/effects";
import { LOGIN_REQUEST } from "./contants";
import { loginRequestService } from "../../../ServiceAPI/residentService"
import { saveInfoLoginAction, setLoading } from './actions'

function* loginRequestSaga({ payload }) {
    try {
        console.log(payload);

        yield put(setLoading(true));
        const respone = yield call(loginRequestService, payload);
        yield all([put(setLoading(false)), put(saveInfoLoginAction(respone.data.result))]);
        // console.log('3',respone.data.result);

        if (respone.data.result) {
            window.location.href="/";
        }

    } catch (error) {
        yield put(setLoading(false));
    }
}

export function* requestLogin() {
    yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}