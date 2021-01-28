import { InjectionToken, Injector } from '@angular/core';
import { GeneralFormStyles, Styles } from 'src/app/core/form/store';

export const STYLES_DATA: InjectionToken<Styles> = new InjectionToken<Styles>('Styles Data');

export const GENERAL_FORM_STYLES = new InjectionToken<GeneralFormStyles>('General Form Styles Data');

export interface StylesInjector {
  injector: Injector;
  id: number;
}
