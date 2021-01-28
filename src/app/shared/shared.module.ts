import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatedInputComponent } from 'src/app/shared/components/validated-input/validated-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ValidatedInputComponent,
  ],
  exports: [
    ValidatedInputComponent,
  ]
})
export class SharedModule {
}
