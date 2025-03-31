import { Component, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [UpperCasePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  title = input('');
}
