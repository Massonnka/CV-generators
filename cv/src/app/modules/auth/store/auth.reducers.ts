import { createReducer, on, Action } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { LoginUser } from 'src/app/core/interfaces/login-user.interface';
import { User } from 'src/app/core/interfaces/user.interface';

import * as AuthActions from './auth.actions';

export const themesFeatureKey = 'theme';

export interface AuthState {
  user: LoginUser;
  error: any;
}

const initialState: AuthState = {
  user: {
    email: null,
    password: null,
    returnSecureToken: null,
  },
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => {
    return { ...state, user: action.user, error: null };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        email: null,
        password: null,
        returnSecureToken: null,
      },
      error: action.error,
    };
  })
);
