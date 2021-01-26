import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-unified-builder',
  templateUrl: './unified-builder.component.html',
  styleUrls: ['./unified-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnifiedBuilderComponent {
  constructor() {
  }
}
