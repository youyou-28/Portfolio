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

export const projects = [
  {
    title: 'Escape Game - Le Wagon Mystérieux',
    description: 'Le Wagon Mystérieux est un site web de présentation des différentes épreuves de notre escape game fictif. Chaque défi, énigme et puzzle proposé dans le jeu est détaillé sur ce site, offrant aux participants un aperçu des défis qu\'ils devront relever.',
    image: escape,
    tech: ['HTML', 'CSS', 'JavaScript', '2023'],
    detailedDescription: 'Le Wagon Mystérieux est un site web de présentation des différentes épreuves de notre escape game fictif. Chaque défi, énigme et puzzle proposé dans le jeu est détaillé sur ce site, offrant aux participants un aperçu des défis qu\'ils devront relever. L\'objectif est de présenter de manière claire et attractive les étapes du jeu, permettant ainsi aux joueurs de se préparer et de mieux comprendre l\'univers du jeu avant de s\'y plonger.',
    features: [
      'Présentation détaillée de chaque épreuve de l\'escape game',
      'Description des énigmes à résoudre, des objets à découvrir et des indices à trouver',
      'Mise en page responsive permettant une consultation facile sur smartphone, tablette et PC',
      'Navigation fluide entre les différentes épreuves et un accès rapide aux informations clés'
    ],
    challenges: [
      'Créer un site web interactif et visuelment attrayant en utilisant uniquement HTML, CSS et JavaScript',
      'Organiser le contenu de manière claire et intuitive',
      'Concevoir une expérience utilisateur fluide et engageante'
    ],
    outcomes: [
      'Un site web fonctionnel et informatif, présentant chaque épreuve de l\'escape game',
      'Une interface réactive et conviviale, adaptée à différents types de supports',
      'Une présentation réussie des défis, prête à être utilisée comme support pour les joueurs'
    ],
    skills: [
      {
        category: 'Unités d\'Enseignement',
        items: [
          'UE 1 : Réaliser un développement d\'application',
          'UE 5 : Conduire un projet',
          'UE 6 : Collaborer au sein d\'une équipe informatique'
        ]
      }
    ],
    learningOutcomes: [
      {
        code: 'AC 1.1',
        description: 'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
        achievement: 'Le client nous a demandé de créer une page web pour présenter un escape game fictif.'
      },
      {
        code: 'AC 1.2',
        description: 'Appliquer des principes d\'accessibilité et d\'ergonomie',
        achievement: 'Le site web est claire et a été pensé pour l\'utilisation sur téléphone.'
      },
      {
        code: 'AC 5.2',
        description: 'Formaliser les besoins du client et de l\'utilisateur',
        achievement: 'Les besoins du client ont été analysé en interne puis mis au clair par le client lui-même via des rendez-vous.'
      },
      {
        code: 'AC 6.4',
        description: 'Acquérir les compétences interpersonnelles pour travailler en équipe',
        achievement: 'Lors de ce projet j\'ai appris à travailler en équipe et à répartir différentes tâches.'
      }
    ]
  },
  {
    title: 'Projet Trains',
    description: 'Dans le cadre d\'un projet universitaire, j\'ai conçu une simulation de jeu de gestion ferroviaire appelée Trains. J\'ai utilisé Java pour la logique métier et JavaFX pour l\'interface graphique. Ce projet intègre des aspects de stratégie, d\'optimisation et de programmation orientée objet, afin d\'offrir une expérience interactive et captivante.',
    image: 'https://avatars.mds.yandex.net/get-mpic/4544069/img_id702734926032771273.jpeg/orig',
    tech: ['Java', 'JavaFX', 'XML', '2023'],
    features: [
      'Interface interactive JavaFX permettant de construire des rails pour relier des villes et des industries',
      'Vue dynamique affichant graphiquement les rails, gares et trains',
      'Possibilité d\'ajouter, configurer (vitesse, itinéraire) et suivre les trains en temps réel',
      'Système de gestion des coûts en ressources pour simuler des contraintes budgétaires',
      'Interface utilisateur (UI) développée avec JavaFX'
    ],
    challenges: [
      'Une interface utilisateur intuitive et visuellement attrayante',
      'Une structure de code propre et maintenable, respectant les principes de la programmation orientée objet',
      'Une mécanique de simulation réaliste pour la gestion des trains et la construction de voies ferrées'
    ],
    outcomes: [
      'La qualité de l\'interface utilisateur, offrant une expérience de jeu immersive',
      'La modularité du code, permettant son évolution ou l\'ajout de futures fonctionnalités',
      'Gestion efficace des événements en temps réel'
    ],
    skills: [
      {
        category: 'Unités d\'Enseignement',
        items: [
          'UE 1 : Réaliser un développement d\'application',
          'UE 2 : Optimiser des applications',
          'UE 5 : Conduire un projet',
          'UE 6 : Collaborer au sein d\'une équipe informatique'
        ]
      }
    ],
    learningOutcomes: [
      {
        code: 'AC 1.1',
        description: 'Implémenter des conceptions simples',
        achievement: 'Le projet a été réalisé comme demandé au préalable.'
      },
      {
        code: 'AC 1.4',
        description: 'Développer des interfaces utilisateurs',
        achievement: 'Lors de ce projet, nous avons développé une interface graphique pour l\'utilisateur.'
      },
      {
        code: 'AC 2.3',
        description: 'Formaliser et mettre en œuvre des outils mathématiques pour l\'informatique',
        achievement: 'Pour coder le corps du projet nous avons utilisé les graphes, une notion vue en mathématiques.'
      },
      {
        code: 'AC 5.1',
        description: 'Appréhender les besoins du client et de l\'utilisateur',
        achievement: 'Le client était satisfait de notre travail.'
      },
      {
        code: 'AC 6.4',
        description: 'Acquérir les compétences interpersonnelles pour travailler en équipe',
        achievement: 'Lors de ce projet j\'ai appris à travailler en équipe et à répartir différentes tâches.'
      }
    ]
  },
  {
    title: 'Application Web Scholaro',
    description: 'Application web pour l\'aide à la poursuite et la direction d\'études, destinée aux responsables et institutions éducatives.',
    image:scholaro,
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', '2024'],
    inProgress: true,
    detailedDescription: 'Le département informatique de l\'IUT de Montpellier organise chaque fin d\'année une réunion pour déterminer la suite du parcours académique de chaque étudiant. Pour ce faire, il est nécessaire d\'examiner les résultats de chaque étudiant, de calculer des moyennes spécifiques aux différentes formations. Cependant, ce processus devient de plus en plus répétitif et long au fil du temps, rendant difficile pour le jury d\'avoir une vision globale des étudiants, ainsi que des statistiques sur les avis favorables, défavorables ou réservés. Le projet qui nous a été attribué consiste à développer une application permettant d\'automatiser cette procédure afin de simplifier le travail du responsable de la poursuite d\'études et du jury dans leurs décisions. Le site proposé faciliterait la création d\'agrégations, c\'est-à-dire des moyennes issues de plusieurs ressources principales, ainsi que la génération de graphiques et de fichiers PDF préremplis qui résument les avis des enseignants.',
    features: [
      'Importer les notes des étudiants',
      'Importer des étudiants à partir de fichiers csv',
      'Pouvoir se connecter en tant qu\'étudiant ou professeur via LDAP',
      'Créer des agrégations par ressources',
      'Générer des fichiers PDF pré-remplis concernant la poursuite d\'étude',
      'Générer des graphiques en fonction des agrégations'
    ],
    challenges: [
      'Offrir une vue d\'ensemble sur tous les étudiants',
      'Permettre l\'automatisation partielle des évaluations de poursuite d\'étude',
      'Travailler en équipe en adoptant la méthode agile'
    ],
    outcomes: [
      'Développement d\'une application fonctionnelle répondant aux attentes du client',
      'Création d\'une application modulaire basée sur les principes SOLID'
    ],
    skills: [
      {
        category: 'Unités d\'Enseignement',
        items: [
          'UE 1 : Réaliser un développement d\'application',
          'UE 2 : Optimiser des applications',
          'UE 3 : Administrer des systèmes informatiques communicants complexes',
          'UE 4 : Gérer des données de l\'information',
          'UE 5 : Conduire un projet',
          'UE 6 : Collaborer au sein d\'une équipe informatique'
        ]
      }
    ],
    learningOutcomes: [
      {
        code: 'AC 1.1',
        description: 'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
        achievement: 'Le projet a été réalisé d\'après les exigences du client.'
      },
      {
        code: 'AC 1.2',
        description: 'Appliquer des principes d\'accessibilité et d\'ergonomie',
        achievement: 'L\'application réalisée est très intuitive et claire.'
      },
      {
        code: 'AC 1.3',
        description: 'Adopter de bonnes pratiques de conception et de programmation',
        achievement: 'La conception a été réfléchie en amont du projet, puis une fois l\'idée principale de l\'application, nous avons commencé à coder.'
      },
      {
        code: 'AC 1.4',
        description: 'Vérifier et valider la qualité de l\'application par les tests',
        achievement: 'Chaque user story a été testée puis validée par le client lors des revues de sprint.'
      },
      {
        code: 'AC 4.1',
        description: 'Optimiser les modèles de données de l\'entreprise',
        achievement: 'Les données recueillies ont été optimisées rendant l\'application plus rapide.'
      },
      {
        code: 'AC 4.2',
        description: 'Assurer la confidentialité des données (intégrité et sécurité)',
        achievement: 'Les données sont stockées dans la base de données et les mots de passe des utilisateurs sont chiffrés avec un poivre stocké dans le code.'
      },
      {
        code: 'AC 4.3',
        description: 'Organiser la restitution de données à travers la programmation et la visualisation',
        achievement: 'Les données stockées sont réutilisées dans les fonctionnalités de l\'application.'
      },
      {
        code: 'AC 5.2',
        description: 'Formaliser les besoins du client et de l\'utilisateur',
        achievement: 'Les besoins du client ont été analysé en interne puis mis au clair par le client lui-même via des rendez-vous.'
      },
      {
        code: 'AC 5.3',
        description: 'Identifier les critères de faisabilité d\'un projet informatique',
        achievement: 'Certaines fonctionnalités que le client a proposé ont été refusées à cause de leur non-faisabilité.'
      },
      {
        code: 'AC 6.3',
        description: 'Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique',
        achievement: 'Les compétences de chaque membre de l\'équipe ont été mises en avant et ont contribué au bon déroulement du projet.'
      }
    ]
  }
];

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
