import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Themes } from "./interface/theme.interface";
import { themesFeatureKey } from "./themes.reducer";

const selectThemeState = createFeatureSelector(themesFeatureKey);

export const selectTheme = createSelector(selectThemeState, (state) => state as Themes);