import { createAction, props } from '@ngrx/store';

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './auth.types';
import { Token, User } from '../types/auth.types';

export const login = createAction(
  LOGIN,
  props<User>(),
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: Token }>(),
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{ error: string }>(),
);

