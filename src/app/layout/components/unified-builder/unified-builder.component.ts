import { Component } from '@angular/core';

import { ComponentPortal } from '@angular/cdk/portal';
import { GeneralStylesComponent } from '../general-styles/general-styles.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { AvailableComponentsComponent } from '../available-components/available-components.component';

@Component({
  selector: 'app-unified-builder',
  templateUrl: './unified-builder.component.html',
  styleUrls: ['./unified-builder.component.scss']
})
export class UnifiedBuilderComponent {

  sectionStyles: ComponentPortal<GeneralStylesComponent>;
  sectionFormBuilder: ComponentPortal<FormBuilderComponent>;
  sectionAvailableComponents: ComponentPortal<AvailableComponentsComponent>;

  constructor() {
    this.sectionStyles = new ComponentPortal(GeneralStylesComponent);
    this.sectionFormBuilder = new ComponentPortal(FormBuilderComponent);
    this.sectionAvailableComponents = new ComponentPortal(AvailableComponentsComponent);
  }
}
