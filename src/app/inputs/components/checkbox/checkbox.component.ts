import {Component, Inject, OnInit} from '@angular/core';
import {Styles, STYLES_DATA} from '../../../layout/types/layout.types';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) { }

  ngOnInit(): void {
  }

}
