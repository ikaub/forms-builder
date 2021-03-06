import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { AvailableComponentsComponent } from 'src/app/layout/components/available-components/available-components.component';
import { FormBuilderComponent } from 'src/app/layout/components/form-builder/form-builder.component';
import { GeneralStylesComponent } from 'src/app/layout/components/general-styles/general-styles.component';
import { InputsModule } from 'src/app/inputs/inputs.module';
import { reducer } from 'src/app/core/form/store';
import { GENERAL_FORM_STYLES, STYLES_DATA } from 'src/app/layout/types/layout.types';
import { ExpandablePanelComponent } from 'src/app/layout/components/expandable-panel/expandable-panel.component';
import { GeneralStylesFormComponent } from 'src/app/layout/components/general-styles-form/general-styles-form.component';
import { StylesService } from 'src/app/layout/services/styles.service';
import { StylesInjectionService } from 'src/app/layout/services/styles-injection.service';
import { UnifiedBuilderComponent } from 'src/app/layout/components/unified-builder/unified-builder.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InputsModule,
    StoreModule.forFeature('form', reducer),
    DragDropModule,
    MatExpansionModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    AvailableComponentsComponent,
    FormBuilderComponent,
    GeneralStylesComponent,
    ExpandablePanelComponent,
    GeneralStylesFormComponent,
    UnifiedBuilderComponent,
  ],
  exports: [
    AvailableComponentsComponent,
    FormBuilderComponent,
    GeneralStylesComponent,
    ExpandablePanelComponent,
    GeneralStylesFormComponent,
    UnifiedBuilderComponent,
  ],
  providers: [
    {provide: STYLES_DATA, useValue: ''},
    {provide: GENERAL_FORM_STYLES, useValue: ''},
    StylesService,
    StylesInjectionService
  ]
})
export class LayoutModule {
}
