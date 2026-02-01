# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal homepage built with Next.js 15 (RC), React 19 (RC), TypeScript, and TailwindCSS. The site showcases a software architect's portfolio with sections for About, Skillset, and Projects. It uses Tailwind UI and Aceternity UI components for the design system.

## Development Commands

### Local Development
```sh
npm install          # Install dependencies
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production (outputs to .next/standalone)
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Docker
```sh
docker build -t home-web .                    # Build Docker image
docker run -p 3000:3000 home-web              # Run container
```

The Dockerfile uses multi-stage builds with standalone output mode for optimized production images.

## Architecture

### Directory Structure

- **`src/app/`**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with metadata and global Layout component
  - `page.tsx`: Homepage with Hero, BentoGrid, GoogleGemini, and CallToAction sections
  - `about/`, `projects/`, `skillset/`, `imprint/`: Route-specific pages
  - `skillset/[[...slug]]/`: Dynamic catch-all route with tab-based navigation

- **`src/components/`**: Reusable UI components
  - `Layout.tsx`: Main layout wrapper with Header and Footer
  - `Header.tsx`: Complex responsive header with scroll-based animations, dynamic avatar sizing, and mobile/desktop navigation variants
  - `Footer.tsx`: Site footer
  - `buttons/`, `icons/`, `social/`: Categorized component subfolders

- **`src/lib/`**: Utility functions
  - `cn.ts`: Utility combining `clsx` and `tailwind-merge` for conditional class names
  - `clamp.ts`: Math utility
  - `formatDate.ts`: Date formatting

- **`src/images/`**: Static image assets organized by type (badges, logos, abstract, photos)

- **`src/styles/`**: Global styles (mainly `tailwind.css`)

### Key Technologies

- **Next.js 15 RC** with App Router and standalone output mode
- **React 19 RC** with experimental React Compiler enabled (`babel-plugin-react-compiler`)
- **TypeScript** with path aliases (`@/*` maps to `src/*`)
- **TailwindCSS** with custom typography plugin and color variable system
- **Headless UI** for accessible components (Popover, Transitions)
- **Framer Motion** for animations
- **Sharp** for image optimization

### Styling Patterns

- Uses TailwindCSS with custom configuration in `tailwind.config.ts`
- Custom typography styles defined in `typography.ts` (applied via `@tailwindcss/typography` plugin)
- Dark theme with zinc color palette (bg-zinc-900, text-zinc-200, etc.)
- Custom CSS variables for dynamic header animations (`--header-height`, `--avatar-image-transform`, etc.)
- The `cn()` utility (from `src/lib/cn.ts`) should be used for conditional className composition

### Component Patterns

- Client components use `'use client'` directive (e.g., `Header.tsx`)
- Server components by default (Next.js App Router)
- Type-safe component props using TypeScript
- Responsive design with mobile/desktop variants (e.g., `MobileNavigation` vs `DesktopNavigation`)

### Configuration Files

- **`next.config.mjs`**: Enables standalone output, experimental React Compiler, and MDX support
- **`tsconfig.json`**: Strict TypeScript with path aliases
- **`tailwind.config.ts`**: Custom screens, fontSize, animations, and typography plugin
- **`.env`**: Environment variables (not committed, see `.env` file for local config)

## CI/CD

The project uses CircleCI for automated builds and deployment:

- **Build Jobs**: Builds Docker images for both ARM (`build_arm`) and AMD64 (`build_amd64`) architectures
- **Deploy Job**: Automatically updates the Kubernetes Helm values in a separate `cloud-config` repository
- Images are pushed to Docker Hub as `mbuse0/home-web:${CIRCLE_SHA1}-{arm,amd64}`
- Deployment updates `helm/home/web/Values.yaml` with the new image tag

## Important Notes

- The project uses **React 19 RC** and **Next.js 15 RC** - be aware of potential API changes
- No testing framework is currently configured
- Images are optimized using Sharp and served via `next/image`
- The standalone build output is used for Docker containerization
- License is MIT, but includes Tailwind UI components which have separate licensing terms
