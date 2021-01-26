import { InjectionToken, Injector } from '@angular/core';

export interface ComponentInterface {
  component: any;
  styles?: Styles;
  id: number;
  selectedId?: number;
}

export interface FormState {
  availableComponents: ComponentInterface[];
  selectedComponents: ComponentInterface[];
  chosenComponent: number;
  generalStyles: GeneralFormStyles;
  selectedStyles: Styles[];
}

export interface Styles {
  placeholderText: string;
  width: string;
  height: string;
  required: boolean;
  border: string;
  'border-radius': string;
  'font-size': string;
  'font-weight': string;
  color: string;
  id: number;
  display?: string;
  'justify-content'?: string;
  'align-items'?: string;
  selectedId: number;
}

export interface GeneralFormStyles {
  verticalPadding: string;
  horizontalPadding: string;
  margin: string;
  color: string;
}

export const STYLES_DATA = new InjectionToken<Styles>('Styles Data');

export const GENERAL_FORM_STYLES = new InjectionToken<GeneralFormStyles>('General Form Styles Data');

export interface StylesInjector {
  injector: Injector;
  id: number;
}
