import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class MockCategoryService {
  private categories: Category[] = [
    {
      id: 1,
      categoryNamePlural: 'nouveautés',
      categoryNameSingular: 'nouveauté',
      path: '/bibliotheque/nouveautes',
    },
    {
      id: 2,
      categoryNamePlural: 'romans',
      categoryNameSingular: 'roman',
      path: '/bibliotheque/romans',
    },
    {
      id: 3,
      categoryNamePlural: 'thrillers',
      categoryNameSingular: 'thriller',
      path: '/bibliotheque/thrillers',
    },
    {
      id: 4,
      categoryNamePlural: 'bandes dessinées',
      categoryNameSingular: 'bande dessinée',
      path: '/bibliotheque/bandes-dessinees',
    },
    {
      id: 5,
      categoryNamePlural: 'romans graphiques',
      categoryNameSingular: 'roman graphique',
      path: '/bibliotheque/romans-graphiques',
    },
    {
      id: 6,
      categoryNamePlural: 'essais',
      categoryNameSingular: 'essai',
      path: '/bibliotheque/essais',
    },
    {
      id: 7,
      categoryNamePlural: 'non fiction',
      categoryNameSingular: 'non fiction',
      path: '/bibliotheque/non-fiction',
    },
    {
      id: 8,
      categoryNamePlural: 'biographies',
      categoryNameSingular: 'biographie',
      path: '/bibliotheque/biographies',
    },
    {
      id: 9,
      categoryNamePlural: 'manuels scolaires',
      categoryNameSingular: 'manuel scolaire',
      path: '/bibliotheque/manuels-scolaires',
    },
    {
      id: 10,
      categoryNamePlural: 'religions',
      categoryNameSingular: 'religion',
      path: '/bibliotheque/religions',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
