import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [NgStyle],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  buttonLabel = input<string>();
  width = input<string | undefined>();

  isFitContent(): boolean {
    return this.width() === 'fit-content';
  }
}
