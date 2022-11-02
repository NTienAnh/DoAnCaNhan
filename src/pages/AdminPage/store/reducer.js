import { INIT_STATE } from "./state";
import { produce } from "immer";
import { SAVE_ALL_CONTENT, SET_LOADING, SAVE_DETAIL_CONTENT } from "./contants";

export default function contentReducers(state = INIT_STATE, action) {
    return produce(state, (draf) => {
        switch (action.type) {
            case SET_LOADING:
                draf.isLoading = action.payload;
                break;
            case SAVE_ALL_CONTENT:
                draf.listZingNewContent = action.payload;
                break;
            case SAVE_DETAIL_CONTENT:
                draf.detailContent = action.payload;
                break;
            default:
                return state;
        }
    });
}