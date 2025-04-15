import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Genre } from '../../utils/genre';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class MockBooksService {
  allBooks: Book[] = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
    },
    {
      id: 6,
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
    },
    {
      id: 7,
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
    },
    {
      id: 8,
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
    },
    {
      id: 9,
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
    },
    {
      id: 10,
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
    },
    {
      id: 11,
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
    },
    {
      id: 12,
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
    },
    {
      id: 13,
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
    },
    {
      id: 14,
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
    },
    {
      id: 15,
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
    },
    {
      id: 16,
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
    },
  ];

  /*
  getBooksByCategory(id: number) {
    let filteredBooks = this.allBooks.filter((book) =>
      book.categories.some((cat) => cat.id === id)
    );
    console.log(filteredBooks);
    return filteredBooks;
  }

  /*
  allBooks: Book[] = [
    {
      id: 1,
      bookImagePath: '1984.jpg',
      title: "Sapiens: Une brève histoire de l'humanité",
      authorID: 1,
      authorName: 'Yuval Noah Harari',
      firstPublished: new Date('2011-01-01'),
      averageRating: 0.7,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
      ],
    },
    {
      id: 2,
      bookImagePath: 'attrape-coeur.jpg',
      title: 'Le Deuxième Sexe',
      authorID: 2,
      authorName: 'Simone de Beauvoir',
      firstPublished: new Date('1949-01-01'),
      averageRating: 4.5,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
    },
    {
      id: 3,
      bookImagePath: 'gatsby.jpg',
      title: 'Une brève histoire de presque tout',
      authorID: 3,
      authorName: 'Bill Bryson',
      firstPublished: new Date('2003-06-01'),
      averageRating: 1.6,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
    },
    {
      id: 4,
      bookImagePath: 'seigneur-anneaux-communaute.jpg',
      title: "L'Histoire de la Seconde Guerre mondiale",
      authorID: 4,
      authorName: 'Winston Churchill',
      firstPublished: new Date('1948-01-01'),
      averageRating: 4.8,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
    },
    {
      id: 5,
      bookImagePath: 'harry-potter-ecole-sorciers.jpg',
      title: 'La structure des révolutions scientifiques',
      authorID: 5,
      authorName: 'Thomas S. Kuhn',
      firstPublished: new Date('1962-01-01'),
      averageRating: 4.4,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
      ],
    },
    {
      id: 6,
      bookImagePath: 'hobbit.jpg',
      title: "L'origine des espèces",
      authorID: 6,
      authorName: 'Charles Darwin',
      firstPublished: new Date('1859-11-24'),
      averageRating: 4.8,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
    },
    {
      id: 7,
      bookImagePath: 'meilleur-des-mondes.jpg',
      title: "Les Origines de la famille, de la propriété privée et de l'État",
      authorID: 7,
      authorName: 'Friedrich Engels',
      firstPublished: new Date('1884-01-01'),
      averageRating: 2.3,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
      ],
    },
    {
      id: 8,
      bookImagePath: 'moby-dick.jpg',
      title: "L'Interprétation des rêves",
      authorID: 8,
      authorName: 'Sigmund Freud',
      firstPublished: new Date('1900-01-01'),
      averageRating: 4.6,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
        { id: 5, categoryName: 'SelfHelp', path: 'self-help' },
      ],
    },
    {
      id: 9,
      bookImagePath: 'oiseau-moqueur.jpg',
      title: "La Genèse de l'idée de l'État",
      authorID: 9,
      authorName: 'Max Weber',
      firstPublished: new Date('1919-01-01'),
      averageRating: 4.5,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 6, categoryName: 'PoliticalScience', path: 'political-science' },
      ],
    },
    {
      id: 10,
      bookImagePath: 'orgueil-et-prejuges.jpg',
      title: 'La société industrielle et son avenir',
      authorID: 10,
      authorName: 'Antoine Cournot',
      firstPublished: new Date('1838-01-01'),
      averageRating: 4.2,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 7, categoryName: 'Economics', path: 'economics' },
      ],
    },
  ];

  //Objects arrays for books

  // httpclient returns observables

  /*

  nonFictionBooks: Book[] = [
    {
      id: 1,
      bookImagePath: '1984.jpg',
      title: "Sapiens: Une brève histoire de l'humanité",
      authorID: 1,
      authorName: 'Yuval Noah Harari',
      firstPublished: new Date('2011-01-01'),
      averageRating: 0.7,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
      ],
      comments: [
        {
          id: 1,
          bookId: 1,
          userId: 1,
          userName: 'Alice',
          rating: 5,
          content:
            "Un livre fascinant qui offre une perspective incroyable sur l'évolution de l'humanité.",
        },
        {
          id: 2,
          bookId: 1,
          userId: 2,
          userName: 'Bob',
          rating: 4,
          content: 'Très intéressant, bien que parfois un peu dense à lire.',
        },
        {
          id: 3,
          bookId: 1,
          userId: 3,
          userName: 'Clara',
          rating: 5,
          content:
            "Une lecture essentielle pour comprendre notre passé et notre avenir en tant qu'espèce.",
        },
        {
          id: 4,
          bookId: 1,
          userId: 4,
          userName: 'David',
          rating: 4,
          content:
            'Bien écrit, mais certains passages sont difficiles à suivre.',
        },
        {
          id: 5,
          bookId: 1,
          userId: 5,
          userName: 'Eva',
          rating: 5,
          content:
            "Ce livre m'a ouvert les yeux sur des aspects de l'histoire que je ne connaissais pas.",
        },
      ],
    },
    {
      id: 2,
      bookImagePath: 'attrape-coeur.jpg',
      title: 'Le Deuxième Sexe',
      authorID: 2,
      authorName: 'Simone de Beauvoir',
      firstPublished: new Date('1949-01-01'),
      averageRating: 4.5,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
      comments: [
        {
          id: 6,
          bookId: 2,
          userId: 6,
          userName: 'François',
          rating: 4,
          content:
            'Un livre incontournable pour comprendre la place de la femme dans la société.',
        },
        {
          id: 7,
          bookId: 2,
          userId: 7,
          userName: 'Géraldine',
          rating: 5,
          content:
            "Un ouvrage révolutionnaire qui m'a fait réfléchir profondément sur la condition féminine.",
        },
        {
          id: 8,
          bookId: 2,
          userId: 8,
          userName: 'Hugo',
          rating: 3,
          content:
            'Bien que très important historiquement, il est parfois trop théorique et difficile à suivre.',
        },
        {
          id: 9,
          bookId: 2,
          userId: 9,
          userName: 'Isabelle',
          rating: 5,
          content:
            "Un livre qui reste d'actualité, bien qu'il date de plusieurs décennies.",
        },
        {
          id: 10,
          bookId: 2,
          userId: 10,
          userName: 'Jean',
          rating: 4,
          content: 'Très pertinent, mais un peu long à certains endroits.',
        },
      ],
    },
    {
      id: 3,
      bookImagePath: 'gatsby.jpg',
      title: 'Une brève histoire de presque tout',
      authorID: 3,
      authorName: 'Bill Bryson',
      firstPublished: new Date('2003-06-01'),
      averageRating: 1.6,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
      comments: [
        {
          id: 11,
          bookId: 3,
          userId: 11,
          userName: 'Louis',
          rating: 5,
          content:
            'Un ouvrage incroyablement accessible qui explique des concepts scientifiques complexes de manière simple.',
        },
        {
          id: 12,
          bookId: 3,
          userId: 12,
          userName: 'Marie',
          rating: 4,
          content:
            'Un livre fascinant mais parfois un peu trop simpliste sur certains sujets.',
        },
        {
          id: 13,
          bookId: 3,
          userId: 13,
          userName: 'Nicolas',
          rating: 5,
          content:
            'Une lecture merveilleuse qui mêle science et histoire. Très enrichissant!',
        },
        {
          id: 14,
          bookId: 3,
          userId: 14,
          userName: 'Olivia',
          rating: 4,
          content:
            'Excellente introduction à des concepts scientifiques pour les néophytes.',
        },
        {
          id: 15,
          bookId: 3,
          userId: 15,
          userName: 'Pierre',
          rating: 5,
          content:
            "Un livre captivant, j'ai appris tellement de choses tout en m'amusant.",
        },
      ],
    },
    {
      id: 4,
      bookImagePath: 'seigneur-anneaux-communaute.jpg',
      title: "L'Histoire de la Seconde Guerre mondiale",
      authorID: 4,
      authorName: 'Winston Churchill',
      firstPublished: new Date('1948-01-01'),
      averageRating: 4.8,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
      comments: [
        {
          id: 16,
          bookId: 4,
          userId: 16,
          userName: 'Sarah',
          rating: 5,
          content:
            'Une analyse détaillée et profonde des événements qui ont façonné le monde moderne.',
        },
        {
          id: 17,
          bookId: 4,
          userId: 17,
          userName: 'Thomas',
          rating: 5,
          content:
            'Incontournable pour comprendre la Seconde Guerre mondiale. Excellente lecture!',
        },
        {
          id: 18,
          bookId: 4,
          userId: 18,
          userName: 'Valérie',
          rating: 4,
          content:
            "Un livre dense, mais d'une importance capitale pour toute personne s'intéressant à l'histoire.",
        },
        {
          id: 19,
          bookId: 4,
          userId: 19,
          userName: 'Xavier',
          rating: 5,
          content:
            'Un témoignage puissant de Churchill sur la guerre, extrêmement bien écrit.',
        },
        {
          id: 20,
          bookId: 4,
          userId: 20,
          userName: 'Yvonne',
          rating: 4,
          content:
            'Un ouvrage complet et fascinant, bien que certains passages soient assez longs.',
        },
      ],
    },
    {
      id: 5,
      bookImagePath: 'harry-potter-ecole-sorciers.jpg',
      title: 'La structure des révolutions scientifiques',
      authorID: 5,
      authorName: 'Thomas S. Kuhn',
      firstPublished: new Date('1962-01-01'),
      averageRating: 4.4,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
      ],
      comments: [
        {
          id: 21,
          bookId: 5,
          userId: 21,
          userName: 'Alain',
          rating: 5,
          content:
            'Un ouvrage fondamental pour comprendre les changements de paradigmes en science.',
        },
        {
          id: 22,
          bookId: 5,
          userId: 22,
          userName: 'Cécile',
          rating: 4,
          content:
            'Très intéressant, mais parfois difficile à suivre sans une formation scientifique préalable.',
        },
        {
          id: 23,
          bookId: 5,
          userId: 23,
          userName: 'David',
          rating: 4,
          content:
            "Un livre fascinant sur l'évolution des théories scientifiques.",
        },
        {
          id: 24,
          bookId: 5,
          userId: 24,
          userName: 'Élisabeth',
          rating: 5,
          content:
            'Une lecture incontournable pour les passionnés de philosophie des sciences.',
        },
        {
          id: 25,
          bookId: 5,
          userId: 25,
          userName: 'François',
          rating: 4,
          content:
            'Très stimulant intellectuellement, mais certains passages sont un peu trop théoriques.',
        },
      ],
    },
    {
      id: 6,
      bookImagePath: 'hobbit.jpg',
      title: "L'origine des espèces",
      authorID: 6,
      authorName: 'Charles Darwin',
      firstPublished: new Date('1859-11-24'),
      averageRating: 4.8,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 4, categoryName: 'ScienceFiction', path: 'science-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
      ],
      comments: [
        {
          id: 26,
          bookId: 6,
          userId: 26,
          userName: 'Marion',
          rating: 5,
          content:
            'Une lecture révolutionnaire, même plus de 150 ans après sa publication.',
        },
        {
          id: 27,
          bookId: 6,
          userId: 27,
          userName: 'Paul',
          rating: 4,
          content:
            "Difficile à lire, mais une base fondamentale pour comprendre l'évolution.",
        },
        {
          id: 28,
          bookId: 6,
          userId: 28,
          userName: 'Quentin',
          rating: 5,
          content:
            "L'ouvrage fondateur de la théorie de l'évolution, absolument fascinant.",
        },
        {
          id: 29,
          bookId: 6,
          userId: 29,
          userName: 'Rita',
          rating: 4,
          content:
            'Un livre important, bien que certaines sections soient un peu techniques.',
        },
        {
          id: 30,
          bookId: 6,
          userId: 30,
          userName: 'Sylvain',
          rating: 5,
          content:
            "Une lecture incontournable pour ceux qui s'intéressent à la biologie et à l'histoire naturelle.",
        },
      ],
    },
    {
      id: 7,
      bookImagePath: 'meilleur-des-mondes.jpg',
      title: "Les Origines de la famille, de la propriété privée et de l'État",
      authorID: 7,
      authorName: 'Friedrich Engels',
      firstPublished: new Date('1884-01-01'),
      averageRating: 2.3,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
      ],
      comments: [
        {
          id: 31,
          bookId: 7,
          userId: 31,
          userName: 'Léo',
          rating: 4,
          content:
            "Une analyse historique puissante sur l'évolution des structures sociales.",
        },
        {
          id: 32,
          bookId: 7,
          userId: 32,
          userName: 'Nadia',
          rating: 4,
          content:
            'Un ouvrage dense, mais qui reste très pertinent pour comprendre la société actuelle.',
        },
        {
          id: 33,
          bookId: 7,
          userId: 33,
          userName: 'Olivier',
          rating: 5,
          content:
            "Un ouvrage essentiel pour ceux qui s'intéressent à la théorie sociale et à l'histoire.",
        },
        {
          id: 34,
          bookId: 7,
          userId: 34,
          userName: 'Patricia',
          rating: 3,
          content:
            "Bien qu'intéressant, c'est un peu difficile à lire et à suivre.",
        },
        {
          id: 35,
          bookId: 7,
          userId: 35,
          userName: 'Romain',
          rating: 5,
          content:
            "Un livre marquant qui offre une perspective différente sur l'histoire de la famille et de l'État.",
        },
      ],
    },
    {
      id: 8,
      bookImagePath: 'moby-dick.jpg',
      title: "L'Interprétation des rêves",
      authorID: 8,
      authorName: 'Sigmund Freud',
      firstPublished: new Date('1900-01-01'),
      averageRating: 4.6,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 3, categoryName: 'Biography', path: 'biography' },
        { id: 5, categoryName: 'SelfHelp', path: 'self-help' },
      ],
      comments: [
        {
          id: 36,
          bookId: 8,
          userId: 36,
          userName: 'Alice',
          rating: 5,
          content:
            'Un ouvrage fascinant qui a changé notre manière de penser la psychologie.',
        },
        {
          id: 37,
          bookId: 8,
          userId: 37,
          userName: 'Benjamin',
          rating: 4,
          content:
            "Un livre d'une grande profondeur, bien qu'il soit un peu difficile à comprendre.",
        },
        {
          id: 38,
          bookId: 8,
          userId: 38,
          userName: 'Claire',
          rating: 5,
          content: "Une analyse brillante des rêves et de l'inconscient.",
        },
        {
          id: 39,
          bookId: 8,
          userId: 39,
          userName: 'David',
          rating: 4,
          content:
            "Un livre qui a marqué l'histoire de la psychologie, mais qui reste parfois un peu ésotérique.",
        },
        {
          id: 40,
          bookId: 8,
          userId: 40,
          userName: 'Élise',
          rating: 5,
          content:
            "Une lecture indispensable pour quiconque s'intéresse à la psychanalyse.",
        },
      ],
    },
    {
      id: 9,
      bookImagePath: 'oiseau-moqueur.jpg',
      title: "La Genèse de l'idée de l'État",
      authorID: 9,
      authorName: 'Max Weber',
      firstPublished: new Date('1919-01-01'),
      averageRating: 4.5,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 6, categoryName: 'PoliticalScience', path: 'political-science' },
      ],
      comments: [
        {
          id: 41,
          bookId: 9,
          userId: 41,
          userName: 'Thierry',
          rating: 5,
          content:
            "Un livre incontournable pour comprendre l'émergence de l'État moderne.",
        },
        {
          id: 42,
          bookId: 9,
          userId: 42,
          userName: 'Isabelle',
          rating: 4,
          content:
            "Très dense, mais une réflexion fondamentale sur le pouvoir et l'État.",
        },
        {
          id: 43,
          bookId: 9,
          userId: 43,
          userName: 'Jean-Paul',
          rating: 5,
          content:
            'Une lecture essentielle pour les étudiants en sciences sociales et en politique.',
        },
        {
          id: 44,
          bookId: 9,
          userId: 44,
          userName: 'Katherine',
          rating: 4,
          content:
            'Un ouvrage complexe mais éclairant sur les fondements de la société moderne.',
        },
        {
          id: 45,
          bookId: 9,
          userId: 45,
          userName: 'Michel',
          rating: 5,
          content:
            "L'un des livres les plus importants pour comprendre l'État et ses structures.",
        },
      ],
    },
    {
      id: 10,
      bookImagePath: 'orgueil-et-prejuges.jpg',
      title: 'La société industrielle et son avenir',
      authorID: 10,
      authorName: 'Antoine Cournot',
      firstPublished: new Date('1838-01-01'),
      averageRating: 4.2,
      categories: [
        { id: 1, categoryName: 'NonFiction', path: 'non-fiction' },
        { id: 2, categoryName: 'Historical', path: 'historical' },
        { id: 7, categoryName: 'Economics', path: 'economics' },
      ],
      comments: [
        {
          id: 46,
          bookId: 10,
          userId: 46,
          userName: 'Lucie',
          rating: 4,
          content:
            'Un ouvrage visionnaire qui aborde les défis de la société industrielle.',
        },
        {
          id: 47,
          bookId: 10,
          userId: 47,
          userName: 'Henri',
          rating: 4,
          content:
            'Un livre marquant sur la révolution industrielle et ses conséquences sociales.',
        },
        {
          id: 48,
          bookId: 10,
          userId: 48,
          userName: 'Sophie',
          rating: 3,
          content:
            'Un peu trop théorique pour être une lecture facile, mais très pertinent.',
        },
        {
          id: 49,
          bookId: 10,
          userId: 49,
          userName: 'Pauline',
          rating: 4,
          content:
            "Un ouvrage essentiel pour ceux qui s'intéressent à l'impact de l'industrialisation sur la société.",
        },
        {
          id: 50,
          bookId: 10,
          userId: 50,
          userName: 'Victor',
          rating: 5,
          content:
            'Un livre qui anticipe parfaitement les changements dans la société moderne.',
        },
      ],
    },
  ];
  */

  constructor() {}
}
