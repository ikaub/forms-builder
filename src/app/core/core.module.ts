import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormEffects } from './form/store/form.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([FormEffects])
  ]
})
export class CoreModule {
}
