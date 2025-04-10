import { Component, input, OnChanges, output } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-search-page',
  imports: [TopBarComponent, NavBarComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {}
