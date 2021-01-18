import { Component } from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {GeneralStylesComponent} from './layout/components/general-styles/general-styles.component';
import {FormBuilderComponent} from './layout/components/form-builder/form-builder.component';
import {AvailableComponentsComponent} from './layout/components/available-components/available-components.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sectionStyles: ComponentPortal<GeneralStylesComponent>;
  sectionFormBuilder: ComponentPortal<FormBuilderComponent>;
  sectionAvailableComponents: ComponentPortal<AvailableComponentsComponent>;

  constructor() {
    this.sectionStyles = new ComponentPortal(GeneralStylesComponent);
    this.sectionFormBuilder = new ComponentPortal(FormBuilderComponent);
    this.sectionAvailableComponents = new ComponentPortal(AvailableComponentsComponent);
  }
}
