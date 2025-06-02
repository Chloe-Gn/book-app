import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';

@Component({
  selector: 'app-search-page',
  imports: [TopBarComponent, NavBarComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  title = 'recherche';
}
