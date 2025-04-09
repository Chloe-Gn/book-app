import { Component, input, output } from '@angular/core';
import { ICON_BOOK_OUTLINE } from '../../../../assets/icons/svg-paths/svg-paths';
import { NgClass } from '@angular/common';

//parent = navBar
// c'est le parent qui passe :
// l'icon path
// le label
// l'url de destination

//le navbar icon renvoie au parent:
// son state

@Component({
  selector: 'app-nav-bar-icon',
  imports: [NgClass],
  templateUrl: './nav-bar-icon.component.html',
  styleUrl: './nav-bar-icon.component.scss',
})
export class NavBarIconComponent {
  /*
  isActive = false;

  toggleActive(isActive: boolean): void {
    this.isActive = isActive;
    console.log('isActive yo');
  }

  */

  label = input('');
  icon = input('');
  routerLinkActive = input('');
}
