import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { StylesService } from 'src/app/layout/services/styles.service';
import { GET_GENERAL_STYLES, GET_STYLES } from 'src/app/core/form/store/form.types';
import { getGeneralStylesSuccess, getStylesSuccess } from 'src/app/core/form/store';

@Injectable()
export class FormEffects {

  loadStyles$ = createEffect(() => this.actions$.pipe(
    ofType(GET_STYLES),
    mergeMap(() => this.stylesService.getStyles().pipe(
      map(styles => getStylesSuccess({styles})),
    ))
  ));

  loadGeneralStyles$ = createEffect(() => this.actions$.pipe(
    ofType(GET_GENERAL_STYLES),
    mergeMap(() => this.stylesService.getGeneralStyles().pipe(
      map(styles => getGeneralStylesSuccess({styles})),
    ))
  ));

  constructor(private actions$: Actions, private stylesService: StylesService) {
  }
}
