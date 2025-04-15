let allBooks = [
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

function getBooksByCategory(id: number) {
  let filteredBooks = allBooks.filter((book) =>
    book.categories.some((cat) => cat.id === id)
  );
  console.log(filteredBooks);
}

getBooksByCategory(4);
