import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormState} from '../../store/form.reducer';
import {ComponentPortal} from '@angular/cdk/portal';
import {drop} from '../../store/form.actions';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  selectedComponents: ComponentPortal<any>[] = [];

  constructor(private store: Store<{ form: FormState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.form.selectedComponents).subscribe(components => {
      this.selectedComponents = components.map(component => new ComponentPortal(component));
    });
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer.id !== event.container.id) {
      this.store.dispatch(drop({component: event.previousContainer.data[event.previousIndex].component}));
    }
  }
}
