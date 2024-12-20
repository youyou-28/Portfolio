import scholaro from "../../assets/images/scholaro.png";
import escape from "../../assets/images/escape.png";

export const profile = {
  name: 'Younes Nedjar,',
  title: 'Étudiant en BUT Informatique',
  subtitle: 'Développeur Web & Java',
  email: 'Nedjaryounes28@gmail.com',
  phone: '06 56 84 26 07',
  address: '10 Avenue de Lodève, 34070, Montpellier',
  social: {
    linkedin: 'younes-nedjar',
    github: 'youyou-28',
    cv:'https://acrobat.adobe.com/id/urn:aaid:sc:EU:91852194-7a50-4936-93a6-81cb7b96da12',
  },
  objective: 'Recherche un stage en développement (10-12 semaines) à Montpellier ou ses alentours.',
};

export const education = [
  {
    degree: 'BUT Informatique',
    institution: 'Université de Montpellier',
    period: '2023-2025',
    current: true,
  },
  {
    degree: 'Baccalauréat Général Mention Bien',
    institution: 'Lycée Jules Guesde, Montpellier',
    specialization: 'Spécialités : Mathématiques et NSI (Numérique et Sciences Informatiques)',
    period: '2023',
  },
];

export const projects = [
  {
    title: 'Escape Game - Le Wagon Mystérieux',
    description: 'Bienvenue à bord de ce jeu énigmatique, où l\'atmosphère porte l\'empreinte du violent crash du wagon contre le mur.',
    image: escape,
    tech: ['HTML', 'CSS', '2023'],
    highlights: [
      'Conception d\'une expérience immersive',
      'Design responsive et adaptatif',
      'Intégration d\'énigmes interactives',
      'Gestion des états de jeu',
    ],
  },
  {
    title: 'Projet Trains',
    description: 'Développement d\'un jeu de société en Java/JavaFX avec interface fonctionnelle.',
    image: 'https://avatars.mds.yandex.net/get-mpic/4544069/img_id702734926032771273.jpeg/orig',
    tech: ['Java', 'JavaFX', 'XML', '2023'],
    highlights: [
      'Programmation orientée objets',
      'Résolution de bugs',
      'Interface responsive et optimisation',
    ],
  },
  {
    title: 'Application Web Scholaro',
    description: 'Application web pour l\'aide à la poursuite et la direction d\'études, destinée aux responsables et institutions éducatives.',
    image: scholaro,
    tech: ['HTML', 'CSS', 'PHP', '2024'],
    inProgress: true,
  },
];

export const skills = [
  {
    category: 'Programmation',
    items: [
      { name: 'Python', level: 70 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Web & Outils',
    items: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Git/GitHub', level: 75 },
      { name: 'Méthode Agile', level: 90 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    category: 'Langues',
    items: [
      { name: 'Français', level: 100 },
      { name: 'Anglais', level: 70 },
      { name: 'Espagnol', level: 100},
    ],
  },
];

export const interests = [
  {
    category: 'Sports',
    description: 'Pratique de différents sports en club (football, taekwondo, volley-ball) pendant 10 ans.',
  },
  {
    category: 'Loisirs',
    description: 'Cinéma, lecture, design web, jeux vidéo.',
  },
];