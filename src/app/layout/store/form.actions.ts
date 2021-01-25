import { createAction, props } from '@ngrx/store';

import {
  CHANGE_GENERAL_STYLES,
  CHANGE_STYLES,
  CHOOSE_COMPONENT,
  DROP_INTO_FORM_BUILDER, GET_GENERAL_STYLES, GET_GENERAL_STYLES_SUCCESS, GET_STYLES, GET_STYLES_SUCCESS,
  REMOVE_FROM_FORM_BUILDER,
  SWAP_COMPONENTS
} from './form.types';
import { ComponentInterface, GeneralFormStyles, Styles } from '../types/layout.types';

export const drop = createAction(
  DROP_INTO_FORM_BUILDER,
  props<{ id: number }>(),
);

export const remove = createAction(
  REMOVE_FROM_FORM_BUILDER,
  props<{ selectedId: number }>(),
);

export const swapComponents = createAction(
  SWAP_COMPONENTS,
  props<{ previousIndex: number, currentIndex: number }>(),
);

export const chooseComponent = createAction(
  CHOOSE_COMPONENT,
  props<{ selectedId: number }>(),
);

export const changeStyles = createAction(
  CHANGE_STYLES,
  props<{ styles: Styles }>(),
);

export const changeGeneralStyles = createAction(
  CHANGE_GENERAL_STYLES,
  props<{ generalStyles: GeneralFormStyles }>(),
);

export const getStyles = createAction(
  GET_STYLES,
);

export const getStylesSuccess = createAction(
  GET_STYLES_SUCCESS,
  props<{ styles: Styles[] }>(),
);

export const getGeneralStyles = createAction(
  GET_GENERAL_STYLES,
);

export const getGeneralStylesSuccess = createAction(
  GET_GENERAL_STYLES_SUCCESS,
  props<{ styles: GeneralFormStyles }>(),
);
