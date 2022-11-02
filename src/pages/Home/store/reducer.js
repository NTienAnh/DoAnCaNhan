import { INIT_STATE_HOME } from "./state";
import { produce } from "immer";
import { SET_LOADING, SAVE_HOME_NEW_CONTENT } from "./contanst";

export default function myListContentReducers(state = INIT_STATE_HOME, action) {
    return produce(state, (draf) => {
        switch (action.type) {
            case SET_LOADING:
                draf.isLoading = action.payload;
                break;
            case SAVE_HOME_NEW_CONTENT:
                draf.listHomeContent = action.payload;
                break;
            default:
                return state;
        }
    });
}