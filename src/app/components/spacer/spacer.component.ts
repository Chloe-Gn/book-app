import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spacer',
  imports: [NgStyle],
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.scss',
})
export class SpacerComponent {
  height = input('');
}
