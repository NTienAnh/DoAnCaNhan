import { createSelector } from "reselect";
import { INIT_STATE_HOME } from "./state";

const selectMyContent = (state) => state.myListContentReducers || INIT_STATE_HOME;

const selectLoading = createSelector(
    selectMyContent,
    (state) => state.isLoading
);

const selectHomeNewContent = createSelector(
    selectMyContent,
    (state) => state.listHomeContent
);
export { selectLoading, selectHomeNewContent };