import {createAction, props} from '@ngrx/store';
import {DROP_INTO_FORM_BUILDER, REMOVE_FROM_FORM_BUILDER} from './form.types';
import {Component} from './form.reducer';

export const drop = createAction(
  DROP_INTO_FORM_BUILDER,
  props<{ component: Component }>(),
);

export const remove = createAction(
  REMOVE_FROM_FORM_BUILDER,
  props<{ component: number }>(),
);

