import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { selectGeneralStyles } from 'src/app/layout/store/form.selectors';
import { GeneralFormStyles } from 'src/app/layout/types/layout.types';
import { AppState } from 'src/app/types/app.types';
import { changeGeneralStyles } from 'src/app/layout/store/form.actions';

@Component({
  selector: 'app-general-styles-form',
  templateUrl: './general-styles-form.component.html',
  styleUrls: ['./general-styles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralStylesFormComponent implements OnInit, OnDestroy {
  generalStyles!: GeneralFormStyles;
  formGroup!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getGeneralStyles();
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
      verticalPadding: new FormControl(this.generalStyles.verticalPadding),
      horizontalPadding: new FormControl(this.generalStyles.horizontalPadding),
      margin: new FormControl(this.generalStyles.margin),
      color: new FormControl(this.generalStyles.color)
    });
  }

  getGeneralStyles(): void {
    this.subscriptions.push(this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = generalStyles;
    }));
  }

  subscribeToChanges(): void {
    this.subscriptions.push(this.formGroup.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(values => {
      this.store.dispatch(changeGeneralStyles({generalStyles: values}));
    }));
  }
}
