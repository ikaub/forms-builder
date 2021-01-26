import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { selectGeneralStyles } from '../../store/form.selectors';
import { GeneralFormStyles } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { changeGeneralStyles } from '../../store/form.actions';

@Component({
  selector: 'app-general-styles-form',
  templateUrl: './general-styles-form.component.html',
  styleUrls: ['./general-styles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralStylesFormComponent implements OnInit {
  generalStyles$!: Observable<GeneralFormStyles>;
  formGroup!: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getGeneralStyles();
    this.initializeForm();
    this.subscribeToChanges();
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      verticalPadding: new FormControl('10px'),
      horizontalPadding: new FormControl('10px'),
      margin: new FormControl('10px'),
      color: new FormControl('#ffffff')
    });
  }

  getGeneralStyles(): void {
    this.generalStyles$ = this.store.pipe(select(selectGeneralStyles));
  }

  subscribeToChanges(): void {
    this.formGroup.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(values => {
      this.store.dispatch(changeGeneralStyles({generalStyles: values}));
    });
  }
}
