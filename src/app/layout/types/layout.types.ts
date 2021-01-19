import {ComponentPortal} from '@angular/cdk/portal';
import {InputComponent} from '../../inputs/components/input/input.component';
import {CheckboxComponent} from '../../inputs/components/checkbox/checkbox.component';
import {ButtonComponent} from '../../inputs/components/button/button.component';
import {TextareaComponent} from '../../inputs/components/textarea/textarea.component';
import {SelectComponent} from '../../inputs/components/select/select.component';

export type AvailableComponents =
  | InputComponent
  | CheckboxComponent
  | ButtonComponent
  | TextareaComponent
  | SelectComponent;

export interface ComponentInterface {
  component: any;
  label: string;
}

export interface FormState {
  availableComponents: ComponentInterface[];
  selectedComponents: ComponentInterface[];
  chosenComponent: number | null;
}

export interface LabeledComponentPortal {
  component: ComponentPortal<AvailableComponents> | null;
  label: string;
}

export interface Styles {
  placeholderText: string;
  width: number;
  height: number;
  required: boolean;
  borderStyle: string;
  fontSize: number;
  fontWeight: string;
  color: string;
}
