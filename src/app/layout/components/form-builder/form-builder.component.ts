import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { chooseComponent, drop, getGeneralStyles, swapComponents } from '../../store/form.actions';
import { ComponentInterface, GeneralFormStyles, Styles, StylesInjector } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { selectGeneralStyles, selectSelectedComponents, selectSelectedStyles } from '../../store/form.selectors';
import { StylesInjectionService } from '../../services/styles-injection.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, OnDestroy {

  selectedComponents$!: Observable<ComponentInterface[]>;
  selectedStyles$!: Observable<Styles[]>;
  generalStyles!: GeneralFormStyles;
  subscriptions: Subscription[] = [];
  ComponentInterface!: ComponentInterface;

  constructor(private store: Store<AppState>, private stylesInjectionService: StylesInjectionService) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getGeneralStyles();
    this.getSelectedStyles();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer.id !== event.container.id) {
      this.store.dispatch(drop({id: event.previousContainer.data[event.previousIndex].id}));
    } else {
      this.store.dispatch(swapComponents({previousIndex: event.previousIndex, currentIndex: event.currentIndex}));
    }
  }

  getInjectorById(id: number): Observable<StylesInjector> {
    return this.stylesInjectionService.getSelectedInjectorById(this.selectedComponents$, this.selectedStyles$, id);
  }

  chooseComponent(selectedId: number): void {
    this.store.dispatch(chooseComponent({selectedId}));
  }

  getSelectedComponents(): void {
    this.selectedComponents$ = this.store.pipe(select(selectSelectedComponents));
  }

  getGeneralStyles(): void {
    this.store.dispatch(getGeneralStyles());
    this.subscriptions.push(this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = generalStyles;
    }));
  }

  getSelectedStyles(): void {
    this.selectedStyles$ = this.store.pipe(select(selectSelectedStyles));
  }
}
