import {createAction, props} from '@ngrx/store';
import {CHANGE_STYLES, CHOOSE_COMPONENT, DROP_INTO_FORM_BUILDER, REMOVE_FROM_FORM_BUILDER} from './form.types';
import {ComponentInterface, Styles} from '../types/layout.types';

export const drop = createAction(
  DROP_INTO_FORM_BUILDER,
  props<{ component: ComponentInterface }>(),
);

export const remove = createAction(
  REMOVE_FROM_FORM_BUILDER,
  props<{ componentIndex: number }>(),
);

export const chooseComponent = createAction(
  CHOOSE_COMPONENT,
  props<{ componentIndex: number }>(),
);

export const changeStyles = createAction(
  CHANGE_STYLES,
  props<{styles: Styles}>(),
);
