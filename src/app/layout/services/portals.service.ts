import {Injectable, Injector} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../types/app.types';
import {selectAvailableComponents, selectSelectedComponents} from '../store/form.selectors';
import {ComponentPortal} from '@angular/cdk/portal';
import {ComponentInterface, StyledComponentPortal, STYLES_DATA} from '../types/layout.types';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class PortalsService {

  constructor(private store: Store<AppState>, private injector: Injector) {
  }

  getAvailableComponentsPortals(): Observable<StyledComponentPortal[]> {
    return this.store.pipe(
      select(selectAvailableComponents),
      map((components: ComponentInterface[]) => components.map(
        ({component, styles}) => ({
          component: new ComponentPortal<any>(component),
          styles,
        })
      )),
    );
  }

  getSelectedComponentsPortals(): Observable<StyledComponentPortal[]> {
    return this.store.pipe(
      select(selectSelectedComponents),
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
