import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Styles } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { changeStyles } from '../../store/form.actions';
import { selectChosenComponent, selectSelectedStyles } from '../../store/form.selectors';

@Component({
  selector: 'app-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss']
})
export class ExpandablePanelComponent implements OnInit {
  styles!: Styles;
  formGroup!: FormGroup;
  chosenComponent!: number;
  @Input() componentId!: number;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getChosenComponent();
    this.getCurrentStyles();
    this.initializeForm();
    this.subscribeToChanges();
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
    this.store.pipe(select(selectChosenComponent)).subscribe(id => {
      this.chosenComponent = id;
    });
  }

  subscribeToChanges(): void {
    this.formGroup.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(styles => {
      this.store.dispatch(changeStyles({styles}));
    });
  }

  getCurrentStyles(): void {
    this.store.pipe(
      select(selectSelectedStyles),
      map(styles => styles.filter(style => style.selectedId === this.componentId)[0]),
    ).subscribe(styles => {
      this.styles = styles;
    });
  }

}
