import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './../actions/counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(CounterActions.increment , (state) => state + 1),
  on(CounterActions.decrement, (state) => state - 1),
  on(CounterActions.reset, (state) => state = 0)
);
 
export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}