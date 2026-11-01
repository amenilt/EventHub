export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  place: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Les petits pots, grands jardins',
    category: 'Atelier',
    date: '2026-11-15T10:00:00',
    place: 'Serre du campus',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=960&q=85',
    description: 'Mains dans la terre et idées plein la tête : composez votre mini-jardin, découvrez les gestes qui font du bien à la planète et repartez avec une bouture à faire grandir chez vous. Aucune expérience nécessaire, on fournit les plantes et la bonne humeur.'
  },
  {
    id: 2,
    title: 'Les idées nées autour d’un café',
    category: 'Rencontre',
    date: '2026-11-18T17:30:00',
    place: 'Café des étudiants',
    price: 3,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=960&q=85',
    description: 'Un café, une grande table et de nouvelles personnes à rencontrer. Que vous arriviez seul·e ou en groupe, cette soirée décontractée est l’occasion de faire connaissance, d’échanger vos projets et peut-être de trouver vos futurs compagnons de pause.'
  },
  {
    id: 3,
    title: 'Des pixels, des pixels partout !',
    category: 'Atelier',
    date: '2026-11-22T14:00:00',
    place: 'Studio créatif · Bâtiment B',
    price: 5,
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=960&q=85',
    description: 'Et si vous donniez vie à vos idées, une image à la fois ? Initiez-vous à la création numérique avec une illustratrice passionnée. Découverte des outils, conseils pratiques et exercices ludiques vous attendent. Prêtez simplement votre curiosité : le matériel est fourni.'
  },
  {
    id: 4,
    title: 'Comprendre son cerveau',
    category: 'Conférence',
    date: '2026-11-25T18:00:00',
    place: 'Amphithéâtre Simone Veil',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=960&q=85',
    description: 'Pourquoi retient-on certaines choses et en oublie-t-on d’autres ? Une chercheuse en neurosciences propose un regard clair et accessible sur la mémoire, l’attention et l’apprentissage, avec du temps pour poser toutes vos questions.'
  },
  {
    id: 5,
    title: 'Courir pour le plaisir',
    category: 'Sport',
    date: '2026-11-28T09:30:00',
    place: 'Parc des Facultés',
    price: 2,
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=960&q=85',
    description: 'Débutant·e ou adepte du footing, tout le monde a sa place dans cette course amicale de cinq kilomètres. Avancez à votre rythme, profitez de l’air frais et retrouvez les autres à l’arrivée pour un petit-déjeuner partagé.'
  },
  {
    id: 6,
    title: 'Sur la piste, en toute lumière',
    category: 'Sport',
    date: '2026-12-02T16:00:00',
    place: 'Gymnase universitaire',
    price: 4,
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=960&q=85',
    description: 'Venez découvrir l’athlétisme en équipe, relever des défis à votre mesure et célébrer chaque petit record. Une session ouverte à tous les niveaux, guidée par les étudiants de l’association sportive et suivie d’un moment convivial.'
  }
];

export const CATEGORIES = ['Tous', 'Atelier', 'Conférence', 'Rencontre', 'Sport'];
