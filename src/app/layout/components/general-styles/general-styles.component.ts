import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';

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
    this.store.select(state => state.form.selectedComponents).subscribe(components => {
      this.selectedComponents = components;
    });
    this.store.select(state => state.form.chosenComponent).subscribe(index => {
      this.chosenComponent = index;
    });
  }

}
