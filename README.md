# My Bento

An interactive personal portfolio combining a digital identity card and creative experimentation space, inspired by
bento.me. Built with modern web technologies and featuring a unique "bento grid" layout with animated cards.

## Overview

My Bento showcases professional work, personal projects, and creative experiments through four main sections organized
in an intuitive grid layout. The centerpiece is the **Lab** — an experimental creative space featuring advanced
animations, shaders, 3D experiences, and artistic explorations.

**Target audience:** Recruiters, potential clients, and the creative developer community.

## Features

### Four Main Sections

1. **Socials** - Social media links, professional profiles (GitHub, LinkedIn), and contact methods
2. **Projects** - Personal projects, enterprise work, case studies, and demos
3. **Studies** - Academic/professional background, learning journey, and tech stack
4. **Lab** - Experimental creative space featuring:
    - Mini creative projects
    - Advanced animations and transitions
    - Shaders and visual effects
    - 3D experiences
    - Artistic and technical explorations

### Design Highlights

- **Bento Grid Layout** - Animated card grid system with intuitive navigation
- **Advanced Interactivity** - Smooth transitions and polished animations throughout
- **Modern Aesthetic** - Balance between professionalism and creativity
- **Performance Optimized** - Lazy loading, code splitting, and smart preloading

## Tech Stack

- **React 19** with TypeScript
- **Vite** - Build tool with SWC for Fast Refresh
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **Motion** (v12) - Animation library for smooth transitions
- **GSAP** - Advanced animation capabilities
- **ESLint + Prettier** - Code quality and formatting

## Getting Started

### Prerequisites

This project uses **pnpm** as the package manager. Make sure you have it installed:

```bash
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/thibautlfr/my-bento.git
cd my-bento

# Install dependencies
pnpm install
```

### Development

Start the development server with HMR at http://localhost:5173:

```bash
pnpm dev
```

### Build

Compile TypeScript and build production bundle to `dist/`:

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Code Quality

```bash
# Check for linting errors
pnpm lint

# Format all files with Prettier
pnpm format

# Check formatting without modifying files
pnpm format:check
```

## Project Structure

```
src/
├── components/     # Reusable React components
│   ├── features/   # Feature-specific components
│   ├── layout/     # Layout components
│   └── ui/         # UI components
├── pages/          # Main pages (Home, Lab, etc.)
├── data/           # Data files (Lab experiments, projects, etc.)
├── types/          # TypeScript type definitions
├── styles/         # Custom styles
└── assets/         # Images, videos, resources
```

## Project Philosophy

My Bento is not just a portfolio — it's a living space that evolves with skills and creativity. The Lab in particular
reflects technical curiosity and willingness to explore the boundaries of creative web development.

Each section tells a story and creates a memorable experience for visitors.