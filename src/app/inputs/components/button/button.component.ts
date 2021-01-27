import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { Styles, STYLES_DATA } from 'src/app/layout/types/layout.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) {
  }

  ngOnInit(): void {
  }

}
