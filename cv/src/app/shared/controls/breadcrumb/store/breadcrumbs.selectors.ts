import { createFeatureSelector, createSelector } from "@ngrx/store";
import { breadcrumbsFeatureKey } from "./breadcrumbs.reducer";

const selectBreadcrumbFeature = createFeatureSelector(breadcrumbsFeatureKey);


export const selectBreadcrumb = createSelector(selectBreadcrumbFeature, (state: any) => state.breadcrumbs);