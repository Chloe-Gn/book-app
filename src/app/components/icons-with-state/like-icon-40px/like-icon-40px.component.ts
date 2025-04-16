import { Component } from '@angular/core';
import {
  ICON_HEART_FILLED,
  ICON_HEART_OUTLINED,
} from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-like-icon-40px',
  imports: [],
  templateUrl: './like-icon-40px.component.html',
  styleUrl: './like-icon-40px.component.scss',
})
export class LikeIconComponent40px {
  heartOutlined: string = ICON_HEART_OUTLINED;
  heartFilled: string = ICON_HEART_FILLED;
}
