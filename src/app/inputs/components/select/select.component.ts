import { Component, Inject, OnInit } from '@angular/core';

import { Styles, STYLES_DATA } from '../../../layout/types/layout.types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) {
  }

  ngOnInit(): void {
  }

}
