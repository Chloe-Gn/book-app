import { Routes } from '@angular/router';
import { LibraryHomepageComponent } from './pages/library-homepage/library-homepage.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MyListPageComponent } from './pages/my-list-page/my-list-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

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
    path: 'categorie/:category',
    component: CategoryPageComponent,
  },
  {
    path: '',
    component: LibraryHomepageComponent,
  },
];
