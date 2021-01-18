import {createAction, props} from '@ngrx/store';
import {DROP_INTO_FORM_BUILDER, REMOVE_FROM_FORM_BUILDER} from './form.types';

export const drop = createAction(
  DROP_INTO_FORM_BUILDER,
  props<{ component: any }>(),
);

export const remove = createAction(
  REMOVE_FROM_FORM_BUILDER,
  props<{ component: number }>(),
);

