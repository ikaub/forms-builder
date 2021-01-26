import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { Token } from '../types/auth.types';
import { loginFailure, loginSuccess } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { LOGIN } from './auth.types';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LOGIN),
    exhaustMap(({email, password}) => this.authService.login({email, password})
      .pipe(
        map((token: Token) => loginSuccess({token})),
        catchError(err => of(loginFailure({error: err.message})))
      )),
    ),
  );

  constructor(private authService: AuthService, private actions$: Actions) {
  }
}
