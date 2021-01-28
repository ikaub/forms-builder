import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { STYLES_DATA } from 'src/app/layout/types/layout.types';
import { Styles } from 'src/app/core/form/store';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) {
  }

  ngOnInit(): void {
  }

}
