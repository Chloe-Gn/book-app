import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-my-list-page',
  imports: [TopBarComponent, NavBarComponent, NgStyle],
  templateUrl: './my-list-page.component.html',
  styleUrl: './my-list-page.component.scss',
})
export class MyListPageComponent {
  title: string = 'Ma liste';
}
