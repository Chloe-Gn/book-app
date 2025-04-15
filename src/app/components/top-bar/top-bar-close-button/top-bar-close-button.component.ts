import { Component } from '@angular/core';
import { ICON_CLOSE_CROSS } from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-top-bar-close-button',
  imports: [],
  templateUrl: './top-bar-close-button.component.html',
  styleUrl: './top-bar-close-button.component.scss',
})
export class TopBarCloseButtonComponent {
  icon: string = ICON_CLOSE_CROSS;
}
