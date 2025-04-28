import { Routes } from '@angular/router';
import { LibraryHomepageComponent } from './pages/library-homepage/library-homepage.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MyListPageComponent } from './pages/my-list-page/my-list-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { LoggedoutHomePageComponent } from './pages/loggedout-home-page/loggedout-home-page.component';
import { ConnectionPageComponent } from './pages/connection-page/connection-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

//The order of routes is important because
//the Router uses a first-match wins strategy when matching routes
export const routes: Routes = [
  {
    path: 'recherche',
    component: SearchPageComponent,
  },
  {
    path: 'ma-liste',
    component: MyListPageComponent,
  },
  {
    path: 'log-in',
    component: ConnectionPageComponent,
  },
  {
    path: 'sign-up',
    component: SignupPageComponent,
  },
  {
    path: 'bibliotheque/:category',
    component: CategoryPageComponent,
  },
  {
    path: 'bibliotheque',
    component: LibraryHomepageComponent,
  },
  {
    path: 'livre/:pagePath',
    component: BookPageComponent,
  },
  {
    path: '',
    component: LoggedoutHomePageComponent,
  },
];
