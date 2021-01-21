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
}

export interface StyledComponentPortal {
  component: ComponentPortal<any> | null;
  styles: Styles;
}

export interface Styles extends Record<string, string | boolean> {
  placeholderText: string;
  width: string;
  height: string;
  required: boolean;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}

export const STYLES_DATA = new InjectionToken<Styles>('Styles Data');
