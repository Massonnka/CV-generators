import { Action, createReducer, on } from '@ngrx/store';
import { Breadcrumb } from '../interfaces/breadcrumbs.interface';
import * as breadcumbsActions from './breadcrumbs.actions';

export const breadcrumbsFeatureKey = 'breadcrumbsFeatureKey';

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbsState = {
  breadcrumbs: [],
};



const _breadcrumbReducer = createReducer(
  initialState,
  on(breadcumbsActions.setBreadcrumbs, (state, {breadcrumbs}) => ({
    ...state,
    breadcrumbs
  })),
  on(breadcumbsActions.clearBreadcrumbs, (state) => state)
);

export function breadcrumbReducer(
  state: any,
  action: Action
) {
  return _breadcrumbReducer(state, action);
}
