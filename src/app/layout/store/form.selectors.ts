import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FormState} from '../types/layout.types';
import {AppState} from '../../types/app.types';

export const formFeatureSelector = createFeatureSelector<AppState, FormState>('form');

export const selectAvailableComponents = createSelector(
  formFeatureSelector,
  (state: FormState) => state.availableComponents,
);

export const selectSelectedComponents = createSelector(
  formFeatureSelector,
  (state: FormState) => state.selectedComponents,
);

export const selectChosenComponent = createSelector(
  formFeatureSelector,
  (state: FormState) => state.chosenComponent,
);

