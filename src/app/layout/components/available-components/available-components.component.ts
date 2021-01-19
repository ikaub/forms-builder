import {Component, OnInit} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {select, Store} from '@ngrx/store';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {remove} from '../../store/form.actions';
import {FormState, LabeledComponentPortal} from '../../types/layout.types';
import {AppState} from '../../../types/app.types';
import {selectAvailableComponents} from '../../store/form.selectors';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss'],
})
export class AvailableComponentsComponent implements OnInit {

  componentsList: LabeledComponentPortal[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAvailableComponents)).subscribe(components => {
      this.componentsList = components.map(({component, styles}) => ({
        component: new ComponentPortal<any>(component),
        styles,
      }));
    });
  }

  drop(event: CdkDragDrop<any>): void {
    this.store.dispatch(remove({component: event.previousIndex}));
  }
}
