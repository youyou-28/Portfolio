import React from 'react';
import { projects } from '../data/profile';
import { ProjectCard } from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Portfolio() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 ${
            titleInView ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          Mes Projets
        </h2>
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                gridInView ? 'animate-scale-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}