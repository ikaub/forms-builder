import { Injectable, Injector } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../types/app.types';
import { Observable } from 'rxjs';
import { ComponentInterface, STYLES_DATA, StylesInjector } from '../types/layout.types';
import { selectAvailableComponents } from '../store/form.selectors';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable()
export class StylesInjectionService {
  constructor(private injector: Injector) {
  }

  getInjectors(components$: Observable<ComponentInterface[]>): Observable<StylesInjector[]> {
    return components$.pipe(
      map(components => components.map(
        (component: ComponentInterface) => ({
          injector: Injector.create({
            providers: [{provide: STYLES_DATA, useValue: component.styles}],
            parent: this.injector,
          }),
          id: component.selectedId !== undefined ? component.selectedId : component.id,
        })
        )
      ),
    );
  }

  getInjectorById(components$: Observable<ComponentInterface[]>, id: number): Observable<StylesInjector> {
    return this.getInjectors(components$).pipe(
      map(injectors => injectors.filter(injector => injector.id === id)[0])
    );
  }
}
