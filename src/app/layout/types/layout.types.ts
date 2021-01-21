import {ComponentPortal} from '@angular/cdk/portal';
import {InjectionToken} from '@angular/core';

export interface ComponentInterface {
  component: any;
  styles: Styles;
}

export interface FormState {
  availableComponents: ComponentInterface[];
  selectedComponents: ComponentInterface[];
  chosenComponent: number;
  generalStyles: GeneralFormStyles;
}

export interface StyledComponentPortal {
  component: ComponentPortal<any> | null;
  styles: Styles;
}

export interface Styles {
  placeholderText: string;
  width: string;
  height: string;
  required: boolean;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}

export interface GeneralFormStyles {
  verticalPadding: string;
  horizontalPadding: string;
  margin: string;
  color: string;
}

export const STYLES_DATA = new InjectionToken<Styles>('Styles Data');

export const GENERAL_FORM_STYLES = new InjectionToken<GeneralFormStyles>('General Form Styles Data');
