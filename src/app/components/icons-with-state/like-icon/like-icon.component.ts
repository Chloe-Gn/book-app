import { Component } from '@angular/core';
import {
  ICON_HEART_FILLED,
  ICON_HEART_OUTLINED,
} from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-like-icon',
  imports: [],
  templateUrl: './like-icon.component.html',
  styleUrl: './like-icon.component.scss',
})
export class LikeIconComponent {
  heartOutlined: string = ICON_HEART_OUTLINED;
  heartFilled: string = ICON_HEART_FILLED;
}
