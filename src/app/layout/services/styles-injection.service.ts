import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentInterface, Styles, STYLES_DATA, StylesInjector } from '../types/layout.types';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class StylesInjectionService {
  constructor(private injector: Injector) {
  }

  getAvailableInjectors(components$: Observable<ComponentInterface[]>): Observable<StylesInjector[]> {
    return components$.pipe(
      map(components => components.map(
        (component: ComponentInterface) => ({
          injector: Injector.create({
            providers: [{provide: STYLES_DATA, useValue: component.styles}],
            parent: this.injector,
          }),
          id: component.id,
        })
        )
      ),
    );
  }

  getSelectedInjectors(components$: Observable<ComponentInterface[]>, styles$: Observable<Styles[]>): Observable<StylesInjector[]> {
    return components$.pipe(
      switchMap(components => styles$.pipe(
        map(styles => components.map(component => {
          const style = styles.find(s => s.selectedId === component.selectedId)!;
          return {
            injector: Injector.create({
              providers: [{provide: STYLES_DATA, useValue: style}],
              parent: this.injector,
            }),
            id: component.selectedId!,
          };
        }))
      )),
      /**/
    );
  }

  getAvailableInjectorById(components$: Observable<ComponentInterface[]>, id: number): Observable<StylesInjector> {
    return this.getAvailableInjectors(components$).pipe(
      map(injectors => injectors.filter(injector => injector.id === id)[0])
    );
  }

  getSelectedInjectorById(components$: Observable<ComponentInterface[]>, styles$: Observable<Styles[]>, id: number)
    : Observable<StylesInjector> {
    return this.getSelectedInjectors(components$, styles$).pipe(
      map(injectors => injectors.filter(injector => injector.id === id)[0])
    );
  }
}
