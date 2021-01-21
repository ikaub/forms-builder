import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {selectChosenComponent, selectGeneralStyles, selectSelectedComponents} from '../../store/form.selectors';
import {ComponentInterface, GeneralFormStyles, StyledComponentPortal, Styles} from '../../types/layout.types';
import {changeGeneralStyles, changeStyles} from '../../store/form.actions';
import {PortalsService} from '../../services/portals.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents$!: Observable<ComponentInterface[]>;
  generalStyles!: GeneralFormStyles;

  constructor(private store: Store<AppState>, private portalsService: PortalsService) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
    this.getGeneralStyles();
  }

  getSelectedComponents(): void {
    this.selectedComponents$ = this.portalsService.getSelectedComponents();
  }

  getGeneralStyles(): void {
    this.store.pipe(select(selectGeneralStyles)).subscribe(generalStyles => {
      this.generalStyles = {...generalStyles};
    });
  }

  changeGeneralStyles(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.generalStyles = {...this.generalStyles, [target.name]: target.value};
  }

  changeForm(): void {
    this.store.dispatch(changeGeneralStyles({generalStyles: this.generalStyles}));
  }
}
