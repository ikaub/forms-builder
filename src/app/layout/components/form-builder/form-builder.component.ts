import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ComponentPortal} from '@angular/cdk/portal';
import {chooseComponent, drop} from '../../store/form.actions';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {ComponentInterface, LabeledComponentPortal} from '../../types/layout.types';
import {AppState} from '../../../types/app.types';

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
    this.store.select(state => state.form.selectedComponents).subscribe(components => {
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
}
