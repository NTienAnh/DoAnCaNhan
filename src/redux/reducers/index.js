import { combineReducers } from "redux";

import loginReducers from "../../pages/Login/stores/reducer";
import myListContentReducers from "../../pages/Home/store/reducer";
import contentReducers from "../../pages/AdminPage/store/reducer";
import myListBookReducers from "../../pages/Books/store/reducer";
export default function createReducer() {
    const rootReducer = combineReducers({
        loginReducers,
        myListContentReducers,
        contentReducers,
        myListBookReducers,
    });
    return rootReducer
}