import { createReducer, on, Action } from '@ngrx/store';

import * as SidebarActions from './sidebar.actions';

export const sidebarFeatureKey = 'toggle';

export const initialState = false;

const _sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.toggleSidebar, (state) => (state = !state))
);

export function sidebarReducer(state: any, action: Action) {
  return _sidebarReducer(state, action);
}
