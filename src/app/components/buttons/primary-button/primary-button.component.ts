import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [NgStyle],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  host: {
    '[style.width]': 'computedWidth',
    '[style.marginTop]': 'computedMarginTop',
  },
})
export class PrimaryButtonComponent {
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
