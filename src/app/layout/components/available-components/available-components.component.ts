import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

import { ComponentInterface, StylesInjector } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { selectAvailableComponents } from '../../store/form.selectors';
import { getStyles, remove } from '../../store/form.actions';
import { StylesInjectionService } from '../../services/styles-injection.service';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss'],
})
export class AvailableComponentsComponent implements OnInit {

  componentsList$!: Observable<ComponentInterface[]>;

  constructor(private store: Store<AppState>, private stylesInjectionService: StylesInjectionService) {
  }

  ngOnInit(): void {
    this.store.dispatch(getStyles());
    this.componentsList$ = this.store.pipe(select(selectAvailableComponents));
  }

  getInjectorById(id: number): Observable<StylesInjector> {
    return this.stylesInjectionService.getAvailableInjectorById(this.componentsList$, id);
  }

  drop(event: CdkDragDrop<any>): void {
    this.store.dispatch(remove({selectedId: event.previousContainer.data[event.previousIndex].selectedId}));
  }
}
