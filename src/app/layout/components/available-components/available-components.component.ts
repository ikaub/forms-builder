import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

import { StyledComponentPortal } from '../../types/layout.types';
import { AppState } from '../../../types/app.types';
import { selectAvailableComponents } from '../../store/form.selectors';
import { PortalsService } from '../../services/portals.service';
import { remove } from '../../store/form.actions';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss'],
})
export class AvailableComponentsComponent implements OnInit {

  componentsList$!: Observable<StyledComponentPortal[]>;

  constructor(private store: Store<AppState>, private portalsService: PortalsService) {
  }

  ngOnInit(): void {
    this.componentsList$ = this.portalsService.getPortalsBySelector(selectAvailableComponents);
  }

  drop(event: CdkDragDrop<any>): void {
    this.store.dispatch(remove({componentIndex: event.previousIndex}));
  }
}
