import { Project } from '../types/project';

export const profile = {
  name: "Younes Nedjar",
  title: "Étudiant en BUT Informatique",
  objective: "Passionné par le développement web et la création d'applications innovantes",
  email: "younes.nedjar@example.com",
  phone: "+33 6 XX XX XX XX",
  social: {
    github: "younes-nedjar",
    linkedin: "younes-nedjar",
    cv: "/cv.pdf"
  }
};

export const projects: Project[] = [
  {
    title: "DataDiag - Stage Diag2tec",
    description: "Amélioration d'une application web d'analyse de données biologiques pour la recherche sur les cancers hématologiques",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    detailedDescription: "Durant mon stage au sein de la société Diag2tec, j'ai travaillé à l'amélioration de DataDiag, une application web utilisée par l'ensemble des collaborateurs pour l'analyse de données biologiques pour la recherche sur les cancers hématologiques. Cette application permet de stocker et de rechercher des données biologiques issues d'échantillons de patients atteints de cancer hématologique à l'aide d'une base de données.",
    features: [
      "Système de recherche multiple pour les échantillons et patients",
      "Interface de drag & drop pour l'importation de fichiers CSV",
      "Incrémentation automatique des clés primaires et attributs",
      "Refonte graphique complète de l'interface utilisateur"
    ],
    challenges: [
      "Correction de bugs critiques d'affichage et de gestion des données",
      "Optimisation des performances de recherche avec de grands volumes de données",
      "Intégration de nouvelles tables dans la base de données existante",
      "Harmonisation de l'interface avec la charte graphique de l'entreprise"
    ],
    outcomes: [
      "Application plus fiable et fonctionnelle",
      "Interface utilisateur modernisée et ergonomique",
      "Système de recherche optimisé",
      "Base de données étendue avec de nouveaux modèles cellulaires"
    ],
    skills: [
      {
        category: "Compétences Techniques",
        items: [
          "Développement PHP/JavaScript",
          "Gestion de base de données MySQL",
          "Intégration HTML/CSS",
          "Architecture MVC",
          "Optimisation des performances"
        ]
      },
      {
        category: "Compétences Professionnelles",
        items: [
          "Analyse et résolution de problèmes",
          "Documentation technique",
          "Travail en équipe",
          "Communication avec les parties prenantes",
          "Gestion de projet"
        ]
      }
    ],
    learningOutcomes: [
      {
        code: "Développement",
        description: "Amélioration et maintenance d'une application web complexe",
        achievement: "Mise en œuvre de solutions techniques pour corriger des bugs critiques et optimiser les performances"
      },
      {
        code: "Base de données",
        description: "Extension et optimisation d'une base de données relationnelle",
        achievement: "Ajout de nouvelles tables et optimisation des requêtes pour améliorer les performances"
      },
      {
        code: "Interface utilisateur",
        description: "Refonte graphique et amélioration de l'expérience utilisateur",
        achievement: "Création d'une interface moderne et ergonomique respectant la charte graphique de l'entreprise"
      }
    ]
  },
  {
    title: "Portfolio Personnel",
    description: "Création d'un portfolio professionnel pour présenter mes projets et compétences",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    detailedDescription: "Développement d'un portfolio personnel moderne et responsive utilisant les dernières technologies web. Le site présente mes projets, compétences et expériences de manière professionnelle et interactive.",
    features: [
      "Design responsive et moderne",
      "Présentation détaillée des projets",
      "Interface utilisateur intuitive",
      "Optimisation SEO"
    ],
    challenges: [
      "Création d'un design unique et professionnel",
      "Implémentation d'animations fluides",
      "Optimisation des performances",
      "Déploiement et maintenance continue"
    ],
    outcomes: [
      "Site web professionnel et moderne",
      "Vitrine efficace de mes compétences",
      "Expérience utilisateur optimisée",
      "Base solide pour ma présence en ligne"
    ],
    skills: [
      {
        category: "Développement Frontend",
        items: [
          "React/Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Responsive Design"
        ]
      },
      {
        category: "Autres Compétences",
        items: [
          "UI/UX Design",
          "Performance Web",
          "SEO",
          "Déploiement"
        ]
      }
    ],
    learningOutcomes: [
      {
        code: "Frontend",
        description: "Maîtrise des frameworks modernes",
        achievement: "Création d'une application React performante et maintenable"
      },
      {
        code: "Design",
        description: "Conception d'interfaces utilisateur",
        achievement: "Réalisation d'un design professionnel et responsive"
      },
      {
        code: "Déploiement",
        description: "Mise en production et maintenance",
        achievement: "Déploiement réussi et maintenance continue du site"
      }
    ]
  }
];

export const education = [
  {
    degree: "BUT Informatique",
    institution: "IUT de Montpellier-Sète",
    period: "2022 - 2025",
    description: "Formation en cours avec spécialisation en développement web et applications"
  },
  {
    degree: "Baccalauréat Général",
    institution: "Lycée Jean Monnet",
    period: "2019 - 2022",
    description: "Spécialités Mathématiques et Numérique Sciences Informatiques, Mention Bien"
  }
];

export const skills = [
  {
    category: "Langages de Programmation",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Java"]
  },
  {
    category: "Technologies Web",
    items: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Bases de Données",
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Outils de Développement",
    items: ["Git", "VS Code", "Docker", "Postman"]
  },
  {
    category: "Méthodologies",
    items: ["Agile/Scrum", "MVC", "Clean Code", "Test Driven Development"]
  }
];

export const interests = [
  {
    name: "Développement Web",
    description: "Passion pour la création d'applications web modernes et innovantes"
  },
  {
    name: "Nouvelles Technologies",
    description: "Veille technologique active sur les dernières innovations"
  },
  {
    name: "Open Source",
    description: "Contribution à des projets open source et partage de connaissances"
  },
  {
    name: "UI/UX Design",
    description: "Intérêt pour la création d'interfaces utilisateur intuitives et esthétiques"
  }
];