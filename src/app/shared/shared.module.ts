import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatedInputComponent } from 'src/app/shared/components/validated-input/validated-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
  ],
  providers: [
    AuthGuard
  ]
})
export class SharedModule {
}
