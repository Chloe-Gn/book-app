import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
  host: {
    '[style.marginTop]': 'computedMarginTop',
  },
})
export class LinkButtonComponent {
  buttonLabel = input<string>();
  marginTop = input<string>();

  get computedMarginTop(): string | undefined {
    return this.marginTop();
  }
}
