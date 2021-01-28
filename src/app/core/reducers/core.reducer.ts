import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromForm from 'src/app/core/form/store';

export interface AppState {
  form: fromForm.FormState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
  // @ts-ignore
  form: fromForm.reducer,
};
