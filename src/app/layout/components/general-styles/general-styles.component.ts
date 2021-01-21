import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {selectChosenComponent, selectSelectedComponents} from '../../store/form.selectors';
import {StyledComponentPortal, Styles} from '../../types/layout.types';
import {changeStyles} from '../../store/form.actions';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents!: StyledComponentPortal[];
  chosenComponent!: number;
  styles!: Styles;

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
      this.styles = this.selectedComponents[this.chosenComponent]?.styles;
    });
  }

  changeStyles(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.styles = {...this.styles, [target.name]: target.value};
  }

  changeComponent(): void {
    this.store.dispatch(changeStyles({styles: this.styles}));
  }
}
