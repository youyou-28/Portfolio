import React from 'react';
import { Github, Linkedin, Mail, File } from 'lucide-react';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">{profile.name}</span>
            <span className="block text-indigo-600 mt-2">{profile.title}</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            {profile.objective}
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Me contacter
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Voir mes projets
            </a>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href={`https://github.com/${profile.social.github}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={`https://linkedin.com/in/${profile.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href={profile.social.cv}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <File className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}