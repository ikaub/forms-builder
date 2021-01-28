import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from 'src/app/core/reducers/core.reducer';
import { FormState } from 'src/app/core/form/store';

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
