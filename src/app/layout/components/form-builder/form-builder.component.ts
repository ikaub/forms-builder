import {Component, ComponentRef, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CdkPortalOutletAttachedRef, ComponentPortal} from '@angular/cdk/portal';
import {chooseComponent, drop} from '../../store/form.actions';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {LabeledComponentPortal} from '../../types/layout.types';
import {AppState} from '../../../types/app.types';
import {selectSelectedComponents} from '../../store/form.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  selectedComponents: LabeledComponentPortal[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectSelectedComponents)).subscribe(components => {
      this.selectedComponents = components.map(({component, styles}) => ({
        component: new ComponentPortal<any>(component),
        styles,
      }));
    });
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer.id !== event.container.id) {
      const props = {
        component: {
          component: event.previousContainer.data[event.previousIndex].component.component,
          styles: event.previousContainer.data[event.previousIndex].styles
        }
      };
      this.store.dispatch(drop(props));
    }
  }

  chooseComponent(index: number): void {
    this.store.dispatch(chooseComponent({component: index}));
  }

  injectStyles(portalRef: CdkPortalOutletAttachedRef): void {
    this.selectedComponents.forEach(({component, styles}) => {
      Object.keys(styles).forEach(key => {
        (portalRef as ComponentRef<any>).instance[key] = styles[key];
      });
    });
  }
}
