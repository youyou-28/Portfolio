import React from 'react';
import { Biography } from './Biography';
import { education } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div 
            ref={imageRef}
            className={`${
              imageInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1544207763-2872e5eb9b78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer workspace"
              className="rounded-lg shadow-lg mb-12 lg:mb-0 transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div ref={contentRef}>
            <Biography isInView={contentInView} />
            <div className={`${
              contentInView ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Formation</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 transition-all hover:pl-6 ${
                      contentInView ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${400 + (index * 100)}ms` }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
                    {edu.specialization && (
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.specialization}</p>
                    )}
                    <p className="text-indigo-600 dark:text-indigo-400 mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}