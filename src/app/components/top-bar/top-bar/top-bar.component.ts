import { Component, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [NgStyle, UpperCasePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  title = input<string>();
  bgColor = input<string>();
  titleColor = input<string>();
  fontFamily = input<string>();
}
