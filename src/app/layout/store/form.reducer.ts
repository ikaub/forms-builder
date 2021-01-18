import {Action, createReducer, on, props} from '@ngrx/store';
import {InputComponent} from '../../inputs/components/input/input.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {drop, remove} from './form.actions';
import {ElementRef} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

export interface FormState {
  availableComponents: any[];
  selectedComponents: any[];
}

const initialState: FormState = {
  availableComponents: [
    {...InputComponent},
    {...ButtonComponent},
    {...TextareaComponent},
    {...SelectComponent},
    {...CheckboxComponent}
  ],
  selectedComponents: [],
};

const formReducer = createReducer(
  initialState,
  on(drop, (state, {component}) => ({
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
