import React from 'react';
import { skills, interests } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation();
  const { ref: interestsRef, isInView: interestsInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 ${
            titleInView ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          Compétences & Intérêts
        </h2>
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all hover:shadow-lg ${
                skillsInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out ${
                          skillsInView ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: skillsInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={interestsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all hover:shadow-lg hover:scale-105 ${
                interestsInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {interest.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}