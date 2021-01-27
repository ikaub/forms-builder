import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FormState } from 'src/app/layout/types/layout.types';
import { AppState } from 'src/app/types/app.types';

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

export const selectGeneralStyles = createSelector(
  formFeatureSelector,
  (state: FormState) => state.generalStyles,
);

export const selectSelectedStyles = createSelector(
  formFeatureSelector,
  (state: FormState) => state.selectedStyles,
);
