# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**IMPORTANT:** This project uses **pnpm** as the package manager. Always use `pnpm` instead of `npm`.

**Development server:**
```bash
pnpm dev
```
Starts Vite dev server with HMR at http://localhost:5173

**Build:**
```bash
pnpm build
```
Compiles TypeScript and builds production bundle to `dist/`

**Linting:**
```bash
pnpm lint          # Check for linting errors
```

**Formatting:**
```bash
pnpm format        # Format all files with Prettier
pnpm format:check  # Check formatting without modifying files
```

**Preview production build:**
```bash
pnpm preview
```

## Tech Stack

- **React 19** with TypeScript
- **Vite** - Build tool with SWC for Fast Refresh
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **Motion** (v12) - Animation library for smooth transitions
- **ESLint + Prettier** - Code quality and formatting

## Project Architecture

### Concept Overview

My Bento is an interactive personal portfolio combining a digital identity card and creative experimentation space, inspired by bento.me. The site uses a "bento grid" layout with four main sections organized as animated cards.

**Target audience:** Recruiters, potential clients, creative developer community

### Four Main Sections

1. **Socials** - Social media links, professional profiles (GitHub, LinkedIn), contact methods
2. **Projects** - Personal projects, enterprise work, case studies and demos
3. **Studies** - Academic/professional background, learning journey, tech stack
4. **Lab** (central focus) - Experimental creative space featuring:
   - Mini creative projects
   - Advanced animations and transitions
   - Shaders and visual effects
   - 3D experiences
   - Artistic and technical explorations

### Planned Code Structure

The project will follow this organization (some directories to be created):

```
src/
├── components/     # Reusable React components
├── pages/          # Main pages (Home, Lab, etc.)
├── data/           # Data files (Lab experiments, projects, etc.)
├── styles/         # Custom Tailwind styles if needed
├── utils/          # Utility functions
└── assets/         # Images, videos, resources
```

Currently the project is in early stages with basic setup in `src/App.tsx` and `src/main.tsx`.

### Lab System Architecture

The Lab is the centerpiece and requires a flexible system to:
- List and categorize creative experiments
- Dynamically load different types of content (embedded, iframe, external links)
- Allow easy addition of new experiments
- Provide smooth transitions and loading

**Suggested data format for experiments** (to be implemented in `src/data/`):
```json
{
  "experiments": [
    {
      "id": "exp-001",
      "title": "Experiment title",
      "description": "Short description",
      "type": "embedded|external|iframe",
      "url": "...",
      "thumbnail": "...",
      "tags": ["shader", "3D", "animation"]
    }
  ]
}
```

## Design Principles

### Bento Grid Layout
- Animated card grid system
- Intuitive navigation between sections
- Smooth interactions and transitions
- Clear visual hierarchy

### User Experience
- Advanced interactivity throughout
- Polished transitions and animations
- Optimized loading states
- Unconventional but intuitive navigation

### Visual Identity
- Modern and clean aesthetic
- Balance between professionalism and creativity
- Lab section as the focal point

## Implementation Guidelines

### Animation Strategy

Use Motion library for:
- Section transitions
- Bento card animations
- Micro-interactions
- Page transitions
- Scroll-based animations

### Performance Considerations

Key focus areas:
- Lazy loading for Lab experiments
- Asset optimization (images, videos)
- Code splitting by section
- Smart preloading strategies

## Development Roadmap

### Phase 1: Foundations
- [ ] Base site structure
- [ ] Main bento grid layout
- [ ] Section navigation
- [ ] Basic design system

### Phase 2: Content Sections
- [ ] Socials section
- [ ] Projects section
- [ ] Studies section
- [ ] Initial content integration

### Phase 3: Lab (Priority)
- [ ] Dynamic experiment loading system
- [ ] Lab interface
- [ ] First set of creative experiments
- [ ] Lab navigation system

### Phase 4: Polish
- [ ] Advanced animations and transitions
- [ ] Performance optimizations
- [ ] Testing and debugging
- [ ] Deployment

## Project Philosophy

My Bento is not just a portfolio - it's a living space that evolves with skills and creativity. The Lab in particular should reflect technical curiosity and willingness to explore the boundaries of creative web development.

Each section should tell a story and create a memorable experience for visitors.
