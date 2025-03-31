import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Genre } from '../../utils/genre';

@Injectable({
  providedIn: 'root',
})
export class MockBooksService {
  //Objects arrays for books

  // httpclient returns observables

  nonFictionBooks: Book[] = [
    {
      id: 1,
      title: "Sapiens: Une brève histoire de l'humanité",
      authorID: 1,
      auhtorName: 'Yuval Noah Harari',
      firstPublished: new Date('2011-01-01'),
      averageRating: 4.7,
      genres: [Genre.NonFiction, Genre.Historical, Genre.Biography],
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
      title: 'Le Deuxième Sexe',
      authorID: 2,
      auhtorName: 'Simone de Beauvoir',
      firstPublished: new Date('1949-01-01'),
      averageRating: 4.5,
      genres: [Genre.NonFiction, Genre.Biography, Genre.Historical],
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
      title: 'Une brève histoire de presque tout',
      authorID: 3,
      auhtorName: 'Bill Bryson',
      firstPublished: new Date('2003-06-01'),
      averageRating: 4.6,
      genres: [Genre.NonFiction, Genre.ScienceFiction, Genre.Historical],
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
      title: "L'Histoire de la Seconde Guerre mondiale",
      authorID: 4,
      auhtorName: 'Winston Churchill',
      firstPublished: new Date('1948-01-01'),
      averageRating: 4.8,
      genres: [Genre.NonFiction, Genre.Historical],
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
      title: 'La structure des révolutions scientifiques',
      authorID: 5,
      auhtorName: 'Thomas S. Kuhn',
      firstPublished: new Date('1962-01-01'),
      averageRating: 4.4,
      genres: [Genre.NonFiction, Genre.ScienceFiction],
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
      title: "L'origine des espèces",
      authorID: 6,
      auhtorName: 'Charles Darwin',
      firstPublished: new Date('1859-11-24'),
      averageRating: 4.8,
      genres: [Genre.NonFiction, Genre.ScienceFiction, Genre.Historical],
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
      title: "Les Origines de la famille, de la propriété privée et de l'État",
      authorID: 7,
      auhtorName: 'Friedrich Engels',
      firstPublished: new Date('1884-01-01'),
      averageRating: 4.3,
      genres: [Genre.NonFiction, Genre.Historical, Genre.Biography],
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
      title: "L'Interprétation des rêves",
      authorID: 8,
      auhtorName: 'Sigmund Freud',
      firstPublished: new Date('1900-01-01'),
      averageRating: 4.6,
      genres: [Genre.NonFiction, Genre.Biography, Genre.Psychology],
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
      title: "La Genèse de l'idée de l'État",
      authorID: 9,
      auhtorName: 'Max Weber',
      firstPublished: new Date('1919-01-01'),
      averageRating: 4.5,
      genres: [Genre.NonFiction, Genre.Historical, Genre.PoliticalScience],
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
      title: 'La société industrielle et son avenir',
      authorID: 10,
      auhtorName: 'Antoine Cournot',
      firstPublished: new Date('1838-01-01'),
      averageRating: 4.2,
      genres: [Genre.NonFiction, Genre.Historical, Genre.Economics],
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

  constructor() {}
}
