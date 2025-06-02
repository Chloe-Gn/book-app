import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [NgStyle],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
  host: {
    '[style.width]': 'computedWidth',
    '[style.marginTop]': 'computedMarginTop',
  },
})
export class SecondaryButtonComponent {
  buttonLabel = input<string>();
  width = input<string>();
  marginTop = input<string>();

  get computedWidth(): string | undefined {
    return this.width();
  }

  get computedMarginTop(): string | undefined {
    return this.marginTop();
  }
}
