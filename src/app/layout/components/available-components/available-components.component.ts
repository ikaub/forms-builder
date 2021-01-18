import {Component, OnInit} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {InputComponent} from '../../../inputs/components/input/input.component';
import {GeneralStylesComponent} from '../general-styles/general-styles.component';
import {Store} from '@ngrx/store';
import {FormState} from '../../store/form.reducer';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {remove} from '../../store/form.actions';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss'],
})
export class AvailableComponentsComponent implements OnInit {

  componentsList: ComponentPortal<any>[] = [];

  constructor(private store: Store<{ form: FormState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.form.availableComponents).subscribe(components => {
      this.componentsList = components.map(component => new ComponentPortal(component));
    });
  }

  drop(event: CdkDragDrop<any>): void {
    this.store.dispatch(remove({component: event.previousIndex}));
  }
}
