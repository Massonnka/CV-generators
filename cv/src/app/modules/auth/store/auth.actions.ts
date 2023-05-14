import { createAction, props } from '@ngrx/store';
import { LoginUser } from 'src/app/shared/interfaces/login-user.interface';

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: LoginUser }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);
