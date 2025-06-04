import React from 'react';

export function LearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Mes Apprentissages</h1>
        
        <div className="prose prose-indigo max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Référentiel de compétences BUT Informatique</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Le Bachelor Universitaire de Technologie (BUT) en Informatique s'articule autour de six compétences 
              fondamentales qui guident le cursus et les acquis d'apprentissage. Les trois compétences suivantes 
              sont maîtrisées au niveau 2, attestant de ma maîtrise de ces domaines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{competence.title}</h3>
                  <p className="text-gray-600 mb-6">{competence.description}</p>
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                    {competence.level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Détail des Compétences</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Développement d'application</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Cette compétence se concentre sur la capacité à concevoir, développer et maintenir des applications 
                  sur plusieurs plateformes. Elle couvre l'ensemble du cycle de développement logiciel, de la collecte 
                  des exigences aux tests et au déploiement, en mettant l'accent sur la création de solutions centrées 
                  sur l'utilisateur et répondant à des besoins spécifiques.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <ul className="list-disc pl-6 space-y-4 text-gray-600">
                    <li className="hover:text-indigo-600 transition-colors">
                      Scholaro - Projet universitaire de poursuite d'études développé en HTML, CSS, PHP
                    </li>
                    <li className="hover:text-indigo-600 transition-colors">
                      Créer un site web interactif et visuelment attrayant en utilisant uniquement HTML, CSS et JavaScript
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "AC 1.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                      "AC 1.2 : Appliquer des principes d'accessibilité et d'ergonomie",
                      "AC 1.3 : Adopter de bonnes pratiques de conception et de programmation",
                      "AC 1.4 : Vérifier et valider la qualité de l'application par les tests",
                      "AC 5.2 : Formaliser les besoins du client et de l'utilisateur",
                      "AC 5.3 : Identifier les critères de faisabilité d'un projet informatique",
                      "AC 6.3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique"
                    ].map((skill, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Repeat similar structure for other competencies */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Optimiser les applications</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Cette compétence consiste à analyser les applications existantes afin d'identifier les axes 
                  d'amélioration en termes de performances, de sécurité et de maintenabilité. Elle comprend la 
                  mise en œuvre d'optimisations, la refactorisation du code, l'application de modèles de conception 
                  et la garantie de l'évolutivité des applications pour répondre à la demande croissante.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Preuve de maîtrise</h4>
                  <p className="text-gray-600">Trains SAE - Analyse d'algorithmes pour optimiser les itinéraires des trains.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences acquises</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "AC 1.1 : Implémenter des conceptions simples",
                      "AC 1.4 : Développeur des interfaces utilisateurs",
                      "AC 2.3 : Formaliser et mettre en œuvre des outils mathématiques pour l'informatique",
                      "AC 5.1 : Appréhender les besoins du client et de l'utilisateur",
                      "AC 6.4 : Acquérir les compétences interpersonnelles pour travailler en équipe"
                    ].map((skill, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Continue with other competencies... */}
              {/* Each competency follows the same structure but with different content */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}