import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [NgStyle],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
})
export class SecondaryButtonComponent {
  label = input<string>();
  width = input<string | undefined>();

  isFitContent(): boolean {
    return this.width() === 'fit-content';
  }
}
