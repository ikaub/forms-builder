import { Action, createReducer, on } from '@ngrx/store';

import { InputComponent } from '../../inputs/components/input/input.component';
import { ButtonComponent } from '../../inputs/components/button/button.component';
import { TextareaComponent } from '../../inputs/components/textarea/textarea.component';
import { SelectComponent } from '../../inputs/components/select/select.component';
import { CheckboxComponent } from '../../inputs/components/checkbox/checkbox.component';
import {
  changeGeneralStyles,
  changeStyles,
  chooseComponent,
  drop,
  getGeneralStylesSuccess,
  getStylesSuccess,
  remove,
  swapComponents
} from './form.actions';
import { FormState, GeneralFormStyles, Styles } from '../types/layout.types';

const initialState: FormState = {
  availableComponents: [
    {
      component: {...InputComponent},
      styles: {} as Styles,
      id: 1,
    },
    {
      component: {...ButtonComponent},
      styles: {} as Styles,
      id: 2,
    },
    {
      component: {...TextareaComponent},
      styles: {} as Styles,
      id: 3,
    },
    {
      component: {...CheckboxComponent},
      styles: {} as Styles,
      id: 4,
    },
    {
      component: {...SelectComponent},
      styles: {} as Styles,
      id: 5,
    },
  ],
  selectedComponents: [],
  chosenComponent: 0,
  generalStyles: {} as GeneralFormStyles,
};

const formReducer = createReducer(
  initialState,
  on(drop, (state: FormState, {id}) => {
    const selectedId = state.selectedComponents[0]?.selectedId !== undefined
      ? Math.max(...state.selectedComponents.map(component => component.selectedId!)) + 1
      : 1;
    return {
      ...state,
      selectedComponents: [
        ...state.selectedComponents,
        {
          ...state.availableComponents.filter(component => component.id === id)[0],
          selectedId,
        },
      ],
      chosenComponent: selectedId,
    };
  }),
  on(remove, (state, {selectedId}) => {
    return {
      ...state,
      selectedComponents: state.selectedComponents.filter(component => component.selectedId !== selectedId),
    };
  }),
  on(swapComponents, (state, {previousIndex, currentIndex}) => {
    const newComponents = [...state.selectedComponents];
    [newComponents[previousIndex], newComponents[currentIndex]] = [newComponents[currentIndex], newComponents[previousIndex]];
    return {
      ...state,
      selectedComponents: newComponents,
    };
  }),
  on(chooseComponent, (state, {selectedId}) => ({
    ...state,
    chosenComponent: selectedId,
  })),
  on(changeStyles, (state, {styles}) => ({
    ...state,
    selectedComponents: state.selectedComponents.map((selected) => selected.selectedId === state.chosenComponent
      ? {...selected, styles: {...selected.styles, ...styles}}
      : selected),
  })),
  on(changeGeneralStyles, (state, {generalStyles}) => ({
    ...state,
    generalStyles,
  })),
  on(getStylesSuccess, (state, {styles}) => ({
    ...state,
    availableComponents: state.availableComponents.map(component => ({
      ...component,
      styles: styles.filter(style => style.id === component.id)[0],
    })),
  })),
  on(getGeneralStylesSuccess, (state, {styles}) => ({
    ...state,
    generalStyles: styles,
  }))
);

export const reducer = (state: FormState, action: Action) => formReducer(state, action);
