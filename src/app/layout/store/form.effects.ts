import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { StylesService } from '../services/styles.service';
import { GET_STYLES } from './form.types';
import { map, mergeMap } from 'rxjs/operators';
import { getStylesSuccess } from './form.actions';

@Injectable()
export class FormEffects {

  loadStyles$ = createEffect(() => this.actions$.pipe(
    ofType(GET_STYLES),
    mergeMap(() => this.stylesService.getStyles().pipe(
      map(styles => getStylesSuccess({styles})),
    ))
  ));

  constructor(private actions$: Actions, private stylesService: StylesService) {
  }
}
