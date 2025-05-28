import React from 'react';
import { Github, Linkedin, Mail, File } from 'lucide-react';
import { profile } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation({ triggerOnce: true });
  const { ref: socialsRef, isInView: socialsInView } = useScrollAnimation({ triggerOnce: true });

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center" ref={heroRef}>
          <h1 className={`text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 ${
            heroInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <span className="block">{profile.name}</span>
            <span className="block text-indigo-600 dark:text-indigo-400 mt-2">{profile.title}</span>
          </h1>
          <p className={`mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
            heroInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
          }`}>
            {profile.objective}
          </p>
          <div 
            ref={buttonsRef}
            className={`mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ${
              buttonsInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Me contacter
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all transform hover:scale-105"
            >
              Voir mes projets
            </a>
          </div>
          <div 
            ref={socialsRef}
            className={`mt-12 flex justify-center space-x-6 ${
              socialsInView ? 'animate-fade-in animate-delay-500' : 'opacity-0'
            }`}
          >
            <a 
              href={`https://github.com/${profile.social.github}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={`https://linkedin.com/in/${profile.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href={profile.social.cv}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
            >
              <File className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}