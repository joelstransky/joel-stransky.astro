# AGENTS.md

## Build Commands

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production (runs astro check + build)
- `pnpm run preview` - Preview production build
- `pnpm run astro check` - Type checking

## Code Style Guidelines

### Imports

- Use ES6 imports/exports
- Import React components: `import React from 'react'`
- Astro components: use frontmatter imports
- Group imports: external libraries first, then internal modules

### Formatting

- Use Prettier with astro plugin
- 2-space indentation
- No trailing semicolons in Astro components
- Use single quotes for strings

### TypeScript

- Strict mode enabled
- Use interfaces for component props
- Prefer `React.FC` for React components
- Use `const` for variables, `let` only when necessary

### Naming Conventions

- Components: PascalCase
- Functions/variables: camelCase
- Files: PascalCase for components, kebab-case for utilities
- CSS classes: Tailwind utility classes only

### Error Handling

- Use try/catch for async operations
- Validate props with TypeScript interfaces
- Handle loading states in React components

### Astro Specific

- Use `---` frontmatter for server-side code
- Import assets via `astro:assets`
- Use `Image` component for optimized images
- MDX files for article content
