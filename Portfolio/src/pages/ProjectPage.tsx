import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/profile';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

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
    <div className="min-h-screen bg-gray-50 py-24">
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
          <p className="text-lg text-gray-600 mb-8">{project.description}</p>

          {project.highlights && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Points clés du projet</h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}