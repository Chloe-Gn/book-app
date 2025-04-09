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
      path: '/categorie/nouveautes',
    },
    {
      id: 2,
      categoryName: 'romans',
      path: '/categorie/romans',
    },
    {
      id: 3,
      categoryName: 'thrillers',
      path: '/categorie/thrillers',
    },
    {
      id: 4,
      categoryName: 'bandes dessinées',
      path: '/categorie/bandes-dessinees',
    },
    {
      id: 5,
      categoryName: 'romans graphiques',
      path: '/categorie/romans-graphiques',
    },
    {
      id: 6,
      categoryName: 'essais',
      path: '/categorie/essais',
    },
    {
      id: 7,
      categoryName: 'non fiction',
      path: '/categorie/non-fiction',
    },
    {
      id: 8,
      categoryName: 'biographies',
      path: '/categorie/biographies',
    },
    {
      id: 9,
      categoryName: 'manuels scolaires',
      path: '/categorie/manuels-scolaires',
    },
    {
      id: 10,
      categoryName: 'religions',
      path: '/categorie/religions',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
