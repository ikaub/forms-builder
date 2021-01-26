import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnifiedBuilderComponent } from './layout/components/unified-builder/unified-builder.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';

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
