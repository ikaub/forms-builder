import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnifiedBuilderComponent } from 'src/app/layout/components/unified-builder/unified-builder.component';
import { AuthComponent } from 'src/app/auth/components/auth/auth.component';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'form-builder', component: UnifiedBuilderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
