import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ICON_AVATAR_LIST_OUTLINE,
  ICON_BOOK_OUTLINE,
  ICON_SEARCH,
} from '../../../../assets/icons/svg-paths/svg-paths';
import { NavBarIconComponent } from '../nav-bar-icon/nav-bar-icon.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NavBarIconComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  bookIcon: string = ICON_BOOK_OUTLINE;
  magnifyingGlassIcon: string = ICON_SEARCH;
  myListIcon: string = ICON_AVATAR_LIST_OUTLINE;
}
