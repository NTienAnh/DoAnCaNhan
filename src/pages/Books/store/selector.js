// Lấy data ra
import { createSelector } from "reselect";
import { INIT_STATE_BOOK } from "./state";

const selectMyBook = (state) => state.myListBookReducers || INIT_STATE_BOOK;

const selectLoading = createSelector(selectMyBook, (state) => state.isLoading);
const selectBook = createSelector(selectMyBook, (state) => state.listBook);
export { selectLoading, selectBook };
