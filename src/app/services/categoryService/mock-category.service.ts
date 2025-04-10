import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class MockCategoryService {
  private categories: Category[] = [
    {
      id: 1,
      categoryName: 'nouveautés',
      path: '/bibliotheque/nouveautes',
    },
    {
      id: 2,
      categoryName: 'romans',
      path: '/bibliotheque/romans',
    },
    {
      id: 3,
      categoryName: 'thrillers',
      path: '/bibliotheque/thrillers',
    },
    {
      id: 4,
      categoryName: 'bandes dessinées',
      path: '/bibliotheque/bandes-dessinees',
    },
    {
      id: 5,
      categoryName: 'romans graphiques',
      path: '/bibliotheque/romans-graphiques',
    },
    {
      id: 6,
      categoryName: 'essais',
      path: '/bibliotheque/essais',
    },
    {
      id: 7,
      categoryName: 'non fiction',
      path: '/bibliotheque/non-fiction',
    },
    {
      id: 8,
      categoryName: 'biographies',
      path: '/bibliotheque/biographies',
    },
    {
      id: 9,
      categoryName: 'manuels scolaires',
      path: '/bibliotheque/manuels-scolaires',
    },
    {
      id: 10,
      categoryName: 'religions',
      path: '/bibliotheque/religions',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
