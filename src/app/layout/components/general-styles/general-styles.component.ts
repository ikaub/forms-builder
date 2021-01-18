import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormState} from '../../store/form.reducer';
import {FlatTreeControl} from '@angular/cdk/tree';

interface ExpandableComponentsTree {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-general-styles',
  templateUrl: './general-styles.component.html',
  styleUrls: ['./general-styles.component.scss']
})
export class GeneralStylesComponent implements OnInit {
  selectedComponents!: any[];

  constructor(private store: Store<{ form: FormState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.form.selectedComponents).subscribe(components => {
      this.selectedComponents = components;
      console.log(this.selectedComponents);
    });
  }

}
