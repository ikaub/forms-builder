import {Component, Inject, OnInit} from '@angular/core';
import {Styles, STYLES_DATA} from '../../../layout/types/layout.types';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  constructor(@Inject(STYLES_DATA) public styles: Styles) { }

  ngOnInit(): void {
  }

}
