import {Action, createReducer, on} from '@ngrx/store';
import {InputComponent} from '../../inputs/components/input/input.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {changeStyles, chooseComponent, drop, remove} from './form.actions';
import {ComponentInterface, FormState} from '../types/layout.types';

const initialState: FormState = {
  availableComponents: [
    {
      component: {...InputComponent},
      styles: {
        placeholderText: 'Text field',
        width: '100%',
        height: '40px',
        fontSize: '14px',
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    },
    {
      component: {...ButtonComponent},
      styles: {
        placeholderText: 'Button',
        width: '150px',
        height: '40px',
        fontSize: '14px',
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    },
    {
      component: {...TextareaComponent},
      styles: {
        placeholderText: 'Textarea',
        width: '100%',
        height: '130px',
        fontSize: '14',
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    },
    {
      component: {...CheckboxComponent},
      styles: {
        placeholderText: 'Checkbox',
        width: '120px',
        height: '60px',
        fontSize: '14px',
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    },
    {
      component: {...SelectComponent},
      styles: {
        placeholderText: 'Select',
        width: '150px',
        height: '40px',
        fontSize: '14px',
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    },
  ],
  selectedComponents: [],
  chosenComponent: 0,
};

const formReducer = createReducer(
  initialState,
  on(drop, (state: FormState, {component}) => ({
    ...state,
    selectedComponents: [...state.selectedComponents, component]
  })),
  on(remove, (state, {componentIndex}) => {
    const newComponents = [...state.selectedComponents];
    newComponents.splice(componentIndex, 1);
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
    selectedComponents: state.selectedComponents.map(
      (component: ComponentInterface, index: number) => index === state.chosenComponent
        ? {...component, styles: {...styles}}
        : {...component},
    ),
  })),
);

export const reducer = (state: FormState, action: Action) => formReducer(state, action);
