import {Component, Injector, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ComponentPortal} from '@angular/cdk/portal';
import {chooseComponent, drop} from '../../store/form.actions';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {GeneralFormStyles, StyledComponentPortal, STYLES_DATA} from '../../types/layout.types';
import {AppState} from '../../../types/app.types';
import {selectChosenComponent, selectGeneralStyles, selectSelectedComponents} from '../../store/form.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  selectedComponents!: StyledComponentPortal[];
  generalStyles!: GeneralFormStyles;
  chosenComponent!: number;

  constructor(private store: Store<AppState>, private injector: Injector) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getChosenComponent();
    this.getGeneralStyles();
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer.id !== event.container.id) {
      const props = {
        component: {
          component: event.previousContainer.data[event.previousIndex].component.component,
          styles: event.previousContainer.data[event.previousIndex].styles
        }
      };
      this.store.dispatch(drop(props));
    }
  }

  chooseComponent(index: number): void {
    this.store.dispatch(chooseComponent({componentIndex: index}));
  }

  getGeneralStyles(): void {
    this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = generalStyles;
    });
  }

  getChosenComponent(): void {
    this.store.pipe(select(selectChosenComponent)).subscribe(index => {
      this.chosenComponent = index;
    });
  }

  getSelectedComponents(): void {
    this.store.pipe(select(selectSelectedComponents)).subscribe(components => {
      this.selectedComponents = components.map(({component, styles}) => ({
        component: new ComponentPortal<any>(
          component,
          null,
          Injector.create({
            parent: this.injector,
            providers: [{
              provide: STYLES_DATA,
              useValue: styles,
            }],
          })),
        styles,
      }));
    });
  }
}
