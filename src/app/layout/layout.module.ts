import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AvailableComponentsComponent } from './components/available-components/available-components.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { GeneralStylesComponent } from './components/general-styles/general-styles.component';
import { InputsModule } from '../inputs/inputs.module';
import { reducer } from './store/form.reducer';
import { GENERAL_FORM_STYLES, STYLES_DATA } from './types/layout.types';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { GeneralStylesFormComponent } from './components/general-styles-form/general-styles-form.component';
import { StylesService } from './services/styles.service';
import { FormEffects } from './store/form.effects';
import { StylesInjectionService } from './services/styles-injection.service';
import { UnifiedBuilderComponent } from './components/unified-builder/unified-builder.component';

@NgModule({
  imports: [
    CommonModule,
    InputsModule,
    StoreModule.forFeature('form', reducer),
    EffectsModule.forFeature([FormEffects]),
    DragDropModule,
    MatExpansionModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    HttpClientModule
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
