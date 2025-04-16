import { TestBed } from '@angular/core/testing';
import { MockBooksService } from './mock-books.service';
import { Book } from '../../models/book.model';

describe('BookService', () => {
  let service: MockBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBooksService);
  });

  it('should return the correct book by ID', () => {
    service['allBooks'] = [
      {
        id: 1,
        bookPagePath: '/livre/les-piliers-de-la-mer',
        bookImagePath: 'piliers-de-la-mer.jpg',
        title: 'Les piliers de la mer',
        authorID: 1,
        authorName: 'Sylvain Tesson',
        firstPublished: new Date('2025-04-02'),
        averageRating: 0.4,
        categories: [
          {
            id: 1,
            categoryNamePlural: 'nouveautés',
            categoryNameSingular: 'nouveauté',
            path: 'nouveautes',
          },
          {
            id: 7,
            categoryNamePlural: 'non fiction',
            categoryNameSingular: 'non fiction',
            path: 'non-fiction',
          },
          {
            id: 10,
            categoryNamePlural: 'religions',
            categoryNameSingular: 'religion',
            path: 'religions',
          },
        ],
      } as Book,
      {
        id: 2,
        bookPagePath: '/livre/club-loney',
        bookImagePath: 'club-lonely.jpg',
        title: 'Club lonely',
        authorID: 7,
        authorName: 'Pelle Forshed',
        firstPublished: new Date('2024-12-02'),
        averageRating: 3.7,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 9,
            categoryNamePlural: 'manuels scolaires',
            categoryNameSingular: 'manuel scolaire',
            path: 'manuels-scolaires',
          },
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
        ],
      } as Book,
      {
        id: 3,
        bookPagePath: '/livre/cometa',
        bookImagePath: 'cometa.jpg',
        title: 'Cometa',
        authorID: 3,
        authorName: 'Elie Huault',
        firstPublished: new Date('2022-11-01'),
        averageRating: 2.4,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 8,
            categoryNamePlural: 'biographies',
            categoryNameSingular: 'biographie',
            path: 'biographies',
          },
          {
            id: 5,
            categoryNamePlural: 'romans graphiques',
            categoryNameSingular: 'roman graphique',
            path: 'romans-graphiques',
          },
        ],
      } as Book,
      {
        id: 4,
        bookPagePath: '/livre/gagner-sa-patee',
        bookImagePath: 'gagner-sa-patee.jpg',
        title: 'Gagner sa pâtée',
        authorID: 4,
        authorName: 'Kathy Lam',
        firstPublished: new Date('2023-08-02'),
        averageRating: 4.5,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 7,
            categoryNamePlural: 'non fiction',
            categoryNameSingular: 'non fiction',
            path: 'non-fiction',
          },
          {
            id: 3,
            categoryNamePlural: 'thrillers',
            categoryNameSingular: 'thriller',
            path: 'thrillers',
          },
        ],
      } as Book,
      {
        id: 5,
        bookPagePath: '/livre/la-fin-du-sens',
        bookImagePath: 'la-fin-du-sens.jpg',
        title: 'La fin du sens',
        authorID: 5,
        authorName: 'Ami Inintéressant & Rémi Lascault',
        firstPublished: new Date('1997-01-01'),
        averageRating: 3.2,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 9,
            categoryNamePlural: 'manuels scolaires',
            categoryNameSingular: 'manuel scolaire',
            path: 'manuels-scolaires',
          },
          {
            id: 7,
            categoryNamePlural: 'non fiction',
            categoryNameSingular: 'non fiction',
            path: 'non-fiction',
          },
        ],
      } as Book,
      {
        id: 6,
        bookPagePath: '/livre/moon-2',
        bookImagePath: 'moon-2.jpg',
        title: 'Moon 2',
        authorID: 6,
        authorName: 'Stephan Louvres & Johan Vandevelde',
        firstPublished: new Date('2021-07-09'),
        averageRating: 2,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 10,
            categoryNamePlural: 'religions',
            categoryNameSingular: 'religion',
            path: 'religions',
          },
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
        ],
      } as Book,
      {
        id: 7,
        bookPagePath: '/livre/strange-fruit',
        bookImagePath: 'strange-fruit.jpg',
        title: 'Strange fruit',
        authorID: 2,
        authorName: 'A. Dan & Hazard',
        firstPublished: new Date('2025-04-04'),
        averageRating: 5,
        categories: [
          {
            id: 1,
            categoryNamePlural: 'nouveautés',
            categoryNameSingular: 'nouveauté',
            path: 'nouveautes',
          },
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 3,
            categoryNamePlural: 'thrillers',
            categoryNameSingular: 'thriller',
            path: 'thrillers',
          },
        ],
      } as Book,
      {
        id: 8,
        bookPagePath: '/livre/l-annee-du-teckel',
        bookImagePath: 'annee-du-teckel.jpg',
        title: "L'année du teckel",
        authorID: 8,
        authorName: 'Pierre Mikaïloff',
        firstPublished: new Date('2025-02-02'),
        averageRating: 3.2,
        categories: [
          {
            id: 1,
            categoryNamePlural: 'nouveautés',
            categoryNameSingular: 'nouveauté',
            path: 'nouveautes',
          },
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
          {
            id: 10,
            categoryNamePlural: 'religions',
            categoryNameSingular: 'religion',
            path: 'religions',
          },
        ],
      } as Book,
      {
        id: 9,
        bookPagePath: '/livre/hope',
        bookImagePath: 'hope.jpg',
        title: 'Hope',
        authorID: 9,
        authorName: 'Andrew Ridker',
        firstPublished: new Date('2025-01-01'),
        averageRating: 5,
        categories: [
          {
            id: 1,
            categoryNamePlural: 'nouveautés',
            categoryNameSingular: 'nouveauté',
            path: 'nouveautes',
          },
          {
            id: 8,
            categoryNamePlural: 'biographies',
            categoryNameSingular: 'biographie',
            path: 'biographies',
          },
          {
            id: 5,
            categoryNamePlural: 'romans graphiques',
            categoryNameSingular: 'roman graphique',
            path: 'romans-graphiques',
          },
        ],
      } as Book,
      {
        id: 10,
        bookPagePath: '/livre/le-nauffrage-du-titanic',
        bookImagePath: 'le-nauffrage-du-titanic.jpg',
        title: 'Le nauffrage du Titanic',
        authorID: 10,
        authorName: 'Joseph Conrad',
        firstPublished: new Date('1954-08-03'),
        averageRating: 3.5,
        categories: [
          {
            id: 7,
            categoryNamePlural: 'non fiction',
            categoryNameSingular: 'non fiction',
            path: 'non-fiction',
          },
          {
            id: 3,
            categoryNamePlural: 'thrillers',
            categoryNameSingular: 'thriller',
            path: 'thrillers',
          },
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
        ],
      } as Book,
      {
        id: 11,
        bookPagePath: '/livre/les-eclaireuses',
        bookImagePath: 'les-eclaireuses.jpg',
        title: 'Les éclaireuses',
        authorID: 11,
        authorName: 'Laurent Koessler',
        firstPublished: new Date('2025-01-04'),
        averageRating: 3,
        categories: [
          {
            id: 1,
            categoryNamePlural: 'nouveautés',
            categoryNameSingular: 'nouveauté',
            path: 'nouveautes',
          },
          {
            id: 8,
            categoryNamePlural: 'biographies',
            categoryNameSingular: 'biographie',
            path: 'biographies',
          },
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
        ],
      } as Book,
      {
        id: 12,
        bookPagePath: '/livre/pamoja',
        bookImagePath: 'pamoja.jpg',
        title: 'Pamoja',
        authorID: 12,
        authorName: 'Jérome Lafargue',
        firstPublished: new Date('2011-11-26'),
        averageRating: 2.6,
        categories: [
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
          {
            id: 9,
            categoryNamePlural: 'manuels scolaires',
            categoryNameSingular: 'manuel scolaire',
            path: 'manuels-scolaires',
          },
          {
            id: 8,
            categoryNamePlural: 'biographies',
            categoryNameSingular: 'biographie',
            path: 'biographies',
          },
        ],
      } as Book,
      {
        id: 13,
        bookPagePath: '/livre/1984',
        bookImagePath: '1984.jpg',
        title: '1984',
        authorID: 13,
        authorName: 'George Orwell',
        firstPublished: new Date('1949-02-02'),
        averageRating: 5,
        categories: [
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
          {
            id: 3,
            categoryNamePlural: 'thrillers',
            categoryNameSingular: 'thriller',
            path: 'thrillers',
          },
        ],
      } as Book,
      {
        id: 14,
        bookPagePath: '/livre/l-attrape-coeur',
        bookImagePath: 'attrape-coeur.jpg',
        title: "L'attrape-coeurs",
        authorID: 14,
        authorName: 'J.D. Salinger',
        firstPublished: new Date('1951-07-16'),
        averageRating: 3,
        categories: [
          {
            id: 10,
            categoryNamePlural: 'religions',
            categoryNameSingular: 'religion',
            path: 'religions',
          },
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
          {
            id: 3,
            categoryNamePlural: 'thrillers',
            categoryNameSingular: 'thriller',
            path: 'thrillers',
          },
        ],
      } as Book,
      {
        id: 15,
        bookPagePath: '/livre/gatsby',
        bookImagePath: 'gatsby.jpg',
        title: 'Gatsby le magnifique',
        authorID: 15,
        authorName: 'Francis Scott Fitzgerald',
        firstPublished: new Date('1925-09-04 '),
        averageRating: 3.4,
        categories: [
          {
            id: 2,
            categoryNamePlural: 'romans',
            categoryNameSingular: 'roman',
            path: 'romans',
          },
          {
            id: 8,
            categoryNamePlural: 'biographies',
            categoryNameSingular: 'biographie',
            path: 'biographies',
          },
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
        ],
      } as Book,
      {
        id: 16,
        bookPagePath:
          '//livre/le-seigneur-des-anneaux-la-communaute-de-l-anneau',
        bookImagePath: 'seigneur-anneaux-communaute.jpg',
        title: "Le seigneur des anneaux : la communauté de l'anneau",
        authorID: 16,
        authorName: 'J. R. R. Tolkien',
        firstPublished: new Date('1954-09-09'),
        averageRating: 4.6,
        categories: [
          {
            id: 5,
            categoryNamePlural: 'romans graphiques',
            categoryNameSingular: 'roman graphique',
            path: 'romans-graphiques',
          },
          {
            id: 10,
            categoryNamePlural: 'religions',
            categoryNameSingular: 'religion',
            path: 'religions',
          },
          {
            id: 9,
            categoryNamePlural: 'manuels scolaires',
            categoryNameSingular: 'manuel scolaire',
            path: 'manuels-scolaires',
          },
        ],
      } as Book,
    ];

    const result = service.getBookById(2);

    expect(result).toEqual({
      id: 2,
      bookPagePath: '/livre/club-loney',
      bookImagePath: 'club-lonely.jpg',
      title: 'Club lonely',
      authorID: 7,
      authorName: 'Pelle Forshed',
      firstPublished: new Date('2024-12-02'),
      averageRating: 3.7,
      categories: [
        {
          id: 4,
          categoryNamePlural: 'bandes dessinées',
          categoryNameSingular: 'bande dessinée',
          path: 'bandes-dessinees',
        },
        {
          id: 9,
          categoryNamePlural: 'manuels scolaires',
          categoryNameSingular: 'manuel scolaire',
          path: 'manuels-scolaires',
        },
        {
          id: 6,
          categoryNamePlural: 'essais',
          categoryNameSingular: 'essai',
          path: 'essais',
        },
      ],
    } as Book);
  });

  it('should return an empty Book if ID not found', () => {
    service['allBooks'] = [
      {
        id: 2,
        bookPagePath: '/livre/club-loney',
        bookImagePath: 'club-lonely.jpg',
        title: 'Club lonely',
        authorID: 7,
        authorName: 'Pelle Forshed',
        firstPublished: new Date('2024-12-02'),
        averageRating: 3.7,
        categories: [
          {
            id: 4,
            categoryNamePlural: 'bandes dessinées',
            categoryNameSingular: 'bande dessinée',
            path: 'bandes-dessinees',
          },
          {
            id: 9,
            categoryNamePlural: 'manuels scolaires',
            categoryNameSingular: 'manuel scolaire',
            path: 'manuels-scolaires',
          },
          {
            id: 6,
            categoryNamePlural: 'essais',
            categoryNameSingular: 'essai',
            path: 'essais',
          },
        ],
      } as Book,
    ];

    const result = service.getBookById(99);

    expect(result).toEqual({} as Book);
  });
});
