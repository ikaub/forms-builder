import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { Styles, STYLES_DATA } from '../../../layout/types/layout.types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) {
  }

  ngOnInit(): void {
  }

}
