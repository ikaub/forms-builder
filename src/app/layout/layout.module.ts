import {NgModule} from '@angular/core';
import {AvailableComponentsComponent} from './components/available-components/available-components.component';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {GeneralStylesComponent} from './components/general-styles/general-styles.component';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';
import {InputsModule} from '../inputs/inputs.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/form.reducer';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    InputsModule,
    StoreModule.forFeature('form', reducer),
    DragDropModule,
    MatExpansionModule,
  ],
  declarations: [
    AvailableComponentsComponent,
    FormBuilderComponent,
    GeneralStylesComponent,
  ],
  exports: [
    AvailableComponentsComponent,
    FormBuilderComponent,
    GeneralStylesComponent,
  ]
})
export class LayoutModule {
}
