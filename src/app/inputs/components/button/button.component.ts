import {Component, Inject, OnInit} from '@angular/core';
import {Styles, STYLES_DATA} from '../../../layout/types/layout.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) { }

  ngOnInit(): void {
  }

}
