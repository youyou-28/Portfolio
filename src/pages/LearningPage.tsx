import React from 'react';

export function LearningPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mes Apprentissages</h1>
        
        <div className="prose prose-indigo max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Référentiel de compétences BUT Informatique</h2>
            <p className="text-gray-600 mb-6">
              Le Bachelor Universitaire de Technologie (BUT) en Informatique s'articule autour de six compétences 
              fondamentales qui guident le cursus et les acquis d'apprentissage. Les trois compétences suivantes 
              sont maîtrisées au niveau 2, attestant de ma maîtrise de ces domaines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Développement d'application",
                  description: "Créer des solutions logicielles qui répondent aux besoins des utilisateurs tout en suivant les meilleures pratiques de développement.",
                  level: "Niveau 2 atteint"
                },
                {
                  title: "Optimiser les applications",
                  description: "Amélioration des performances, de la sécurité et de la maintenabilité des applications logicielles.",
                  level: "Niveau 2 atteint"
                },
                {
                  title: "Administrer des systèmes informatiques communicants complexes",
                  description: "Gestion, sécurisation et optimisation de systèmes réseaux et serveurs complexes.",
                  level: "Niveau 2 atteint"
                },
                {
                  title: "Gérer des données de l'information",
                  description: "Conception, mise en œuvre et maintenance de systèmes de bases de données pour un stockage et une récupération efficace des données.",
                  level: "Niveau 2 atteint"
                },
                {
                  title: "Conduire un projet",
                  description: "Planification, pilotage et évaluation de projets informatiques.",
                  level: "Niveau 2 atteint"
                },
                {
                  title: "Collaborateur au sein d'une équipe informatique",
                  description: "Participation active à la dynamique et à l'organisation d'une équipe de développement.",
                  level: "Niveau 2 atteint"
                }
              ].map((competence, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{competence.title}</h3>
                  <p className="text-gray-600 mb-4">{competence.description}</p>
                  <span className="text-indigo-600 font-semibold">{competence.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Détail des Compétences</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement d'application</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence se concentre sur la capacité à concevoir, développer et maintenir des applications 
                  sur plusieurs plateformes. Elle couvre l'ensemble du cycle de développement logiciel, de la collecte 
                  des exigences aux tests et au déploiement, en mettant l'accent sur la création de solutions centrées 
                  sur l'utilisateur et répondant à des besoins spécifiques.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Scholaro - Projet universitaire de poursuite d'études développé en HTML, CSS, PHP</li>
                    <li>Créer un site web interactif et visuelment attrayant en utilisant uniquement HTML, CSS et JavaScript</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 1.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences</li>
                    <li>AC 1.2 : Appliquer des principes d'accessibilité et d'ergonomie</li>
                    <li>AC 1.3 : Adopter de bonnes pratiques de conception et de programmation</li>
                    <li>AC 1.4 : Vérifier et valider la qualité de l'application par les tests</li>
                    <li>AC 5.2 : Formaliser les besoins du client et de l'utilisateur</li>
                    <li>AC 5.3 : Identifier les critères de faisabilité d'un projet informatique</li>
                    <li>AC 6.3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimiser les applications</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence consiste à analyser les applications existantes afin d'identifier les axes 
                  d'amélioration en termes de performances, de sécurité et de maintenabilité. Elle comprend la 
                  mise en œuvre d'optimisations, la refactorisation du code, l'application de modèles de conception 
                  et la garantie de l'évolutivité des applications pour répondre à la demande croissante.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">Trains SAE - Analyse d'algorithmes pour optimiser les itinéraires des trains.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 1.1 : Implémenter des conceptions simples</li>
                    <li>AC 1.4 : Développeur des interfaces utilisateurs</li>
                    <li>AC 2.3 : Formaliser et mettre en œuvre des outils mathématiques pour l'informatique</li>
                    <li>AC 5.1 : Appréhender les besoins du client et de l'utilisateur</li>
                    <li>AC 6.4 : Acquérir les compétences interpersonnelles pour travailler en équipe</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Administrer des systèmes informatiques communicants complexes</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence consiste à installer, configurer et maintenir des systèmes informatiques 
                  interconnectés. Elle implique la gestion des réseaux, des serveurs et des services, la mise 
                  en œuvre de politiques de sécurité, la surveillance des performances, la gestion des incidents 
                  et la garantie de la disponibilité continue des ressources informatiques.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">Virtualisation avec Docker - Déploiement et gestion de machines virtuelles dans un environnement isolé.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 3.1 : Installer et configurer des composants logiciels et matériels</li>
                    <li>AC 3.3 : Sécuriser un système d'information</li>
                    <li>AC 3.4 : Gérer des incidents et des problèmes</li>
                    <li>AC 4.2 : Déployer une solution informatique</li>
                    <li>AC 6.2 : Mettre en œuvre une démarche de veille</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gérer des données de l'information</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence couvre la capacité à concevoir des schémas de bases de données, à mettre en 
                  œuvre des modèles de données et à garantir l'efficacité du stockage, de la récupération et de 
                  la manipulation des données. Elle inclut la compréhension des différents paradigmes de bases de 
                  données, de l'intégrité des données, des considérations de sécurité et des techniques de 
                  traitement des grands ensembles de données.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">Conception de la base de données de Scholaro - Création d'une base de données normalisée pour le projet Scholaro</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 4.1 : Optimiser les modèles de données de l'entreprise</li>
                    <li>AC 4.2 : Assurer la confidentialité des données (intégrité et sécurité)</li>
                    <li>AC 4.3 : Organiser la restitution de données à travers la programmation et la visualisation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Conduire un projet</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence englobe l'organisation, la coordination et le suivi de projets informatiques. 
                  Elle comprend la gestion des délais, des ressources humaines et matérielles, la communication 
                  avec les parties impliquées et l'adaptation aux aléas du projet pour garantir l'atteinte des 
                  objectifs dans les temps impartis.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">SAE gestion de projet - Planification d'un projet logiciel avec Gantt et SCRUM.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 4.1 : Identifier les besoins et les contraintes d'un projet</li>
                    <li>AC 4.3 : Suivre l'avancement d'un projet</li>
                    <li>AC 4.4 : Évaluer les résultats d'un projet</li>
                    <li>AC 6.1 : S'adapter à un contexte particulier</li>
                    <li>AC 6.5 : Mobiliser les compétences pour animer une équipe</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborateur au sein d'une équipe informatique</h3>
                <p className="text-gray-600 mb-6">
                  Cette compétence implique de travailler efficacement en équipe dans un cadre de projet 
                  informatique. Elle comprend la communication avec les membres, la gestion des outils 
                  collaboratifs, le respect des rôles définis, la participation aux décisions collectives 
                  et l'adoption des méthodes agiles pour une coordination optimale.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">Projet Agile - Développement d'un site web en équipe avec la méthode SCRUM.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>AC 1.2 : Travailler en environnement collaboratif</li>
                    <li>AC 5.3 : Communiquer efficacement avec les parties interprètent</li>
                    <li>AC 6.3 : Adopter une posture professionnelle</li>
                    <li>AC 6.4 : Acquérir les compétences interpersonnelles pour travailler en équipe</li>
                    <li>AC 6.6 : Participer à une démarche qualité</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}