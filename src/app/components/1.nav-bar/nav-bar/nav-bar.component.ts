import { Component, input } from '@angular/core';
import { NavBarIconComponent } from '../nav-bar-icon/nav-bar-icon.component';
import {
  ICON_AVATAR_LIST_OUTLINE,
  ICON_BOOK_OUTLINE,
  ICON_SEARCH,
} from '../../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-nav-bar',
  imports: [NavBarIconComponent],
  template: `<div class="container">
    <app-nav-bar-icon
      [label]="'Bibliothèque'"
      [icon]="bookIcon"
      [destination]="''"
    ></app-nav-bar-icon>
    <app-nav-bar-icon
      [label]="'Recherche'"
      [icon]="magnifyingGlassIcon"
      [destination]="''"
    ></app-nav-bar-icon>
    <app-nav-bar-icon
      [label]="'Ma liste'"
      [icon]="myListIcon"
      [destination]="''"
    ></app-nav-bar-icon>
  </div>`,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  bookIcon: string = ICON_BOOK_OUTLINE;
  magnifyingGlassIcon: string = ICON_SEARCH;
  myListIcon: string = ICON_AVATAR_LIST_OUTLINE;
}
