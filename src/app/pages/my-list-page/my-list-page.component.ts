import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/1.nav-bar/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../components/2.top-bar/top-bar/top-bar.component';

@Component({
  selector: 'app-my-list-page',
  imports: [TopBarComponent, NavBarComponent],
  templateUrl: './my-list-page.component.html',
  styleUrl: './my-list-page.component.scss',
})
export class MyListPageComponent {
  myListTitle: string = 'Ma liste';
}
