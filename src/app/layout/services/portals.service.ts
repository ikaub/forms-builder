import { Injectable, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultProjectorFn, MemoizedSelector, select, Store } from '@ngrx/store';

import { AppState } from '../../types/app.types';
import { selectSelectedComponents } from '../store/form.selectors';
import { ComponentInterface, StyledComponentPortal, STYLES_DATA } from '../types/layout.types';

@Injectable()
export class PortalsService {

  constructor(private store: Store<AppState>, private injector: Injector) {
  }

  getPortalsBySelector(
    selector: MemoizedSelector<AppState, ComponentInterface[], DefaultProjectorFn<ComponentInterface[]>>
  ): Observable<StyledComponentPortal[]> {
    return this.store.pipe(
      select(selector),
      map((components: ComponentInterface[]) => components.map(({component, styles}) => ({
        component: new ComponentPortal<any>(
          component,
          null,
          Injector.create({
            parent: this.injector,
            providers: [{
              provide: STYLES_DATA,
              useValue: styles,
            }],
          })),
        styles,
      }))),
    );
  }

  getSelectedComponents(): Observable<ComponentInterface[]> {
    return this.store.pipe(
      select(selectSelectedComponents),
    );
  }
}
