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
      path: 'nouveautes',
    },
    {
      id: 2,
      categoryName: 'romans',
      path: 'romans',
    },
    {
      id: 3,
      categoryName: 'thrillers',
      path: 'thrillers',
    },
    {
      id: 4,
      categoryName: 'bandes dessinées',
      path: 'bandes-dessinees',
    },
    {
      id: 5,
      categoryName: 'romans graphiques',
      path: 'romans-graphiques',
    },
    {
      id: 6,
      categoryName: 'essais',
      path: 'essais',
    },
    {
      id: 7,
      categoryName: 'non fiction',
      path: 'non-fiction',
    },
    {
      id: 8,
      categoryName: 'biographies',
      path: 'biographies',
    },
    {
      id: 9,
      categoryName: 'manuels scolaires',
      path: 'manuels-scolaires',
    },
    {
      id: 10,
      categoryName: 'religions',
      path: 'religions',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
