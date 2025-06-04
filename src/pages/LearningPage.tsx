import React from 'react';

export function LearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Parcours d'Apprentissage</h1>
        
        <div className="prose prose-indigo max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compétences Acquises en BUT Informatique</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Mon parcours en BUT Informatique m'a permis de développer six compétences essentielles, 
              chacune validée au niveau 2. Ces acquis constituent le socle de ma formation et démontrent 
              ma capacité à répondre aux exigences du secteur informatique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Développement d'Applications",
                  description: "Conception et réalisation de solutions logicielles innovantes, en respectant les standards de qualité et les bonnes pratiques du développement.",
                  level: "Niveau 2 validé"
                },
                {
                  title: "Optimisation Logicielle",
                  description: "Analyse et amélioration des performances applicatives, renforcement de la sécurité et optimisation de la maintenabilité du code.",
                  level: "Niveau 2 validé"
                },
                {
                  title: "Administration Système",
                  description: "Configuration et maintenance de systèmes informatiques complexes, avec focus sur la sécurité et la performance.",
                  level: "Niveau 2 validé"
                },
                {
                  title: "Gestion des Données",
                  description: "Élaboration et implémentation de solutions de stockage efficaces, garantissant l'intégrité et l'accessibilité des données.",
                  level: "Niveau 2 validé"
                },
                {
                  title: "Gestion de Projet",
                  description: "Organisation et supervision de projets informatiques, de la conception à la livraison finale.",
                  level: "Niveau 2 validé"
                },
                {
                  title: "Travail en Équipe",
                  description: "Contribution active aux projets collectifs et intégration efficace dans les équipes de développement.",
                  level: "Niveau 2 validé"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Analyse Détaillée des Compétences</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Développement d'Applications</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Ma formation m'a permis de maîtriser l'ensemble du cycle de développement logiciel. 
                  De l'analyse des besoins à la mise en production, je sais créer des applications 
                  performantes et adaptées aux utilisateurs, en utilisant les technologies appropriées 
                  et en suivant les meilleures pratiques du secteur.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Réalisations Concrètes</h4>
                  <ul className="list-disc pl-6 space-y-4 text-gray-600">
                    <li className="hover:text-indigo-600 transition-colors">
                      Application Scholaro : Développement complet d'une solution de gestion académique en HTML, CSS et PHP
                    </li>
                    <li className="hover:text-indigo-600 transition-colors">
                      Interfaces Web : Création d'expériences utilisateur intuitives avec les technologies front-end modernes
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences Techniques Validées</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "AC 1.1 : Analyse et implémentation des spécifications techniques",
                      "AC 1.2 : Conception d'interfaces ergonomiques et accessibles",
                      "AC 1.3 : Application des standards de développement",
                      "AC 1.4 : Mise en place de tests qualité",
                      "AC 5.2 : Analyse approfondie des besoins utilisateurs",
                      "AC 5.3 : Évaluation de la faisabilité technique",
                      "AC 6.3 : Intégration efficace en équipe"
                    ].map((skill, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Optimisation Logicielle</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  J'ai développé une expertise dans l'amélioration des applications existantes, 
                  en me concentrant sur trois aspects clés : la performance, la sécurité et la 
                  maintenabilité. Cette compétence inclut l'analyse approfondie du code, 
                  l'identification des points d'amélioration et la mise en œuvre de solutions optimisées.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Réalisations Concrètes</h4>
                  <p className="text-gray-600">Projet Trains : Optimisation algorithmique pour la gestion efficace des itinéraires ferroviaires</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compétences Techniques Validées</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "AC 1.1 : Développement de solutions techniques efficaces",
                      "AC 1.4 : Création d'interfaces utilisateur optimisées",
                      "AC 2.3 : Application des concepts mathématiques en programmation",
                      "AC 5.1 : Compréhension approfondie des besoins clients",
                      "AC 6.4 : Collaboration efficace en équipe"
                    ].map((skill, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors">
                        {skill}
                      </li>
                    ))}
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