import {Action, createReducer, on, props} from '@ngrx/store';
import {InputComponent} from '../../inputs/components/input/input.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {drop, remove} from './form.actions';
import {ElementRef} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

export interface Component {
  component: any;
  label: string;
}

export interface FormState {
  availableComponents: Component[];
  selectedComponents: Component[];
}

const initialState: FormState = {
  availableComponents: [
    {
      component: {...InputComponent},
      label: 'Text field'
    },
    {
      component: {...ButtonComponent},
      label: 'Button'
    },
    {
      component: {...TextareaComponent},
      label: 'Textarea'
    },
    {
      component: {...SelectComponent},
      label: 'Select'
    },
    {
      component: {...CheckboxComponent},
      label: 'Checkbox'
    }
  ],
  selectedComponents: [],
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
);

export const reducer = (state: FormState, action: Action) => formReducer(state, action);
