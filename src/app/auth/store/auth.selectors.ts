import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../types/app.types';
import { AuthState } from '../types/auth.types';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const selectToken = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.token,
);

export const selectError = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.error,
);


