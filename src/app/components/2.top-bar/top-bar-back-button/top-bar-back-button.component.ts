import { Component } from '@angular/core';
import { ICON_ARROW_LEFT } from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-top-bar-back-button',
  imports: [],
  templateUrl: './top-bar-back-button.component.html',
  styleUrl: './top-bar-back-button.component.scss',
})
export class TopBarBackButtonComponent {
  icon: string = ICON_ARROW_LEFT;
}
