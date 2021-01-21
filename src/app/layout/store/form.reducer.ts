import {Action, createReducer, on} from '@ngrx/store';
import {InputComponent} from '../../inputs/components/input/input.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {changeGeneralStyles, changeStyles, chooseComponent, drop, remove, swapComponents} from './form.actions';
import {FormState} from '../types/layout.types';

const initialState: FormState = {
  availableComponents: [
    {
      component: {...InputComponent},
      styles: {
        placeholderText: 'Text field',
        width: '100%',
        height: '40px',
        'font-size': '14px',
        'font-weight': 'normal',
        required: false,
        color: '#000',
        border: '1px solid #000',
      }
    },
    {
      component: {...ButtonComponent},
      styles: {
        placeholderText: 'Button',
        width: '150px',
        height: '40px',
        'font-size': '14px',
        'font-weight': 'normal',
        required: false,
        color: '#000',
        border: '1px solid #000',
      }
    },
    {
      component: {...TextareaComponent},
      styles: {
        placeholderText: 'Textarea',
        width: '100%',
        height: '130px',
        'font-size': '14',
        'font-weight': 'normal',
        required: false,
        color: '#000',
        border: '1px solid #000',
      }
    },
    {
      component: {...CheckboxComponent},
      styles: {
        placeholderText: 'Checkbox',
        width: '120px',
        height: '60px',
        'font-size': '14px',
        'font-weight': 'normal',
        required: false,
        color: '#000',
        border: '1px solid #000',
      }
    },
    {
      component: {...SelectComponent},
      styles: {
        placeholderText: 'Select',
        width: '150px',
        height: '40px',
        'font-size': '14px',
        'font-weight': 'normal',
        required: false,
        color: '#000',
        border: '1px solid #000',
      }
    },
  ],
  selectedComponents: [],
  chosenComponent: 0,
  generalStyles: {
    horizontalPadding: '10px',
    verticalPadding: '10px',
    margin: '10px',
    color: '#ffffff',
  }
};

const formReducer = createReducer(
  initialState,
  on(drop, (state: FormState, {component, index}) => {
    const newComponents = [...state.selectedComponents];
    newComponents.splice(index, 0, component);
    return {
      ...state,
      selectedComponents: newComponents,
      chosenComponent: index,
    };
  }),
  on(remove, (state, {componentIndex}) => {
    const newComponents = [...state.selectedComponents];
    newComponents.splice(componentIndex, 1);
    return {
      ...state,
      selectedComponents: newComponents,
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
  on(chooseComponent, (state, {componentIndex}) => ({
    ...state,
    chosenComponent: componentIndex,
  })),
  on(changeStyles, (state, {styles}) => ({
    ...state,
    selectedComponents: state.selectedComponents.map((selected, index) => index === state.chosenComponent
      ? {component: selected.component, styles}
      : selected),
  })),
  on(changeGeneralStyles, (state, {generalStyles}) => ({
    ...state,
    generalStyles,
  }))
);

export const reducer = (state: FormState, action: Action) => formReducer(state, action);
