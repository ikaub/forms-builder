import {NgModule} from '@angular/core';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {SelectComponent} from './components/select/select.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    TextareaComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    TextareaComponent
  ]
})
export class InputsModule {
}
