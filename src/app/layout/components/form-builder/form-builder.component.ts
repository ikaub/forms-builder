import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {chooseComponent, drop, swapComponents} from '../../store/form.actions';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {GeneralFormStyles, StyledComponentPortal} from '../../types/layout.types';
import {AppState} from '../../../types/app.types';
import {selectGeneralStyles, selectSelectedComponents} from '../../store/form.selectors';
import {PortalsService} from '../../services/portals.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  selectedComponents$!: Observable<StyledComponentPortal[]>;
  generalStyles!: GeneralFormStyles;

  constructor(private store: Store<AppState>, private portalsService: PortalsService) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getGeneralStyles();
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer.id !== event.container.id) {
      const props = {
        component: {
          component: event.previousContainer.data[event.previousIndex].component.component,
          styles: event.previousContainer.data[event.previousIndex].styles
        },
        index: event.currentIndex,
      };
      this.store.dispatch(drop(props));
    } else {
      this.store.dispatch(swapComponents({previousIndex: event.previousIndex, currentIndex: event.currentIndex}));
    }
  }

  chooseComponent(index: number): void {
    this.store.dispatch(chooseComponent({componentIndex: index}));
  }

  getSelectedComponents(): void {
    this.selectedComponents$ = this.portalsService.getPortalsBySelector(selectSelectedComponents);
  }

  getGeneralStyles(): void {
    this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = generalStyles;
    });
  }
}
