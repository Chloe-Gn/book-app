interface Category {
  id: number;
  categoryName: string;
  path: string;
}

interface Book {
  id: number;
  bookImagePath: string;
  title: string;
  authorID: number;
  authorName: string;
  firstPublished: Date;
  averageRating: number;
  categories: Category[];
}

const categories: Category[] = [
  { id: 1, categoryName: 'nouveautés', path: '/bibliotheque/nouveautes' },
  { id: 2, categoryName: 'romans', path: '/bibliotheque/romans' },
  { id: 3, categoryName: 'thrillers', path: '/bibliotheque/thrillers' },
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
  { id: 6, categoryName: 'essais', path: '/bibliotheque/essais' },
  { id: 7, categoryName: 'non fiction', path: '/bibliotheque/non-fiction' },
  { id: 8, categoryName: 'biographies', path: '/bibliotheque/biographies' },
  {
    id: 9,
    categoryName: 'manuels scolaires',
    path: '/bibliotheque/manuels-scolaires',
  },
  { id: 10, categoryName: 'religions', path: '/bibliotheque/religions' },
];

const bookImagePaths: string[] = [
  '1984.jpg',
  'attrape-coeur.jpg',
  'gatsby.jpg',
  'seigneur-anneaux-communaute.jpg',
  'harry-potter-ecole-sorciers.jpg',
  'hobbit.jpg',
  'meilleur-des-mondes.jpg',
  'moby-dick.jpg',
  'oiseau-moqueur.jpg',
  'orgueil-et-prejuges.jpg',
];

let bookId = 1;
let authorId = 1;
const books: Book[] = [];

for (const category of categories) {
  for (let i = 0; i < 10; i++) {
    books.push({
      id: bookId++,
      bookImagePath: bookImagePaths[i % bookImagePaths.length],
      title: `${category.categoryName} Livre ${i + 1}`,
      authorID: authorId,
      authorName: `Auteur ${authorId++}`,
      firstPublished: new Date('2020-01-01'),
      averageRating: +(3 + (i % 3) * 0.5).toFixed(1),
      categories: [category],
    });
  }
}

console.log(books);
