import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../types/app.types';
import {ComponentInterface} from '../../types/layout.types';
import {PortalsService} from '../../services/portals.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents$!: Observable<ComponentInterface[]>;

  constructor(private store: Store<AppState>, private portalsService: PortalsService) {
  }

  ngOnInit(): void {
    this.getSelectedComponents();
  }

  getSelectedComponents(): void {
    this.selectedComponents$ = this.portalsService.getSelectedComponents();
  }
}
