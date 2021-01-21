import {Component, Input, OnInit} from '@angular/core';
import {ComponentInterface} from '../../types/layout.types';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {changeStyles} from '../../store/form.actions';
import {selectChosenComponent} from '../../store/form.selectors';

@Component({
  selector: 'app-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss']
})
export class ExpandablePanelComponent implements OnInit {
  @Input() component!: ComponentInterface;
  @Input() index!: number;
  formGroup!: FormGroup;
  chosenComponent!: number;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getChosenComponent();
    this.subscribeToChanges();
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      placeholderText: new FormControl(this.component.styles.placeholderText),
      width: new FormControl(this.component.styles.width),
      height: new FormControl(this.component.styles.height),
      required: new FormControl(this.component.styles.required),
      border: new FormControl(this.component.styles.border),
      'border-radius': new FormControl(this.component.styles['border-radius']),
      'font-size': new FormControl(this.component.styles['font-size']),
      'font-weight': new FormControl(this.component.styles['font-weight']),
      color: new FormControl(this.component.styles.color),
    });
  }

  getChosenComponent(): void {
    this.store.pipe(select(selectChosenComponent)).subscribe(index => {
      this.chosenComponent = index;
    });
  }

  subscribeToChanges(): void {
    this.formGroup.valueChanges.pipe(
      debounceTime(2500),
      distinctUntilChanged(),
    ).subscribe(styles => {
      this.store.dispatch(changeStyles({styles}));
    });
  }

}
