import {Action, createReducer, on} from '@ngrx/store';
import {InputComponent} from '../../inputs/components/input/input.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {chooseComponent, drop, remove} from './form.actions';
import {FormState} from '../types/layout.types';

const initialState: FormState = {
  availableComponents: [
    {
      component: {...InputComponent},
      styles: {
        placeholderText: 'Text field',
        width: 300,
        height: 100,
        fontSize: 14,
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
        width: 150,
        height: 40,
        fontSize: 14,
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
        width: 400,
        height: 200,
        fontSize: 14,
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
        width: 150,
        height: 40,
        fontSize: 14,
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
        width: 40,
        height: 40,
        fontSize: 14,
        fontWeight: 'normal',
        required: false,
        color: '#000',
        borderStyle: '1px solid #000',
      }
    }
  ],
  selectedComponents: [],
  chosenComponent: null,
};

const formReducer = createReducer(
  initialState,
  on(drop, (state: FormState, {component}) => ({
    ...state,
    selectedComponents: [...state.selectedComponents, component]
  })),
  on(remove, (state, {component}) => {
    const newComponents = [...state.selectedComponents];
    newComponents.splice(component, 1);
    return {
      ...state,
      selectedComponents: newComponents,
    };
  }),
  on(chooseComponent, (state, {component}) => ({
    ...state,
    chosenComponent: component,
  })),
);

export const reducer = (state: FormState, action: Action) => formReducer(state, action);
