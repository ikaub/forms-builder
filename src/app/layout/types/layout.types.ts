import {ComponentPortal} from '@angular/cdk/portal';

export interface ComponentInterface {
  component: any;
  styles: Styles;
}

export interface FormState {
  availableComponents: ComponentInterface[];
  selectedComponents: ComponentInterface[];
  chosenComponent: number | null;
}

export interface LabeledComponentPortal {
  component: ComponentPortal<any> | null;
  styles: Styles;
}

export interface Styles extends Record<string, string | number | boolean> {
  placeholderText: string;
  width: number;
  height: number;
  required: boolean;
  borderStyle: string;
  fontSize: number;
  fontWeight: string;
  color: string;
}
