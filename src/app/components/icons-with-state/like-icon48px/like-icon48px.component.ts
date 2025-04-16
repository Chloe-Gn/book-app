import { Component } from '@angular/core';
import {
  ICON_HEART_FILLED,
  ICON_HEART_OUTLINED,
} from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-like-icon-48px',
  imports: [],
  templateUrl: './like-icon48px.component.html',
  styleUrl: './like-icon48px.component.scss',
})
export class LikeIcon48pxComponent {
  heartOutlined: string = ICON_HEART_OUTLINED;
  heartFilled: string = ICON_HEART_FILLED;
}
