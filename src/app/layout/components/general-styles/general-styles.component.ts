import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {selectChosenComponent, selectSelectedComponents} from '../../store/form.selectors';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents!: any[];
  chosenComponent!: number | null;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getChosenComponent();
  }

  getSelectedComponents(): void {
    this.store.pipe(select(selectSelectedComponents)).subscribe(components => {
      this.selectedComponents = components;
    });
  }

  getChosenComponent(): void {
    this.store.pipe(select(selectChosenComponent)).subscribe(index => {
      this.chosenComponent = index;
    });
  }
}
