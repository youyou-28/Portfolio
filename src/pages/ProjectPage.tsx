import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/profile';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour au portfolio
        </Link>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose prose-indigo max-w-none">
          {project.detailedDescription && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description détaillée</h2>
              <p className="text-gray-600">{project.detailedDescription}</p>
            </div>
          )}

          {project.features && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Défis</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-gray-600">{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Résultats</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="text-gray-600">{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {project.skills && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compétences travaillées</h2>
              {project.skills.map((skillGroup, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {skillGroup.items.map((skill, j) => (
                      <li key={j} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {project.learningOutcomes && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apprentissages critiques</h2>
              <div className="space-y-8">
                {project.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-indigo-600 mb-2">{outcome.code}</h3>
                    <p className="text-gray-900 font-medium mb-2">{outcome.description}</p>
                    <p className="text-gray-600">{outcome.achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}