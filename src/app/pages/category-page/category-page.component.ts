import { Component, inject, OnInit } from '@angular/core';
import { TopBarComponent } from '../../components/2.top-bar/top-bar/top-bar.component';
import { NavBarComponent } from '../../components/1.nav-bar/nav-bar/nav-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TopBarBackButtonComponent } from '../../components/2.top-bar/top-bar-back-button/top-bar-back-button.component';

@Component({
  selector: 'app-category-page',
  imports: [
    TopBarComponent,
    NavBarComponent,
    RouterLink,
    TopBarBackButtonComponent,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent {
  title: string = '';

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const state = history.state as { title: string };
    console.log(state);
    this.title = state?.title || 'Sélection';
    console.log(this.title);
  }
}
