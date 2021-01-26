import { AuthState } from '../types/auth.types';
import { Action, createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess } from './auth.actions';

const initialState: AuthState = {
  token: '',
  error: '',
};

const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {token}) => ({
    ...state,
    token: token.access_token,
  })),
  on(loginFailure, (state, {error}) => ({
    ...state,
    error
  }))
);

export const reducer = (state: AuthState, action: Action) => authReducer(state, action);
