# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript portfolio website showcasing personal projects. The site is deployed at https://younes-nedjar.netlify.app/

## Commands

### Development
```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Build Tool**: Vite 5.4
- **Framework**: React 18.3 with TypeScript
- **Routing**: React Router v6 (client-side SPA)
- **Styling**: Tailwind CSS (utility-first)
- **Icons**: Lucide React

### Project Structure
- **Entry Points**: 
  - `src/main.tsx` → React root
  - `src/App.tsx` → Router configuration (2 routes: `/` and `/project/:slug`)
  
- **Pages** (`src/pages/`):
  - `HomePage`: Landing page with sections (Hero, About, Portfolio, Skills, Contact)
  - `ProjectPage`: Dynamic project detail pages

- **Components** (`src/components/`): Single-responsibility UI components
  
- **Data Flow**:
  - All content centralized in `src/data/profile.ts`
  - No global state management (simple prop drilling)
  - Projects typed with `src/types/project.ts` interface

### Key Patterns
- **Dynamic Routing**: Project slugs generated from titles
- **Responsive Design**: Mobile-first with Tailwind breakpoints
- **Scroll Management**: Custom `useScrollPosition` hook for header effects
- **Type Safety**: Comprehensive TypeScript types for all data structures
- **French Localization**: UI text in French

### Development Notes
- When adding new projects, update `src/data/profile.ts`
- Project images go in `assets/images/`
- All components are functional with hooks
- No testing framework currently configured