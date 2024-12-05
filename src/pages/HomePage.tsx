import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

export function HomePage() {
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