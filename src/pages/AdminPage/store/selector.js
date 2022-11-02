// Lấy data ra
import { createSelector } from "reselect";
import { INIT_STATE } from "./state";

const selectMyZingNewContent = (state) => state.contentReducers || INIT_STATE;

const selectLoading = createSelector(
    selectMyZingNewContent,
    (state) => state.isLoading
);
const selectContent = createSelector(
    selectMyZingNewContent,
    (state) => state.listZingNewContent
);
const selectCreateContent = createSelector(
    selectMyZingNewContent,
    (state) => state.listZingNewContent
);
const selectDetailContent = createSelector(
    selectMyZingNewContent,
    (state) => state.detailContent
);
export {
    selectContent,
    selectLoading,
    selectCreateContent,
    selectDetailContent,
};
