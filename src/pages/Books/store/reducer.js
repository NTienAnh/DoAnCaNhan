import { INIT_STATE_BOOK } from "./state";
import { produce } from "immer";
import { SET_LOADING, SAVE_ALL_BOOK } from "./contants";

export default function myListBookReducers(state = INIT_STATE_BOOK, action) {
  return produce(state, (draf) => {
    switch (action.type) {
      case SET_LOADING:
        draf.isLoading = action.payload;
        break;
      case SAVE_ALL_BOOK:
        draf.listBook = action.payload;
        break;
      default:
        return state;
    }
  });
}
