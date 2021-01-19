import {createAction, props} from '@ngrx/store';
import {CHOOSE_COMPONENT, DROP_INTO_FORM_BUILDER, REMOVE_FROM_FORM_BUILDER} from './form.types';
import {ComponentInterface} from '../types/layout.types';

export const drop = createAction(
  DROP_INTO_FORM_BUILDER,
  props<{ component: ComponentInterface }>(),
);

export const remove = createAction(
  REMOVE_FROM_FORM_BUILDER,
  props<{ component: number }>(),
);

export const chooseComponent = createAction(
  CHOOSE_COMPONENT,
  props<{ component: number }>(),
);
