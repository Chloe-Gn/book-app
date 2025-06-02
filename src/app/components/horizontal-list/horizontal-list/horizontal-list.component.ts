import { Component, input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  imports: [],
  templateUrl: './horizontal-list.component.html',
  styleUrl: './horizontal-list.component.scss',
  host: {
    '[style.padding]': 'computedPadding',
  },
})
export class HorizontalListComponent {
  padding = input<string>();

  get computedPadding() {
    return this.padding();
  }
}
