import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/types/app.types';
import { ComponentInterface } from 'src/app/layout/types/layout.types';
import { selectSelectedComponents } from 'src/app/layout/store/form.selectors';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss'],
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents$!: Observable<ComponentInterface[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
  }

  getSelectedComponents(): void {
    this.selectedComponents$ = this.store.pipe(select(selectSelectedComponents));
  }
}
