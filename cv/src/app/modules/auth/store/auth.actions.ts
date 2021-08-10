import { createAction, props } from '@ngrx/store';
import { LoginUser } from 'src/app/core/interfaces/login-user.interface';
import { User } from 'src/app/core/interfaces/user.interface';

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: LoginUser }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Success',
  props<{ error: any }>()
);
