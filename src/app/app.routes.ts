import { Routes } from '@angular/router';
import { LibraryHomepageComponent } from './pages/library-homepage/library-homepage.component';
import { EditorialSelectionComponent } from './pages/editorial-selection/editorial-selection.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LibraryHomepageComponent,
  },
  {
    path: 'editorial-selection',
    component: EditorialSelectionComponent,
  },
  {
    path: 'categorie/:category',
    component: EditorialSelectionComponent,
  },
];
