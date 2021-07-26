import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sidebarFeatureKey } from "../reducers/sidebar.reducer";

const selectSidebarState = createFeatureSelector(sidebarFeatureKey);


export const selectSidebar = createSelector(selectSidebarState, (state) => state as boolean);