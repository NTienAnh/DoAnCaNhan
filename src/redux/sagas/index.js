import { all } from "redux-saga/effects"
import * as loginSagas from "../../pages/Login/stores/sagas";

import * as listContentSaga from "../../pages/Home/store/saga";
import * as adminContentSaga from "../../pages/AdminPage/store/saga";
import * as listBookSaga from "../../pages/Books/store/saga";

export default function* () {
    yield all([
        loginSagas.requestLogin(),
        listContentSaga.listMyContent(),
        adminContentSaga.listAllZingContent(),
        listBookSaga.listMyBook(),
    ])
}
