import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Styles } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { changeStyles, chooseComponent } from '../../store/form.actions';
import { selectChosenComponent, selectSelectedStyles } from '../../store/form.selectors';

@Component({
  selector: 'app-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss'],
})
export class ExpandablePanelComponent implements OnInit, OnDestroy {
  styles!: Styles;
  formGroup!: FormGroup;
  chosenComponent$!: Observable<number>;
  subscriptions: Subscription[] = [];
  @Input() componentId!: number;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getChosenComponent();
    this.getCurrentStyles();
    this.initializeForm();
    this.subscribeToChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      placeholderText: new FormControl(this.styles.placeholderText),
      width: new FormControl(this.styles.width),
      height: new FormControl(this.styles.height),
      required: new FormControl(this.styles.required),
      border: new FormControl(this.styles.border),
      'border-radius': new FormControl(this.styles['border-radius']),
      'font-size': new FormControl(this.styles['font-size']),
      'font-weight': new FormControl(this.styles['font-weight']),
      color: new FormControl(this.styles.color),
    });
  }

  getChosenComponent(): void {
    this.chosenComponent$ = this.store.pipe(select(selectChosenComponent));
  }

  subscribeToChanges(): void {
    this.subscriptions.push(this.formGroup.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(styles => {
      this.store.dispatch(changeStyles({styles}));
    }));
  }

  getCurrentStyles(): void {
    this.subscriptions.push(this.store.pipe(
      select(selectSelectedStyles),
      map(styles => styles.filter(style => style.selectedId === this.componentId)[0]),
    ).subscribe(styles => {
      this.styles = styles;
    }));
  }

  setChosenComponent(selectedId: number): void {
    this.store.dispatch(chooseComponent({selectedId}));
  }
}
