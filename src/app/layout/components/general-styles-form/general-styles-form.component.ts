import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { GeneralFormStyles, selectGeneralStyles } from 'src/app/core/form/store';
import { AppState } from 'src/app/core/reducers/core.reducer';
import { changeGeneralStyles } from 'src/app/core/form/store';

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
