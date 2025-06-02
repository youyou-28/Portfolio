import React from 'react';
import { Biography } from './Biography';
import { education } from '../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544207763-2872e5eb9b78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer workspace"
              className="rounded-lg shadow-lg mb-12 lg:mb-0"
            />
          </div>
          <div>
            <Biography />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Formation</h2>
              <div className="space-y-8">
                <a href={profile.education.link}                  
                  target="_blank"                  
                  rel="noopener noreferrer"                   
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"></a>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 mt-1">{edu.institution}</p>
                    {edu.specialization && (
                      <p className="text-gray-600 mt-1">{edu.specialization}</p>
                    )}
                    <p className="text-indigo-600 mt-1">{edu.period}</p>
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
