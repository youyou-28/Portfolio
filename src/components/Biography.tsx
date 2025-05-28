import React from 'react';

interface BiographyProps {
  isInView?: boolean;
}

export function Biography({ isInView = true }: BiographyProps) {
  return (
    <div className={`mb-16 ${
      isInView ? 'animate-fade-in-up' : 'opacity-0'
    }`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">À propos de moi</h2>
      <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
        <p className={`leading-relaxed ${
          isInView ? 'animate-fade-in animate-delay-100' : 'opacity-0'
        }`}>
          Je m'appelle Younes Nedjar et je suis étudiant en deuxième année de BUT Informatique à Montpellier, 
          où j'ai acquis une solide maîtrise de langages comme Java, Python, HTML, CSS et PHP grâce à des projets concrets. 
          Ces expériences m'ont permis de développer des compétences en conception UI/UX, en gestion de projet, 
          et en collaboration avec divers intervenants.
        </p>
        <p className={`leading-relaxed ${
          isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'
        }`}>
          Passionné par l'innovation et attiré par des projets ambitieux, j'aime relever des défis techniques 
          en équipe en m'appuyant sur les méthodes agiles. Curieux, dynamique et adaptable, je suis motivé 
          par les environnements en constante évolution, où je peux apporter mon énergie et mes compétences.
        </p>
        <div className={`mt-8 ${
          isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vision & Objectifs</h3>
          <p className="leading-relaxed">
            Après l'obtention de mon BUT Informatique, j'aspire à poursuivre mes études en école d'ingénieur 
            pour approfondir mes connaissances et développer une expertise plus poussée dans le domaine informatique. 
            Mon objectif est de contribuer à des projets innovants qui ont si possible un impact positif sur la société.
          </p>
        </div>
      </div>
    </div>
  );
}