import { createReducer, on, Action } from '@ngrx/store';

import * as ThemesActions from './themes.actions';

export const themesFeatureKey = 'theme';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light',
};

const _themesReducer = createReducer(
  initialState,
  on(ThemesActions.setTheme, (state, { theme }) => ({
    ...state,
    theme,
  }))
);

export function themesReducer(state: any, action: Action) {
  return _themesReducer(state, action);
}
