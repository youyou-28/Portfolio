import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Check if we're coming back from a project page
    if (location.state?.fromProject) {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}