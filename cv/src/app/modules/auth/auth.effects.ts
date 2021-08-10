import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';

import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) { }

  private login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.authService.signIn(action.user).pipe(
          map((user) => AuthActions.loginSuccess({ user: user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });
}
