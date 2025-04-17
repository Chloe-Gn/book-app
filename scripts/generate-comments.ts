type Bidule = {
  id: number;
  bookId: number;
  userId: number;
  userName: string;
  rating: number;
  content: string;
};

const bookIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

const userProfiles = [
  { id: 1, name: 'Marie Dupont' },
  { id: 2, name: 'Jean Martin' },
  { id: 3, name: 'Sophie Lambert' },
  { id: 4, name: 'Lucas Moreau' },
  { id: 5, name: 'Chloé Bernard' },
  { id: 6, name: 'Thomas Garcia' },
  { id: 7, name: 'Emma Lefevre' },
  { id: 8, name: 'Nathan Petit' },
  { id: 9, name: 'Camille Rousseau' },
  { id: 10, name: 'Léo Girard' },
];

const positive = [
  "Un livre captivant, je l'ai dévoré en une journée !",
  'Très bien écrit, les personnages sont attachants.',
  'Une histoire émouvante et pleine de rebondissements.',
  "J'ai adoré, c'était un véritable coup de cœur.",
  'Magnifique, je recommande fortement !',
];

const neutral = [
  "Le livre est correct, mais il m'a manqué quelque chose.",
  'Une lecture agréable sans être exceptionnelle.',
  "L'histoire est bien construite, mais un peu lente à mon goût.",
  "C'était intéressant, mais pas inoubliable.",
  'Une lecture moyenne, ni bonne ni mauvaise.',
];

const negative = [
  "Je n'ai pas accroché, l'histoire est trop prévisible.",
  "Déçu par ce livre, je m'attendais à mieux.",
  'Les personnages manquent de profondeur.',
  'Trop de longueurs, je me suis ennuyé.',
  "Je n'ai pas réussi à finir le livre.",
];

const getRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
let commentId = 1;
const comments: Bidule[] = [];

for (const bookId of bookIds) {
  const numComments = getRandom([2, 3, 3, 3, 4]);
  for (let i = 0; i < numComments; i++) {
    const user = getRandom(userProfiles);
    const rating = Math.floor(Math.random() * 5) + 1;
    let content = '';

    if (rating >= 4) content = getRandom(positive);
    else if (rating === 3) content = getRandom(neutral);
    else content = getRandom(negative);

    comments.push({
      id: commentId++,
      bookId,
      userId: user.id,
      userName: user.name,
      rating,
      content,
    });
  }
}

console.log(comments);
