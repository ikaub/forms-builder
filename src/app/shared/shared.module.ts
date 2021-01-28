import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatedInputComponent } from 'src/app/shared/components/validated-input/validated-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ValidatedInputComponent,
    ErrorMessageComponent,
  ],
  exports: [
    ValidatedInputComponent,
    ErrorMessageComponent,
  ],
  providers: [
    AuthGuard
  ]
})
export class SharedModule {
}
