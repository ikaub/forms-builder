import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { InputComponent } from 'src/app/inputs/components/input/input.component';
import { ButtonComponent } from 'src/app/inputs/components/button/button.component';
import { CheckboxComponent } from 'src/app/inputs/components/checkbox/checkbox.component';
import { SelectComponent } from 'src/app/inputs/components/select/select.component';
import { TextareaComponent } from 'src/app/inputs/components/textarea/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    DragDropModule,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    TextareaComponent,
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
