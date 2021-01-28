import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthInterceptor } from 'src/app/auth/interceptors/auth.interceptor';
import { AuthComponent } from 'src/app/auth/components/auth/auth.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule {
}
