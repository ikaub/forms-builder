import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {selectChosenComponent, selectGeneralStyles, selectSelectedComponents} from '../../store/form.selectors';
import {GeneralFormStyles, StyledComponentPortal, Styles} from '../../types/layout.types';
import {changeGeneralStyles, changeStyles} from '../../store/form.actions';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents!: StyledComponentPortal[];
  generalStyles!: GeneralFormStyles;
  chosenComponent!: number;
  styles!: Styles;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getChosenComponent();
    this.getGeneralStyles();
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

  getGeneralStyles(): void {
    this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = {...generalStyles};
    });
  }

  changeStyles(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.styles = {...this.styles, [target.name]: target.value};
  }

  changeGeneralStyles(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.generalStyles = {...this.generalStyles, [target.name]: target.value};
  }

  changeComponent(): void {
    this.store.dispatch(changeStyles({styles: this.styles, componentIndex: this.chosenComponent}));
  }

  changeForm(): void {
    this.store.dispatch(changeGeneralStyles({generalStyles: this.generalStyles}));
  }
}
