import type { Skill, LearningPath } from '../types';

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'library' },
  { id: 'tailwindcss', name: 'Tailwind CSS', category: 'framework' },
  { id: 'nextjs', name: 'Next.js', category: 'framework' },
  { id: 'typescript', name: 'TypeScript', category: 'language' },
  { id: 'react-query', name: 'TanStack Query', category: 'library' },
  { id: 'prisma', name: 'Prisma', category: 'tool' },
  { id: 'drizzle', name: 'Drizzle ORM', category: 'tool' },
  { id: 'better-auth', name: 'Better Auth', category: 'library' },
  { id: 'dodo-payments', name: 'Dodo Payments', category: 'library' },
  { id: 'shadcn-ui', name: 'shadcn/ui', category: 'library' },
  { id: 'aceternity-ui', name: 'Aceternity UI', category: 'library' },
  { id: 'supermemory', name: 'Supermemory', category: 'library' },
  { id: 'framer-motion', name: 'Framer Motion', category: 'library' },
  { id: 'supabase', name: 'Supabase', category: 'cloud' },
  { id: 'firebase', name: 'Firebase', category: 'cloud' },
  { id: 'aws', name: 'AWS', category: 'cloud' },
  { id: 'azure', name: 'Azure', category: 'cloud' },
  { id: 'vercel', name: 'Vercel', category: 'cloud' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'cloud' },
  { id: 'docker', name: 'Docker', category: 'tool' },
  { id: 'redis', name: 'Redis', category: 'tool' },
  { id: 'mongodb', name: 'MongoDB', category: 'database' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database' },
  { id: 'nodejs', name: 'Node.js', category: 'runtime' },
  { id: 'http', name: 'HTTP', category: 'protocol' },
  { id: 'bun', name: 'Bun', category: 'runtime' },
  { id: 'rest', name: 'REST API', category: 'protocol' },
  { id: 'linux', name: 'Linux', category: 'tool' },
  { id: 'fastapi', name: 'FastAPI', category: 'framework' },
  { id: 'jwt', name: 'JWT', category: 'library' },
  { id: 'zod', name: 'Zod', category: 'library' },
  { id: 'trpc', name: 'tRPC', category: 'framework' },
  { id: 'zustand', name: 'Zustand', category: 'library' },
];

export const skillPaths: Record<string, LearningPath> = {
  'react': {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    steps: [
      {
        id: 'react-quick-start',
        title: 'Quick Start',
        description: 'Create your first React component and learn the basics.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Quick Start',
            url: 'https://react.dev/learn',
            source: 'React',
          },
          {
            title: 'Tutorial: Tic-Tac-Toe',
            url: 'https://react.dev/learn/tutorial-tic-tac-toe',
            source: 'React',
          },
          {
            title: 'Thinking in React',
            url: 'https://react.dev/learn/thinking-in-react',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-describing-ui',
        title: 'Describing the UI',
        description: 'Learn to write JSX and create components.',
        order: 2,
        prerequisite: 'react-quick-start',
        resources: [
          {
            title: 'Your First Component',
            url: 'https://react.dev/learn/your-first-component',
            source: 'React',
          },
          {
            title: 'Importing and Exporting Components',
            url: 'https://react.dev/learn/importing-and-exporting-components',
            source: 'React',
          },
          {
            title: 'Writing Markup with JSX',
            url: 'https://react.dev/learn/writing-markup-with-jsx',
            source: 'React',
          },
          {
            title: 'JavaScript in JSX with Curly Braces',
            url: 'https://react.dev/learn/javascript-in-jsx-with-curly-braces',
            source: 'React',
          },
          {
            title: 'Passing Props to a Component',
            url: 'https://react.dev/learn/passing-props-to-a-component',
            source: 'React',
          },
          {
            title: 'Conditional Rendering',
            url: 'https://react.dev/learn/conditional-rendering',
            source: 'React',
          },
          {
            title: 'Rendering Lists',
            url: 'https://react.dev/learn/rendering-lists',
            source: 'React',
          },
          {
            title: 'Keeping Components Pure',
            url: 'https://react.dev/learn/keeping-components-pure',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-interactivity',
        title: 'Adding Interactivity',
        description: 'Handle events and update the UI with state.',
        order: 3,
        prerequisite: 'react-describing-ui',
        resources: [
          {
            title: 'Responding to Events',
            url: 'https://react.dev/learn/responding-to-events',
            source: 'React',
          },
          {
            title: 'State: A Component\'s Memory',
            url: 'https://react.dev/learn/state-a-components-memory',
            source: 'React',
          },
          {
            title: 'Render and Commit',
            url: 'https://react.dev/learn/render-and-commit',
            source: 'React',
          },
          {
            title: 'State as a Snapshot',
            url: 'https://react.dev/learn/state-as-a-snapshot',
            source: 'React',
          },
          {
            title: 'Queueing a Series of State Updates',
            url: 'https://react.dev/learn/queueing-a-series-of-state-updates',
            source: 'React',
          },
          {
            title: 'Updating Objects in State',
            url: 'https://react.dev/learn/updating-objects-in-state',
            source: 'React',
          },
          {
            title: 'Updating Arrays in State',
            url: 'https://react.dev/learn/updating-arrays-in-state',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-state-management',
        title: 'Managing State',
        description: 'Structure state and share it between components.',
        order: 4,
        prerequisite: 'react-interactivity',
        resources: [
          {
            title: 'Reacting to Input with State',
            url: 'https://react.dev/learn/reacting-to-input-with-state',
            source: 'React',
          },
          {
            title: 'Choosing the State Structure',
            url: 'https://react.dev/learn/choosing-the-state-structure',
            source: 'React',
          },
          {
            title: 'Sharing State Between Components',
            url: 'https://react.dev/learn/sharing-state-between-components',
            source: 'React',
          },
          {
            title: 'Preserving and Resetting State',
            url: 'https://react.dev/learn/preserving-and-resetting-state',
            source: 'React',
          },
          {
            title: 'Extracting State Logic into a Reducer',
            url: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
            source: 'React',
          },
          {
            title: 'Passing Data Deeply with Context',
            url: 'https://react.dev/learn/passing-data-deeply-with-context',
            source: 'React',
          },
          {
            title: 'Scaling Up with Reducer and Context',
            url: 'https://react.dev/learn/scaling-up-with-reducer-and-context',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-escape-hatches',
        title: 'Escape Hatches',
        description: 'Work with refs, effects, and external systems.',
        order: 5,
        prerequisite: 'react-state-management',
        resources: [
          {
            title: 'Referencing Values with Refs',
            url: 'https://react.dev/learn/referencing-values-with-refs',
            source: 'React',
          },
          {
            title: 'Manipulating the DOM with Refs',
            url: 'https://react.dev/learn/manipulating-the-dom-with-refs',
            source: 'React',
          },
          {
            title: 'Synchronizing with Effects',
            url: 'https://react.dev/learn/synchronizing-with-effects',
            source: 'React',
          },
          {
            title: 'You Might Not Need an Effect',
            url: 'https://react.dev/learn/you-might-not-need-an-effect',
            source: 'React',
          },
          {
            title: 'Lifecycle of Reactive Effects',
            url: 'https://react.dev/learn/lifecycle-of-reactive-effects',
            source: 'React',
          },
          {
            title: 'Separating Events from Effects',
            url: 'https://react.dev/learn/separating-events-from-effects',
            source: 'React',
          },
          {
            title: 'Removing Effect Dependencies',
            url: 'https://react.dev/learn/removing-effect-dependencies',
            source: 'React',
          },
          {
            title: 'Reusing Logic with Custom Hooks',
            url: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-hooks-reference',
        title: 'Hooks Reference',
        description: 'Deep dive into all built-in React Hooks.',
        order: 6,
        prerequisite: 'react-escape-hatches',
        resources: [
          {
            title: 'useState',
            url: 'https://react.dev/reference/react/useState',
            source: 'React',
          },
          {
            title: 'useEffect',
            url: 'https://react.dev/reference/react/useEffect',
            source: 'React',
          },
          {
            title: 'useContext',
            url: 'https://react.dev/reference/react/useContext',
            source: 'React',
          },
          {
            title: 'useRef',
            url: 'https://react.dev/reference/react/useRef',
            source: 'React',
          },
          {
            title: 'useMemo',
            url: 'https://react.dev/reference/react/useMemo',
            source: 'React',
          },
          {
            title: 'useCallback',
            url: 'https://react.dev/reference/react/useCallback',
            source: 'React',
          },
          {
            title: 'useReducer',
            url: 'https://react.dev/reference/react/useReducer',
            source: 'React',
          },
          {
            title: 'useId',
            url: 'https://react.dev/reference/react/useId',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-19-features',
        title: 'React 19 Features',
        description: 'Learn the new features in React 19.',
        order: 7,
        prerequisite: 'react-hooks-reference',
        resources: [
          {
            title: 'use',
            url: 'https://react.dev/reference/react/use',
            source: 'React',
          },
          {
            title: 'useActionState',
            url: 'https://react.dev/reference/react/useActionState',
            source: 'React',
          },
          {
            title: 'useFormStatus',
            url: 'https://react.dev/reference/react-dom/hooks/useFormStatus',
            source: 'React',
          },
          {
            title: 'useOptimistic',
            url: 'https://react.dev/reference/react/useOptimistic',
            source: 'React',
          },
          {
            title: 'useTransition',
            url: 'https://react.dev/reference/react/useTransition',
            source: 'React',
          },
          {
            title: 'useDeferredValue',
            url: 'https://react.dev/reference/react/useDeferredValue',
            source: 'React',
          },
        ],
      },
      {
        id: 'react-advanced-patterns',
        title: 'Advanced Patterns',
        description: 'Performance optimization and advanced component patterns.',
        order: 8,
        prerequisite: 'react-19-features',
        resources: [
          {
            title: 'memo',
            url: 'https://react.dev/reference/react/memo',
            source: 'React',
          },
          {
            title: 'lazy',
            url: 'https://react.dev/reference/react/lazy',
            source: 'React',
          },
          {
            title: 'Suspense',
            url: 'https://react.dev/reference/react/Suspense',
            source: 'React',
          },
          {
            title: 'forwardRef',
            url: 'https://react.dev/reference/react/forwardRef',
            source: 'React',
          },
          {
            title: 'createPortal',
            url: 'https://react.dev/reference/react-dom/createPortal',
            source: 'React',
          },
          {
            title: 'Profiler',
            url: 'https://react.dev/reference/react/Profiler',
            source: 'React',
          },
          {
            title: 'Error Boundaries',
            url: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary',
            source: 'React',
          },
        ],
      },
    ],
  },
  'tailwindcss': {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    steps: [
      {
        id: 'tailwind-installation',
        title: 'Installation',
        description: 'Set up Tailwind CSS in your project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Installation Guide',
            url: 'https://tailwindcss.com/docs/installation',
            source: 'Tailwind CSS',
          },
          {
            title: 'Framework Guides',
            url: 'https://tailwindcss.com/docs/installation/framework-guides',
            source: 'Tailwind CSS',
          },
        ],
      },
      {
        id: 'tailwind-core-concepts',
        title: 'Core Concepts',
        description: 'Understand utility-first fundamentals and responsive design.',
        order: 2,
        prerequisite: 'tailwind-installation',
        resources: [
          {
            title: 'Utility-First Fundamentals',
            url: 'https://tailwindcss.com/docs/utility-first',
            source: 'Tailwind CSS',
          },
          {
            title: 'Responsive Design',
            url: 'https://tailwindcss.com/docs/responsive-design',
            source: 'Tailwind CSS',
          },
          {
            title: 'Hover, Focus & Other States',
            url: 'https://tailwindcss.com/docs/hover-focus-and-other-states',
            source: 'Tailwind CSS',
          },
          {
            title: 'Dark Mode',
            url: 'https://tailwindcss.com/docs/dark-mode',
            source: 'Tailwind CSS',
          },
        ],
      },
      {
        id: 'tailwind-customization',
        title: 'Customization',
        description: 'Configure and extend Tailwind to match your design system.',
        order: 3,
        prerequisite: 'tailwind-core-concepts',
        resources: [
          {
            title: 'Configuration',
            url: 'https://tailwindcss.com/docs/configuration',
            source: 'Tailwind CSS',
          },
          {
            title: 'Theme Configuration',
            url: 'https://tailwindcss.com/docs/theme',
            source: 'Tailwind CSS',
          },
          {
            title: 'Customizing Colors',
            url: 'https://tailwindcss.com/docs/customizing-colors',
            source: 'Tailwind CSS',
          },
          {
            title: 'Adding Custom Styles',
            url: 'https://tailwindcss.com/docs/adding-custom-styles',
            source: 'Tailwind CSS',
          },
        ],
      },
      {
        id: 'tailwind-layout',
        title: 'Layout & Spacing',
        description: 'Master flexbox, grid, and spacing utilities.',
        order: 4,
        prerequisite: 'tailwind-core-concepts',
        resources: [
          {
            title: 'Flexbox',
            url: 'https://tailwindcss.com/docs/flex',
            source: 'Tailwind CSS',
          },
          {
            title: 'Grid',
            url: 'https://tailwindcss.com/docs/grid-template-columns',
            source: 'Tailwind CSS',
          },
          {
            title: 'Padding',
            url: 'https://tailwindcss.com/docs/padding',
            source: 'Tailwind CSS',
          },
          {
            title: 'Margin',
            url: 'https://tailwindcss.com/docs/margin',
            source: 'Tailwind CSS',
          },
        ],
      },
    ],
  },
  'nextjs': {
    id: 'nextjs',
    name: 'Next.js',
    description: 'React framework for production',
    steps: [
      {
        id: 'nextjs-getting-started',
        title: 'Getting Started',
        description: 'Set up your first Next.js application.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Installation',
            url: 'https://nextjs.org/docs/getting-started/installation',
            source: 'Next.js',
          },
          {
            title: 'Project Structure',
            url: 'https://nextjs.org/docs/getting-started/project-structure',
            source: 'Next.js',
          },
        ],
      },
      {
        id: 'nextjs-routing',
        title: 'Routing',
        description: 'File-based routing with the App Router.',
        order: 2,
        prerequisite: 'nextjs-getting-started',
        resources: [
          {
            title: 'Routing Fundamentals',
            url: 'https://nextjs.org/docs/app/building-your-application/routing',
            source: 'Next.js',
          },
          {
            title: 'Defining Routes',
            url: 'https://nextjs.org/docs/app/building-your-application/routing/defining-routes',
            source: 'Next.js',
          },
          {
            title: 'Dynamic Routes',
            url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes',
            source: 'Next.js',
          },
          {
            title: 'Route Groups',
            url: 'https://nextjs.org/docs/app/building-your-application/routing/route-groups',
            source: 'Next.js',
          },
        ],
      },
      {
        id: 'nextjs-rendering',
        title: 'Rendering',
        description: 'Server and client components, streaming.',
        order: 3,
        prerequisite: 'nextjs-routing',
        resources: [
          {
            title: 'Server Components',
            url: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components',
            source: 'Next.js',
          },
          {
            title: 'Client Components',
            url: 'https://nextjs.org/docs/app/building-your-application/rendering/client-components',
            source: 'Next.js',
          },
          {
            title: 'Composition Patterns',
            url: 'https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns',
            source: 'Next.js',
          },
        ],
      },
      {
        id: 'nextjs-data-fetching',
        title: 'Data Fetching',
        description: 'Fetch data in server components and handle caching.',
        order: 4,
        prerequisite: 'nextjs-rendering',
        resources: [
          {
            title: 'Data Fetching & Caching',
            url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/fetching',
            source: 'Next.js',
          },
          {
            title: 'Server Actions',
            url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations',
            source: 'Next.js',
          },
          {
            title: 'Caching',
            url: 'https://nextjs.org/docs/app/building-your-application/caching',
            source: 'Next.js',
          },
        ],
      },
      {
        id: 'nextjs-styling',
        title: 'Styling',
        description: 'CSS Modules, Tailwind, and CSS-in-JS.',
        order: 5,
        prerequisite: 'nextjs-getting-started',
        resources: [
          {
            title: 'CSS Modules',
            url: 'https://nextjs.org/docs/app/building-your-application/styling/css-modules',
            source: 'Next.js',
          },
          {
            title: 'Tailwind CSS',
            url: 'https://nextjs.org/docs/app/building-your-application/styling/tailwind-css',
            source: 'Next.js',
          },
        ],
      },
    ],
  },
  'typescript': {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Typed JavaScript at scale',
    steps: [
      {
        id: 'ts-basics',
        title: 'The Basics',
        description: 'Core TypeScript concepts and type system.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'TypeScript for JavaScript Programmers',
            url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
            source: 'TypeScript',
          },
          {
            title: 'The Basics',
            url: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html',
            source: 'TypeScript',
          },
          {
            title: 'Everyday Types',
            url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'ts-narrowing',
        title: 'Narrowing',
        description: 'Type guards and control flow analysis.',
        order: 2,
        prerequisite: 'ts-basics',
        resources: [
          {
            title: 'Narrowing',
            url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'ts-functions',
        title: 'Functions',
        description: 'Function types, generics, and overloads.',
        order: 3,
        prerequisite: 'ts-narrowing',
        resources: [
          {
            title: 'More on Functions',
            url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'ts-objects',
        title: 'Object Types',
        description: 'Interfaces, type aliases, and object manipulation.',
        order: 4,
        prerequisite: 'ts-functions',
        resources: [
          {
            title: 'Object Types',
            url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'ts-generics',
        title: 'Generics',
        description: 'Creating reusable, type-safe components.',
        order: 5,
        prerequisite: 'ts-objects',
        resources: [
          {
            title: 'Generics',
            url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'ts-utility-types',
        title: 'Utility Types',
        description: 'Built-in type transformations.',
        order: 6,
        prerequisite: 'ts-generics',
        resources: [
          {
            title: 'Utility Types',
            url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
            source: 'TypeScript',
          },
        ],
      },
    ],
  },
  'react-query': {
    id: 'react-query',
    name: 'TanStack Query',
    description: 'Async state management for React',
    steps: [
      {
        id: 'rq-overview',
        title: 'Overview',
        description: 'What TanStack Query solves and when to use it.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Overview',
            url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
            source: 'TanStack Query',
          },
          {
            title: 'Quick Start',
            url: 'https://tanstack.com/query/latest/docs/framework/react/quick-start',
            source: 'TanStack Query',
          },
        ],
      },
      {
        id: 'rq-queries',
        title: 'Queries',
        description: 'Fetching and caching data.',
        order: 2,
        prerequisite: 'rq-overview',
        resources: [
          {
            title: 'Queries',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/queries',
            source: 'TanStack Query',
          },
          {
            title: 'Query Keys',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/query-keys',
            source: 'TanStack Query',
          },
          {
            title: 'Query Functions',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/query-functions',
            source: 'TanStack Query',
          },
        ],
      },
      {
        id: 'rq-mutations',
        title: 'Mutations',
        description: 'Creating, updating, and deleting data.',
        order: 3,
        prerequisite: 'rq-queries',
        resources: [
          {
            title: 'Mutations',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/mutations',
            source: 'TanStack Query',
          },
          {
            title: 'Invalidation from Mutations',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations',
            source: 'TanStack Query',
          },
        ],
      },
      {
        id: 'rq-advanced',
        title: 'Advanced Patterns',
        description: 'Optimistic updates, infinite queries, SSR.',
        order: 4,
        prerequisite: 'rq-mutations',
        resources: [
          {
            title: 'Optimistic Updates',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates',
            source: 'TanStack Query',
          },
          {
            title: 'Infinite Queries',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries',
            source: 'TanStack Query',
          },
          {
            title: 'SSR',
            url: 'https://tanstack.com/query/latest/docs/framework/react/guides/ssr',
            source: 'TanStack Query',
          },
        ],
      },
    ],
  },
  'prisma': {
    id: 'prisma',
    name: 'Prisma',
    description: 'Next-generation Node.js ORM',
    steps: [
      {
        id: 'prisma-quickstart',
        title: 'Quickstart',
        description: 'Set up Prisma with your database.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Quickstart',
            url: 'https://www.prisma.io/docs/getting-started/quickstart-sqlite',
            source: 'Prisma',
          },
          {
            title: 'Setup Prisma',
            url: 'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql',
            source: 'Prisma',
          },
        ],
      },
      {
        id: 'prisma-schema',
        title: 'Prisma Schema',
        description: 'Define your data model.',
        order: 2,
        prerequisite: 'prisma-quickstart',
        resources: [
          {
            title: 'Prisma Schema',
            url: 'https://www.prisma.io/docs/orm/prisma-schema/overview',
            source: 'Prisma',
          },
          {
            title: 'Data Model',
            url: 'https://www.prisma.io/docs/orm/prisma-schema/data-model/models',
            source: 'Prisma',
          },
          {
            title: 'Relations',
            url: 'https://www.prisma.io/docs/orm/prisma-schema/data-model/relations',
            source: 'Prisma',
          },
        ],
      },
      {
        id: 'prisma-client',
        title: 'Prisma Client',
        description: 'Query your database with type safety.',
        order: 3,
        prerequisite: 'prisma-schema',
        resources: [
          {
            title: 'CRUD',
            url: 'https://www.prisma.io/docs/orm/prisma-client/queries/crud',
            source: 'Prisma',
          },
          {
            title: 'Filtering and Sorting',
            url: 'https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting',
            source: 'Prisma',
          },
          {
            title: 'Transactions',
            url: 'https://www.prisma.io/docs/orm/prisma-client/queries/transactions',
            source: 'Prisma',
          },
        ],
      },
      {
        id: 'prisma-migrate',
        title: 'Migrations',
        description: 'Evolve your database schema.',
        order: 4,
        prerequisite: 'prisma-client',
        resources: [
          {
            title: 'Prisma Migrate',
            url: 'https://www.prisma.io/docs/orm/prisma-migrate/getting-started',
            source: 'Prisma',
          },
          {
            title: 'Development and Production',
            url: 'https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production',
            source: 'Prisma',
          },
        ],
      },
    ],
  },
  'drizzle': {
    id: 'drizzle',
    name: 'Drizzle ORM',
    description: 'TypeScript ORM with SQL-like syntax',
    steps: [
      {
        id: 'drizzle-overview',
        title: 'Get Started',
        description: 'Set up Drizzle with your database.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'PostgreSQL',
            url: 'https://orm.drizzle.team/docs/get-started-postgresql',
            source: 'Drizzle',
          },
          {
            title: 'MySQL',
            url: 'https://orm.drizzle.team/docs/get-started-mysql',
            source: 'Drizzle',
          },
          {
            title: 'SQLite',
            url: 'https://orm.drizzle.team/docs/get-started-sqlite',
            source: 'Drizzle',
          },
        ],
      },
      {
        id: 'drizzle-schema',
        title: 'Schema Declaration',
        description: 'Define tables and relations.',
        order: 2,
        prerequisite: 'drizzle-overview',
        resources: [
          {
            title: 'Schema Declaration',
            url: 'https://orm.drizzle.team/docs/sql-schema-declaration',
            source: 'Drizzle',
          },
          {
            title: 'Column Types',
            url: 'https://orm.drizzle.team/docs/column-types/pg',
            source: 'Drizzle',
          },
        ],
      },
      {
        id: 'drizzle-queries',
        title: 'Queries',
        description: 'CRUD operations with Drizzle.',
        order: 3,
        prerequisite: 'drizzle-schema',
        resources: [
          {
            title: 'Select',
            url: 'https://orm.drizzle.team/docs/select',
            source: 'Drizzle',
          },
          {
            title: 'Insert',
            url: 'https://orm.drizzle.team/docs/insert',
            source: 'Drizzle',
          },
          {
            title: 'Update',
            url: 'https://orm.drizzle.team/docs/update',
            source: 'Drizzle',
          },
          {
            title: 'Delete',
            url: 'https://orm.drizzle.team/docs/delete',
            source: 'Drizzle',
          },
        ],
      },
      {
        id: 'drizzle-migrations',
        title: 'Migrations',
        description: 'Generate and run migrations.',
        order: 4,
        prerequisite: 'drizzle-queries',
        resources: [
          {
            title: 'Drizzle Kit',
            url: 'https://orm.drizzle.team/docs/kit-overview',
            source: 'Drizzle',
          },
          {
            title: 'Migrations',
            url: 'https://orm.drizzle.team/docs/migrations',
            source: 'Drizzle',
          },
        ],
      },
    ],
  },
  'zod': {
    id: 'zod',
    name: 'Zod',
    description: 'TypeScript-first schema validation',
    steps: [
      {
        id: 'zod-intro',
        title: 'Introduction',
        description: 'Basic schema creation and validation.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction',
            url: 'https://zod.dev/?id=introduction',
            source: 'Zod',
          },
          {
            title: 'Installation',
            url: 'https://zod.dev/?id=installation',
            source: 'Zod',
          },
          {
            title: 'Basic Usage',
            url: 'https://zod.dev/?id=basic-usage',
            source: 'Zod',
          },
        ],
      },
      {
        id: 'zod-primitives',
        title: 'Primitives',
        description: 'String, number, boolean, and other primitive types.',
        order: 2,
        prerequisite: 'zod-intro',
        resources: [
          {
            title: 'Primitives',
            url: 'https://zod.dev/?id=primitives',
            source: 'Zod',
          },
          {
            title: 'Strings',
            url: 'https://zod.dev/?id=strings',
            source: 'Zod',
          },
          {
            title: 'Numbers',
            url: 'https://zod.dev/?id=numbers',
            source: 'Zod',
          },
        ],
      },
      {
        id: 'zod-objects',
        title: 'Objects & Arrays',
        description: 'Complex schema composition.',
        order: 3,
        prerequisite: 'zod-primitives',
        resources: [
          {
            title: 'Objects',
            url: 'https://zod.dev/?id=objects',
            source: 'Zod',
          },
          {
            title: 'Arrays',
            url: 'https://zod.dev/?id=arrays',
            source: 'Zod',
          },
          {
            title: 'Unions',
            url: 'https://zod.dev/?id=unions',
            source: 'Zod',
          },
        ],
      },
      {
        id: 'zod-advanced',
        title: 'Advanced',
        description: 'Transforms, refinements, and type inference.',
        order: 4,
        prerequisite: 'zod-objects',
        resources: [
          {
            title: 'Type Inference',
            url: 'https://zod.dev/?id=type-inference',
            source: 'Zod',
          },
          {
            title: 'Transforms',
            url: 'https://zod.dev/?id=transform',
            source: 'Zod',
          },
          {
            title: 'Refinements',
            url: 'https://zod.dev/?id=refine',
            source: 'Zod',
          },
        ],
      },
    ],
  },
  'trpc': {
    id: 'trpc',
    name: 'tRPC',
    description: 'End-to-end typesafe APIs',
    steps: [
      {
        id: 'trpc-quickstart',
        title: 'Quickstart',
        description: 'Set up tRPC in your project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Quickstart',
            url: 'https://trpc.io/docs/quickstart',
            source: 'tRPC',
          },
          {
            title: 'Concepts',
            url: 'https://trpc.io/docs/concepts',
            source: 'tRPC',
          },
        ],
      },
      {
        id: 'trpc-routers',
        title: 'Routers & Procedures',
        description: 'Define your API structure.',
        order: 2,
        prerequisite: 'trpc-quickstart',
        resources: [
          {
            title: 'Defining Routers',
            url: 'https://trpc.io/docs/server/routers',
            source: 'tRPC',
          },
          {
            title: 'Procedures',
            url: 'https://trpc.io/docs/server/procedures',
            source: 'tRPC',
          },
          {
            title: 'Context',
            url: 'https://trpc.io/docs/server/context',
            source: 'tRPC',
          },
        ],
      },
      {
        id: 'trpc-client',
        title: 'Client Usage',
        description: 'Call your API from the frontend.',
        order: 3,
        prerequisite: 'trpc-routers',
        resources: [
          {
            title: 'React Query Integration',
            url: 'https://trpc.io/docs/client/react',
            source: 'tRPC',
          },
          {
            title: 'useQuery',
            url: 'https://trpc.io/docs/client/react/useQuery',
            source: 'tRPC',
          },
          {
            title: 'useMutation',
            url: 'https://trpc.io/docs/client/react/useMutation',
            source: 'tRPC',
          },
        ],
      },
      {
        id: 'trpc-advanced',
        title: 'Advanced',
        description: 'Middlewares, subscriptions, error handling.',
        order: 4,
        prerequisite: 'trpc-client',
        resources: [
          {
            title: 'Middlewares',
            url: 'https://trpc.io/docs/server/middlewares',
            source: 'tRPC',
          },
          {
            title: 'Error Handling',
            url: 'https://trpc.io/docs/server/error-handling',
            source: 'tRPC',
          },
          {
            title: 'Authorization',
            url: 'https://trpc.io/docs/server/authorization',
            source: 'tRPC',
          },
        ],
      },
    ],
  },
  'better-auth': {
    id: 'better-auth',
    name: 'Better Auth',
    description: 'Authentication for TypeScript',
    steps: [
      {
        id: 'ba-installation',
        title: 'Installation',
        description: 'Set up Better Auth in your project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Installation',
            url: 'https://www.better-auth.com/docs/installation',
            source: 'Better Auth',
          },
        ],
      },
      {
        id: 'ba-basic-usage',
        title: 'Basic Usage',
        description: 'Configure authentication and handle sessions.',
        order: 2,
        prerequisite: 'ba-installation',
        resources: [
          {
            title: 'Basic Usage',
            url: 'https://www.better-auth.com/docs/basic-usage',
            source: 'Better Auth',
          },
        ],
      },
      {
        id: 'ba-authentication',
        title: 'Authentication',
        description: 'Email/password, social providers, and more.',
        order: 3,
        prerequisite: 'ba-basic-usage',
        resources: [
          {
            title: 'Email & Password',
            url: 'https://www.better-auth.com/docs/authentication/email-password',
            source: 'Better Auth',
          },
          {
            title: 'Social Sign-on',
            url: 'https://www.better-auth.com/docs/authentication/social-sign-on',
            source: 'Better Auth',
          },
        ],
      },
      {
        id: 'ba-plugins',
        title: 'Plugins',
        description: 'Extend functionality with plugins.',
        order: 4,
        prerequisite: 'ba-authentication',
        resources: [
          {
            title: 'Two Factor',
            url: 'https://www.better-auth.com/docs/plugins/two-factor',
            source: 'Better Auth',
          },
          {
            title: 'Organizations',
            url: 'https://www.better-auth.com/docs/plugins/organization',
            source: 'Better Auth',
          },
        ],
      },
    ],
  },
  'dodo-payments': {
    id: 'dodo-payments',
    name: 'Dodo Payments',
    description: 'Global payments infrastructure for developers',
    steps: [
      {
        id: 'dodo-intro',
        title: 'Introduction',
        description: 'Get started with Dodo Payments.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction',
            url: 'https://docs.dodopayments.com/introduction',
            source: 'Dodo Payments',
          },
          {
            title: 'Migrate to Dodo Payments',
            url: 'https://docs.dodopayments.com/migrate-to-dodo',
            source: 'Dodo Payments',
          },
        ],
      },
      {
        id: 'dodo-products',
        title: 'Products & Billing',
        description: 'Create products and choose billing models.',
        order: 2,
        prerequisite: 'dodo-intro',
        resources: [
          {
            title: 'One-Time Payments',
            url: 'https://docs.dodopayments.com/features/one-time-payment-products',
            source: 'Dodo Payments',
          },
          {
            title: 'Subscriptions',
            url: 'https://docs.dodopayments.com/features/subscription',
            source: 'Dodo Payments',
          },
          {
            title: 'Usage-Based Billing',
            url: 'https://docs.dodopayments.com/features/usage-based-billing',
            source: 'Dodo Payments',
          },
        ],
      },
      {
        id: 'dodo-integration',
        title: 'Integration',
        description: 'Integrate with your stack.',
        order: 3,
        prerequisite: 'dodo-products',
        resources: [
          {
            title: 'Integration Guide',
            url: 'https://docs.dodopayments.com/developer-resources/integration-guide',
            source: 'Dodo Payments',
          },
          {
            title: 'Next.js Adapter',
            url: 'https://docs.dodopayments.com/developer-resources/nextjs-adaptor',
            source: 'Dodo Payments',
          },
          {
            title: 'SDKs',
            url: 'https://docs.dodopayments.com/developer-resources/dodo-payments-sdks',
            source: 'Dodo Payments',
          },
        ],
      },
      {
        id: 'dodo-advanced',
        title: 'Advanced Features',
        description: 'Customers, discounts, and more.',
        order: 4,
        prerequisite: 'dodo-integration',
        resources: [
          {
            title: 'API Reference',
            url: 'https://docs.dodopayments.com/api-reference/introduction',
            source: 'Dodo Payments',
          },
          {
            title: 'Sentra AI Agent',
            url: 'https://docs.dodopayments.com/developer-resources/sentra',
            source: 'Dodo Payments',
          },
        ],
      },
    ],
  },
  'shadcn-ui': {
    id: 'shadcn-ui',
    name: 'shadcn/ui',
    description: 'Re-usable components built with Radix',
    steps: [
      {
        id: 'shadcn-installation',
        title: 'Installation',
        description: 'Set up shadcn/ui in your project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Installation',
            url: 'https://ui.shadcn.com/docs/installation',
            source: 'shadcn/ui',
          },
          {
            title: 'Next.js',
            url: 'https://ui.shadcn.com/docs/installation/next',
            source: 'shadcn/ui',
          },
          {
            title: 'Vite',
            url: 'https://ui.shadcn.com/docs/installation/vite',
            source: 'shadcn/ui',
          },
        ],
      },
      {
        id: 'shadcn-theming',
        title: 'Theming',
        description: 'Customize colors and styling.',
        order: 2,
        prerequisite: 'shadcn-installation',
        resources: [
          {
            title: 'Theming',
            url: 'https://ui.shadcn.com/docs/theming',
            source: 'shadcn/ui',
          },
          {
            title: 'Dark Mode',
            url: 'https://ui.shadcn.com/docs/dark-mode',
            source: 'shadcn/ui',
          },
        ],
      },
      {
        id: 'shadcn-components',
        title: 'Components',
        description: 'Add and customize components.',
        order: 3,
        prerequisite: 'shadcn-theming',
        resources: [
          {
            title: 'Button',
            url: 'https://ui.shadcn.com/docs/components/button',
            source: 'shadcn/ui',
          },
          {
            title: 'Dialog',
            url: 'https://ui.shadcn.com/docs/components/dialog',
            source: 'shadcn/ui',
          },
          {
            title: 'Form',
            url: 'https://ui.shadcn.com/docs/components/form',
            source: 'shadcn/ui',
          },
          {
            title: 'Data Table',
            url: 'https://ui.shadcn.com/docs/components/data-table',
            source: 'shadcn/ui',
          },
        ],
      },
    ],
  },
  'aceternity-ui': {
    id: 'aceternity-ui',
    name: 'Aceternity UI',
    description: 'Copy-paste animated components for React with Tailwind CSS and Framer Motion',
    steps: [
      {
        id: 'aceternity-getting-started',
        title: 'Getting Started',
        description: 'Explore Aceternity UI components and understand the setup.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'All Components',
            url: 'https://ui.aceternity.com/components',
            source: 'Aceternity',
          },
          {
            title: 'Templates',
            url: 'https://ui.aceternity.com/templates',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-backgrounds',
        title: 'Backgrounds & Effects',
        description: 'Add stunning background effects to your sections.',
        order: 2,
        prerequisite: 'aceternity-getting-started',
        resources: [
          {
            title: 'Aurora Background',
            url: 'https://ui.aceternity.com/components/aurora-background',
            source: 'Aceternity',
          },
          {
            title: 'Background Beams',
            url: 'https://ui.aceternity.com/components/background-beams',
            source: 'Aceternity',
          },
          {
            title: 'Wavy Background',
            url: 'https://ui.aceternity.com/components/wavy-background',
            source: 'Aceternity',
          },
          {
            title: 'Grid and Dot Backgrounds',
            url: 'https://ui.aceternity.com/components/grid-and-dot-backgrounds',
            source: 'Aceternity',
          },
          {
            title: 'Sparkles',
            url: 'https://ui.aceternity.com/components/sparkles',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-cards',
        title: 'Cards & Layouts',
        description: 'Beautiful card components with hover effects.',
        order: 3,
        prerequisite: 'aceternity-backgrounds',
        resources: [
          {
            title: '3D Card Effect',
            url: 'https://ui.aceternity.com/components/3d-card-effect',
            source: 'Aceternity',
          },
          {
            title: 'Bento Grid',
            url: 'https://ui.aceternity.com/components/bento-grid',
            source: 'Aceternity',
          },
          {
            title: 'Expandable Cards',
            url: 'https://ui.aceternity.com/components/expandable-card',
            source: 'Aceternity',
          },
          {
            title: 'Focus Cards',
            url: 'https://ui.aceternity.com/components/focus-cards',
            source: 'Aceternity',
          },
          {
            title: 'Card Hover Effect',
            url: 'https://ui.aceternity.com/components/card-hover-effect',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-text',
        title: 'Text Animations',
        description: 'Animate text with typewriter, flip, and generate effects.',
        order: 4,
        prerequisite: 'aceternity-cards',
        resources: [
          {
            title: 'Typewriter Effect',
            url: 'https://ui.aceternity.com/components/typewriter-effect',
            source: 'Aceternity',
          },
          {
            title: 'Flip Words',
            url: 'https://ui.aceternity.com/components/flip-words',
            source: 'Aceternity',
          },
          {
            title: 'Text Generate Effect',
            url: 'https://ui.aceternity.com/components/text-generate-effect',
            source: 'Aceternity',
          },
          {
            title: 'Colourful Text',
            url: 'https://ui.aceternity.com/components/colourful-text',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-navigation',
        title: 'Navigation Components',
        description: 'Floating docks, navbars, and sidebars.',
        order: 5,
        prerequisite: 'aceternity-text',
        resources: [
          {
            title: 'Floating Dock',
            url: 'https://ui.aceternity.com/components/floating-dock',
            source: 'Aceternity',
          },
          {
            title: 'Floating Navbar',
            url: 'https://ui.aceternity.com/components/floating-navbar',
            source: 'Aceternity',
          },
          {
            title: 'Navbar Menu',
            url: 'https://ui.aceternity.com/components/navbar-menu',
            source: 'Aceternity',
          },
          {
            title: 'Sidebar',
            url: 'https://ui.aceternity.com/components/sidebar',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-hero',
        title: 'Hero & Feature Sections',
        description: 'Build impactful landing pages.',
        order: 6,
        prerequisite: 'aceternity-navigation',
        resources: [
          {
            title: 'Hero Sections',
            url: 'https://ui.aceternity.com/components/hero-sections',
            source: 'Aceternity',
          },
          {
            title: 'Hero Parallax',
            url: 'https://ui.aceternity.com/components/hero-parallax',
            source: 'Aceternity',
          },
          {
            title: 'Lamp Effect',
            url: 'https://ui.aceternity.com/components/lamp-effect',
            source: 'Aceternity',
          },
          {
            title: 'Feature Sections',
            url: 'https://ui.aceternity.com/components/feature-sections',
            source: 'Aceternity',
          },
          {
            title: 'Spotlight',
            url: 'https://ui.aceternity.com/components/spotlight',
            source: 'Aceternity',
          },
        ],
      },
      {
        id: 'aceternity-interactive',
        title: 'Interactive Components',
        description: 'Carousels, modals, and scroll animations.',
        order: 7,
        prerequisite: 'aceternity-hero',
        resources: [
          {
            title: 'Apple Cards Carousel',
            url: 'https://ui.aceternity.com/components/apple-cards-carousel',
            source: 'Aceternity',
          },
          {
            title: 'Animated Modal',
            url: 'https://ui.aceternity.com/components/animated-modal',
            source: 'Aceternity',
          },
          {
            title: 'Sticky Scroll Reveal',
            url: 'https://ui.aceternity.com/components/sticky-scroll-reveal',
            source: 'Aceternity',
          },
          {
            title: 'Compare',
            url: 'https://ui.aceternity.com/components/compare',
            source: 'Aceternity',
          },
          {
            title: 'Infinite Moving Cards',
            url: 'https://ui.aceternity.com/components/infinite-moving-cards',
            source: 'Aceternity',
          },
          {
            title: 'Timeline',
            url: 'https://ui.aceternity.com/components/timeline',
            source: 'Aceternity',
          },
        ],
      },
    ],
  },
  'supermemory': {
    id: 'supermemory',
    name: 'Supermemory',
    description: 'Memory API for the AI era - persistent context and memory for AI applications',
    steps: [
      {
        id: 'supermemory-intro',
        title: 'Introduction',
        description: 'Understand what Supermemory is and how it works.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction',
            url: 'https://supermemory.ai/docs/introduction',
            source: 'Supermemory',
          },
          {
            title: 'How It Works',
            url: 'https://supermemory.ai/docs/how-it-works',
            source: 'Supermemory',
          },
          {
            title: 'Memory vs RAG',
            url: 'https://supermemory.ai/docs/memory-vs-rag',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-quickstart',
        title: 'Quickstart',
        description: 'Get started with Supermemory in minutes.',
        order: 2,
        prerequisite: 'supermemory-intro',
        resources: [
          {
            title: 'Quickstart',
            url: 'https://supermemory.ai/docs/quickstart',
            source: 'Supermemory',
          },
          {
            title: 'SDKs Overview',
            url: 'https://supermemory.ai/docs/memory-api/sdks/overview',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-memory-api',
        title: 'Memory APIs',
        description: 'Learn the core memory APIs for storing and retrieving context.',
        order: 3,
        prerequisite: 'supermemory-quickstart',
        resources: [
          {
            title: 'Memory APIs',
            url: 'https://supermemory.ai/docs/intro',
            source: 'Supermemory',
          },
          {
            title: 'Add Document',
            url: 'https://supermemory.ai/docs/api-reference/manage-documents/add-document',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-user-profiles',
        title: 'User Profiles',
        description: 'Implement persistent user context and preferences.',
        order: 4,
        prerequisite: 'supermemory-memory-api',
        resources: [
          {
            title: 'User Profiles',
            url: 'https://supermemory.ai/docs/user-profiles',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-router',
        title: 'Memory Router',
        description: 'Intelligent context management and routing.',
        order: 5,
        prerequisite: 'supermemory-user-profiles',
        resources: [
          {
            title: 'Memory Router Overview',
            url: 'https://supermemory.ai/docs/memory-router/overview',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-connectors',
        title: 'Connectors',
        description: 'Integrate with Google Drive, Notion, OneDrive and more.',
        order: 6,
        prerequisite: 'supermemory-router',
        resources: [
          {
            title: 'Connectors Overview',
            url: 'https://supermemory.ai/docs/connectors/overview',
            source: 'Supermemory',
          },
        ],
      },
      {
        id: 'supermemory-cookbook',
        title: 'Cookbooks & Examples',
        description: 'Learn from practical examples and tutorials.',
        order: 7,
        prerequisite: 'supermemory-connectors',
        resources: [
          {
            title: 'Cookbook Overview',
            url: 'https://supermemory.ai/docs/cookbook/overview',
            source: 'Supermemory',
          },
        ],
      },
    ],
  },
  'framer-motion': {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'Production-ready animations for React',
    steps: [
      {
        id: 'fm-introduction',
        title: 'Introduction',
        description: 'Basic animation concepts.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction',
            url: 'https://motion.dev/docs/react-quick-start',
            source: 'Motion',
          },
          {
            title: 'Animation',
            url: 'https://motion.dev/docs/react-animation',
            source: 'Motion',
          },
        ],
      },
      {
        id: 'fm-gestures',
        title: 'Gestures',
        description: 'Hover, tap, drag interactions.',
        order: 2,
        prerequisite: 'fm-introduction',
        resources: [
          {
            title: 'Gestures',
            url: 'https://motion.dev/docs/react-gestures',
            source: 'Motion',
          },
        ],
      },
      {
        id: 'fm-layout',
        title: 'Layout Animations',
        description: 'Animate layout changes automatically.',
        order: 3,
        prerequisite: 'fm-gestures',
        resources: [
          {
            title: 'Layout Animations',
            url: 'https://motion.dev/docs/react-layout-animations',
            source: 'Motion',
          },
        ],
      },
      {
        id: 'fm-exit',
        title: 'Exit Animations',
        description: 'Animate components when they unmount.',
        order: 4,
        prerequisite: 'fm-layout',
        resources: [
          {
            title: 'AnimatePresence',
            url: 'https://motion.dev/docs/react-animate-presence',
            source: 'Motion',
          },
        ],
      },
    ],
  },
  'zustand': {
    id: 'zustand',
    name: 'Zustand',
    description: 'Lightweight state management',
    steps: [
      {
        id: 'zustand-intro',
        title: 'Getting Started',
        description: 'Create your first store.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://zustand.docs.pmnd.rs/getting-started/introduction',
            source: 'Zustand',
          },
        ],
      },
      {
        id: 'zustand-guides',
        title: 'Guides',
        description: 'Best practices and patterns.',
        order: 2,
        prerequisite: 'zustand-intro',
        resources: [
          {
            title: 'Updating State',
            url: 'https://zustand.docs.pmnd.rs/guides/updating-state',
            source: 'Zustand',
          },
          {
            title: 'Immutable State',
            url: 'https://zustand.docs.pmnd.rs/guides/immutable-state-and-merging',
            source: 'Zustand',
          },
        ],
      },
      {
        id: 'zustand-middleware',
        title: 'Middleware',
        description: 'Persist, devtools, and more.',
        order: 3,
        prerequisite: 'zustand-guides',
        resources: [
          {
            title: 'Persist Middleware',
            url: 'https://zustand.docs.pmnd.rs/middlewares/persist',
            source: 'Zustand',
          },
          {
            title: 'Devtools',
            url: 'https://zustand.docs.pmnd.rs/middlewares/devtools',
            source: 'Zustand',
          },
        ],
      },
    ],
  },
  'supabase': {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open source Firebase alternative',
    steps: [
      {
        id: 'supabase-getting-started',
        title: 'Getting Started',
        description: 'Set up your Supabase project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Quickstart',
            url: 'https://supabase.com/docs/guides/getting-started',
            source: 'Supabase',
          },
          {
            title: 'Project Setup',
            url: 'https://supabase.com/docs/guides/getting-started/quickstarts/nextjs',
            source: 'Supabase',
          },
        ],
      },
      {
        id: 'supabase-database',
        title: 'Database',
        description: 'PostgreSQL database with Supabase.',
        order: 2,
        prerequisite: 'supabase-getting-started',
        resources: [
          {
            title: 'Database Overview',
            url: 'https://supabase.com/docs/guides/database/overview',
            source: 'Supabase',
          },
          {
            title: 'Tables & Data',
            url: 'https://supabase.com/docs/guides/database/tables',
            source: 'Supabase',
          },
          {
            title: 'Database Functions',
            url: 'https://supabase.com/docs/guides/database/functions',
            source: 'Supabase',
          },
        ],
      },
      {
        id: 'supabase-auth',
        title: 'Authentication',
        description: 'User authentication and authorization.',
        order: 3,
        prerequisite: 'supabase-database',
        resources: [
          {
            title: 'Auth Overview',
            url: 'https://supabase.com/docs/guides/auth',
            source: 'Supabase',
          },
          {
            title: 'Email Auth',
            url: 'https://supabase.com/docs/guides/auth/auth-email',
            source: 'Supabase',
          },
          {
            title: 'Social Login',
            url: 'https://supabase.com/docs/guides/auth/social-login',
            source: 'Supabase',
          },
          {
            title: 'Row Level Security',
            url: 'https://supabase.com/docs/guides/auth/row-level-security',
            source: 'Supabase',
          },
        ],
      },
      {
        id: 'supabase-storage',
        title: 'Storage',
        description: 'File storage and management.',
        order: 4,
        prerequisite: 'supabase-auth',
        resources: [
          {
            title: 'Storage Overview',
            url: 'https://supabase.com/docs/guides/storage',
            source: 'Supabase',
          },
          {
            title: 'Upload Files',
            url: 'https://supabase.com/docs/guides/storage/uploads',
            source: 'Supabase',
          },
        ],
      },
      {
        id: 'supabase-realtime',
        title: 'Realtime',
        description: 'Real-time subscriptions.',
        order: 5,
        prerequisite: 'supabase-database',
        resources: [
          {
            title: 'Realtime Overview',
            url: 'https://supabase.com/docs/guides/realtime',
            source: 'Supabase',
          },
          {
            title: 'Broadcast',
            url: 'https://supabase.com/docs/guides/realtime/broadcast',
            source: 'Supabase',
          },
        ],
      },
    ],
  },
  'firebase': {
    id: 'firebase',
    name: 'Firebase',
    description: 'Google\'s app development platform',
    steps: [
      {
        id: 'firebase-setup',
        title: 'Setup',
        description: 'Set up Firebase in your project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Add Firebase to Web',
            url: 'https://firebase.google.com/docs/web/setup',
            source: 'Firebase',
          },
          {
            title: 'Firebase Console',
            url: 'https://firebase.google.com/docs/projects/learn-more',
            source: 'Firebase',
          },
        ],
      },
      {
        id: 'firebase-auth',
        title: 'Authentication',
        description: 'User authentication with Firebase.',
        order: 2,
        prerequisite: 'firebase-setup',
        resources: [
          {
            title: 'Auth Overview',
            url: 'https://firebase.google.com/docs/auth',
            source: 'Firebase',
          },
          {
            title: 'Email/Password Auth',
            url: 'https://firebase.google.com/docs/auth/web/password-auth',
            source: 'Firebase',
          },
          {
            title: 'Google Sign-In',
            url: 'https://firebase.google.com/docs/auth/web/google-signin',
            source: 'Firebase',
          },
        ],
      },
      {
        id: 'firebase-firestore',
        title: 'Firestore',
        description: 'NoSQL cloud database.',
        order: 3,
        prerequisite: 'firebase-setup',
        resources: [
          {
            title: 'Firestore Overview',
            url: 'https://firebase.google.com/docs/firestore',
            source: 'Firebase',
          },
          {
            title: 'Add Data',
            url: 'https://firebase.google.com/docs/firestore/manage-data/add-data',
            source: 'Firebase',
          },
          {
            title: 'Get Data',
            url: 'https://firebase.google.com/docs/firestore/query-data/get-data',
            source: 'Firebase',
          },
          {
            title: 'Realtime Updates',
            url: 'https://firebase.google.com/docs/firestore/query-data/listen',
            source: 'Firebase',
          },
        ],
      },
      {
        id: 'firebase-storage',
        title: 'Cloud Storage',
        description: 'File uploads and storage.',
        order: 4,
        prerequisite: 'firebase-auth',
        resources: [
          {
            title: 'Storage Overview',
            url: 'https://firebase.google.com/docs/storage',
            source: 'Firebase',
          },
          {
            title: 'Upload Files',
            url: 'https://firebase.google.com/docs/storage/web/upload-files',
            source: 'Firebase',
          },
        ],
      },
      {
        id: 'firebase-hosting',
        title: 'Hosting',
        description: 'Deploy your web app.',
        order: 5,
        prerequisite: 'firebase-setup',
        resources: [
          {
            title: 'Hosting Overview',
            url: 'https://firebase.google.com/docs/hosting',
            source: 'Firebase',
          },
          {
            title: 'Deploy',
            url: 'https://firebase.google.com/docs/hosting/quickstart',
            source: 'Firebase',
          },
        ],
      },
    ],
  },
  'aws': {
    id: 'aws',
    name: 'AWS',
    description: 'Amazon Web Services cloud platform',
    steps: [
      {
        id: 'aws-getting-started',
        title: 'Getting Started',
        description: 'Introduction to AWS.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://aws.amazon.com/getting-started/',
            source: 'AWS',
          },
          {
            title: 'AWS Free Tier',
            url: 'https://aws.amazon.com/free/',
            source: 'AWS',
          },
        ],
      },
      {
        id: 'aws-s3',
        title: 'S3 Storage',
        description: 'Simple Storage Service for files.',
        order: 2,
        prerequisite: 'aws-getting-started',
        resources: [
          {
            title: 'S3 Documentation',
            url: 'https://docs.aws.amazon.com/s3/',
            source: 'AWS',
          },
          {
            title: 'S3 Getting Started',
            url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html',
            source: 'AWS',
          },
        ],
      },
      {
        id: 'aws-lambda',
        title: 'Lambda',
        description: 'Serverless compute functions.',
        order: 3,
        prerequisite: 'aws-getting-started',
        resources: [
          {
            title: 'Lambda Documentation',
            url: 'https://docs.aws.amazon.com/lambda/',
            source: 'AWS',
          },
          {
            title: 'Lambda Getting Started',
            url: 'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html',
            source: 'AWS',
          },
        ],
      },
      {
        id: 'aws-dynamodb',
        title: 'DynamoDB',
        description: 'NoSQL database service.',
        order: 4,
        prerequisite: 'aws-getting-started',
        resources: [
          {
            title: 'DynamoDB Documentation',
            url: 'https://docs.aws.amazon.com/dynamodb/',
            source: 'AWS',
          },
          {
            title: 'DynamoDB Getting Started',
            url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html',
            source: 'AWS',
          },
        ],
      },
      {
        id: 'aws-ec2',
        title: 'EC2',
        description: 'Virtual servers in the cloud.',
        order: 5,
        prerequisite: 'aws-getting-started',
        resources: [
          {
            title: 'EC2 Documentation',
            url: 'https://docs.aws.amazon.com/ec2/',
            source: 'AWS',
          },
          {
            title: 'EC2 Getting Started',
            url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html',
            source: 'AWS',
          },
        ],
      },
      {
        id: 'aws-amplify',
        title: 'Amplify',
        description: 'Full-stack app development.',
        order: 6,
        prerequisite: 'aws-getting-started',
        resources: [
          {
            title: 'Amplify Documentation',
            url: 'https://docs.amplify.aws/',
            source: 'AWS',
          },
          {
            title: 'Amplify Getting Started',
            url: 'https://docs.amplify.aws/start/',
            source: 'AWS',
          },
        ],
      },
    ],
  },
  'azure': {
    id: 'azure',
    name: 'Azure',
    description: 'Microsoft cloud platform',
    steps: [
      {
        id: 'azure-getting-started',
        title: 'Getting Started',
        description: 'Introduction to Azure.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Azure Documentation',
            url: 'https://learn.microsoft.com/en-us/azure/',
            source: 'Azure',
          },
          {
            title: 'Azure Free Account',
            url: 'https://azure.microsoft.com/en-us/free/',
            source: 'Azure',
          },
        ],
      },
      {
        id: 'azure-functions',
        title: 'Azure Functions',
        description: 'Serverless compute service.',
        order: 2,
        prerequisite: 'azure-getting-started',
        resources: [
          {
            title: 'Functions Overview',
            url: 'https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview',
            source: 'Azure',
          },
          {
            title: 'Create First Function',
            url: 'https://learn.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code',
            source: 'Azure',
          },
        ],
      },
      {
        id: 'azure-blob',
        title: 'Blob Storage',
        description: 'Object storage for files.',
        order: 3,
        prerequisite: 'azure-getting-started',
        resources: [
          {
            title: 'Blob Storage Overview',
            url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction',
            source: 'Azure',
          },
          {
            title: 'Quickstart',
            url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal',
            source: 'Azure',
          },
        ],
      },
      {
        id: 'azure-cosmos',
        title: 'Cosmos DB',
        description: 'Globally distributed database.',
        order: 4,
        prerequisite: 'azure-getting-started',
        resources: [
          {
            title: 'Cosmos DB Overview',
            url: 'https://learn.microsoft.com/en-us/azure/cosmos-db/introduction',
            source: 'Azure',
          },
          {
            title: 'Create Database',
            url: 'https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal',
            source: 'Azure',
          },
        ],
      },
      {
        id: 'azure-app-service',
        title: 'App Service',
        description: 'Host web applications.',
        order: 5,
        prerequisite: 'azure-getting-started',
        resources: [
          {
            title: 'App Service Overview',
            url: 'https://learn.microsoft.com/en-us/azure/app-service/overview',
            source: 'Azure',
          },
          {
            title: 'Deploy Node.js App',
            url: 'https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs',
            source: 'Azure',
          },
        ],
      },
    ],
  },
  'vercel': {
    id: 'vercel',
    name: 'Vercel',
    description: 'Frontend cloud platform',
    steps: [
      {
        id: 'vercel-getting-started',
        title: 'Getting Started',
        description: 'Deploy your first project.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://vercel.com/docs/getting-started-with-vercel',
            source: 'Vercel',
          },
          {
            title: 'Deployments',
            url: 'https://vercel.com/docs/deployments/overview',
            source: 'Vercel',
          },
        ],
      },
      {
        id: 'vercel-frameworks',
        title: 'Framework Support',
        description: 'Deploy Next.js, Vite, and more.',
        order: 2,
        prerequisite: 'vercel-getting-started',
        resources: [
          {
            title: 'Next.js on Vercel',
            url: 'https://vercel.com/docs/frameworks/nextjs',
            source: 'Vercel',
          },
          {
            title: 'Vite on Vercel',
            url: 'https://vercel.com/docs/frameworks/vite',
            source: 'Vercel',
          },
        ],
      },
      {
        id: 'vercel-functions',
        title: 'Serverless Functions',
        description: 'API routes and edge functions.',
        order: 3,
        prerequisite: 'vercel-getting-started',
        resources: [
          {
            title: 'Functions Overview',
            url: 'https://vercel.com/docs/functions',
            source: 'Vercel',
          },
          {
            title: 'Edge Functions',
            url: 'https://vercel.com/docs/functions/edge-functions',
            source: 'Vercel',
          },
        ],
      },
      {
        id: 'vercel-domains',
        title: 'Domains & SSL',
        description: 'Custom domains and HTTPS.',
        order: 4,
        prerequisite: 'vercel-getting-started',
        resources: [
          {
            title: 'Custom Domains',
            url: 'https://vercel.com/docs/projects/domains',
            source: 'Vercel',
          },
          {
            title: 'SSL Certificates',
            url: 'https://vercel.com/docs/security/ssl',
            source: 'Vercel',
          },
        ],
      },
      {
        id: 'vercel-storage',
        title: 'Storage',
        description: 'KV, Postgres, and Blob storage.',
        order: 5,
        prerequisite: 'vercel-functions',
        resources: [
          {
            title: 'Vercel Storage',
            url: 'https://vercel.com/docs/storage',
            source: 'Vercel',
          },
          {
            title: 'Vercel Postgres',
            url: 'https://vercel.com/docs/storage/vercel-postgres',
            source: 'Vercel',
          },
          {
            title: 'Vercel KV',
            url: 'https://vercel.com/docs/storage/vercel-kv',
            source: 'Vercel',
          },
        ],
      },
    ],
  },
  'cloudflare': {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: 'Edge network and developer platform',
    steps: [
      {
        id: 'cloudflare-getting-started',
        title: 'Getting Started',
        description: 'Set up Cloudflare for your site.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://developers.cloudflare.com/fundamentals/setup/',
            source: 'Cloudflare',
          },
          {
            title: 'DNS Setup',
            url: 'https://developers.cloudflare.com/dns/',
            source: 'Cloudflare',
          },
        ],
      },
      {
        id: 'cloudflare-workers',
        title: 'Workers',
        description: 'Serverless functions at the edge.',
        order: 2,
        prerequisite: 'cloudflare-getting-started',
        resources: [
          {
            title: 'Workers Overview',
            url: 'https://developers.cloudflare.com/workers/',
            source: 'Cloudflare',
          },
          {
            title: 'Get Started',
            url: 'https://developers.cloudflare.com/workers/get-started/',
            source: 'Cloudflare',
          },
        ],
      },
      {
        id: 'cloudflare-pages',
        title: 'Pages',
        description: 'Deploy static sites and full-stack apps.',
        order: 3,
        prerequisite: 'cloudflare-getting-started',
        resources: [
          {
            title: 'Pages Overview',
            url: 'https://developers.cloudflare.com/pages/',
            source: 'Cloudflare',
          },
          {
            title: 'Framework Guides',
            url: 'https://developers.cloudflare.com/pages/framework-guides/',
            source: 'Cloudflare',
          },
        ],
      },
      {
        id: 'cloudflare-r2',
        title: 'R2 Storage',
        description: 'S3-compatible object storage.',
        order: 4,
        prerequisite: 'cloudflare-workers',
        resources: [
          {
            title: 'R2 Overview',
            url: 'https://developers.cloudflare.com/r2/',
            source: 'Cloudflare',
          },
          {
            title: 'R2 API',
            url: 'https://developers.cloudflare.com/r2/api/',
            source: 'Cloudflare',
          },
        ],
      },
      {
        id: 'cloudflare-d1',
        title: 'D1 Database',
        description: 'Serverless SQL database.',
        order: 5,
        prerequisite: 'cloudflare-workers',
        resources: [
          {
            title: 'D1 Overview',
            url: 'https://developers.cloudflare.com/d1/',
            source: 'Cloudflare',
          },
          {
            title: 'Get Started',
            url: 'https://developers.cloudflare.com/d1/get-started/',
            source: 'Cloudflare',
          },
        ],
      },
      {
        id: 'cloudflare-kv',
        title: 'KV Storage',
        description: 'Key-value storage at the edge.',
        order: 6,
        prerequisite: 'cloudflare-workers',
        resources: [
          {
            title: 'KV Overview',
            url: 'https://developers.cloudflare.com/kv/',
            source: 'Cloudflare',
          },
          {
            title: 'KV API',
            url: 'https://developers.cloudflare.com/kv/api/',
            source: 'Cloudflare',
          },
        ],
      },
    ],
  },
  'docker': {
    id: 'docker',
    name: 'Docker',
    description: 'Container platform',
    steps: [
      {
        id: 'docker-getting-started',
        title: 'Getting Started',
        description: 'Install Docker and learn basics.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Get Docker',
            url: 'https://docs.docker.com/get-docker/',
            source: 'Docker',
          },
          {
            title: 'Getting Started Guide',
            url: 'https://docs.docker.com/get-started/',
            source: 'Docker',
          },
        ],
      },
      {
        id: 'docker-images',
        title: 'Images',
        description: 'Build and manage Docker images.',
        order: 2,
        prerequisite: 'docker-getting-started',
        resources: [
          {
            title: 'Build Images',
            url: 'https://docs.docker.com/build/',
            source: 'Docker',
          },
          {
            title: 'Dockerfile Reference',
            url: 'https://docs.docker.com/reference/dockerfile/',
            source: 'Docker',
          },
        ],
      },
      {
        id: 'docker-containers',
        title: 'Containers',
        description: 'Run and manage containers.',
        order: 3,
        prerequisite: 'docker-images',
        resources: [
          {
            title: 'Run Containers',
            url: 'https://docs.docker.com/engine/reference/run/',
            source: 'Docker',
          },
          {
            title: 'Container Networking',
            url: 'https://docs.docker.com/network/',
            source: 'Docker',
          },
        ],
      },
      {
        id: 'docker-compose',
        title: 'Docker Compose',
        description: 'Multi-container applications.',
        order: 4,
        prerequisite: 'docker-containers',
        resources: [
          {
            title: 'Compose Overview',
            url: 'https://docs.docker.com/compose/',
            source: 'Docker',
          },
          {
            title: 'Compose File Reference',
            url: 'https://docs.docker.com/compose/compose-file/',
            source: 'Docker',
          },
        ],
      },
      {
        id: 'docker-volumes',
        title: 'Volumes',
        description: 'Persistent data storage.',
        order: 5,
        prerequisite: 'docker-containers',
        resources: [
          {
            title: 'Volumes',
            url: 'https://docs.docker.com/storage/volumes/',
            source: 'Docker',
          },
          {
            title: 'Bind Mounts',
            url: 'https://docs.docker.com/storage/bind-mounts/',
            source: 'Docker',
          },
        ],
      },
    ],
  },
  'redis': {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data store',
    steps: [
      {
        id: 'redis-getting-started',
        title: 'Getting Started',
        description: 'Install and run Redis.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://redis.io/docs/getting-started/',
            source: 'Redis',
          },
          {
            title: 'Install Redis',
            url: 'https://redis.io/docs/install/',
            source: 'Redis',
          },
        ],
      },
      {
        id: 'redis-data-types',
        title: 'Data Types',
        description: 'Strings, lists, sets, hashes, and more.',
        order: 2,
        prerequisite: 'redis-getting-started',
        resources: [
          {
            title: 'Data Types',
            url: 'https://redis.io/docs/data-types/',
            source: 'Redis',
          },
          {
            title: 'Strings',
            url: 'https://redis.io/docs/data-types/strings/',
            source: 'Redis',
          },
          {
            title: 'Hashes',
            url: 'https://redis.io/docs/data-types/hashes/',
            source: 'Redis',
          },
        ],
      },
      {
        id: 'redis-commands',
        title: 'Commands',
        description: 'Core Redis commands.',
        order: 3,
        prerequisite: 'redis-data-types',
        resources: [
          {
            title: 'Commands Reference',
            url: 'https://redis.io/commands/',
            source: 'Redis',
          },
          {
            title: 'Transactions',
            url: 'https://redis.io/docs/interact/transactions/',
            source: 'Redis',
          },
        ],
      },
      {
        id: 'redis-clients',
        title: 'Client Libraries',
        description: 'Connect from Node.js, Python, etc.',
        order: 4,
        prerequisite: 'redis-commands',
        resources: [
          {
            title: 'Node.js Client',
            url: 'https://redis.io/docs/clients/nodejs/',
            source: 'Redis',
          },
          {
            title: 'Python Client',
            url: 'https://redis.io/docs/clients/python/',
            source: 'Redis',
          },
        ],
      },
    ],
  },
  'mongodb': {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Document database',
    steps: [
      {
        id: 'mongodb-getting-started',
        title: 'Getting Started',
        description: 'Set up MongoDB.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Getting Started',
            url: 'https://www.mongodb.com/docs/manual/tutorial/getting-started/',
            source: 'MongoDB',
          },
          {
            title: 'MongoDB Atlas',
            url: 'https://www.mongodb.com/docs/atlas/getting-started/',
            source: 'MongoDB',
          },
        ],
      },
      {
        id: 'mongodb-crud',
        title: 'CRUD Operations',
        description: 'Create, read, update, delete documents.',
        order: 2,
        prerequisite: 'mongodb-getting-started',
        resources: [
          {
            title: 'Insert Documents',
            url: 'https://www.mongodb.com/docs/manual/tutorial/insert-documents/',
            source: 'MongoDB',
          },
          {
            title: 'Query Documents',
            url: 'https://www.mongodb.com/docs/manual/tutorial/query-documents/',
            source: 'MongoDB',
          },
          {
            title: 'Update Documents',
            url: 'https://www.mongodb.com/docs/manual/tutorial/update-documents/',
            source: 'MongoDB',
          },
          {
            title: 'Delete Documents',
            url: 'https://www.mongodb.com/docs/manual/tutorial/remove-documents/',
            source: 'MongoDB',
          },
        ],
      },
      {
        id: 'mongodb-aggregation',
        title: 'Aggregation',
        description: 'Data aggregation pipeline.',
        order: 3,
        prerequisite: 'mongodb-crud',
        resources: [
          {
            title: 'Aggregation Overview',
            url: 'https://www.mongodb.com/docs/manual/aggregation/',
            source: 'MongoDB',
          },
          {
            title: 'Aggregation Pipeline',
            url: 'https://www.mongodb.com/docs/manual/core/aggregation-pipeline/',
            source: 'MongoDB',
          },
        ],
      },
      {
        id: 'mongodb-indexes',
        title: 'Indexes',
        description: 'Improve query performance.',
        order: 4,
        prerequisite: 'mongodb-crud',
        resources: [
          {
            title: 'Indexes',
            url: 'https://www.mongodb.com/docs/manual/indexes/',
            source: 'MongoDB',
          },
          {
            title: 'Create Index',
            url: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.createIndex/',
            source: 'MongoDB',
          },
        ],
      },
      {
        id: 'mongodb-mongoose',
        title: 'Mongoose ODM',
        description: 'MongoDB object modeling for Node.js.',
        order: 5,
        prerequisite: 'mongodb-crud',
        resources: [
          {
            title: 'Mongoose Quickstart',
            url: 'https://mongoosejs.com/docs/index.html',
            source: 'Mongoose',
          },
          {
            title: 'Schemas',
            url: 'https://mongoosejs.com/docs/guide.html',
            source: 'Mongoose',
          },
        ],
      },
    ],
  },
  'postgresql': {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Advanced open-source SQL database',
    steps: [
      {
        id: 'postgresql-getting-started',
        title: 'Getting Started',
        description: 'Install and set up PostgreSQL.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Tutorial',
            url: 'https://www.postgresql.org/docs/current/tutorial.html',
            source: 'PostgreSQL',
          },
          {
            title: 'Installation',
            url: 'https://www.postgresql.org/download/',
            source: 'PostgreSQL',
          },
        ],
      },
      {
        id: 'postgresql-sql-basics',
        title: 'SQL Basics',
        description: 'Core SQL commands.',
        order: 2,
        prerequisite: 'postgresql-getting-started',
        resources: [
          {
            title: 'SQL Commands',
            url: 'https://www.postgresql.org/docs/current/sql-commands.html',
            source: 'PostgreSQL',
          },
          {
            title: 'Data Definition',
            url: 'https://www.postgresql.org/docs/current/ddl.html',
            source: 'PostgreSQL',
          },
          {
            title: 'Queries',
            url: 'https://www.postgresql.org/docs/current/queries.html',
            source: 'PostgreSQL',
          },
        ],
      },
      {
        id: 'postgresql-data-types',
        title: 'Data Types',
        description: 'PostgreSQL data types.',
        order: 3,
        prerequisite: 'postgresql-sql-basics',
        resources: [
          {
            title: 'Data Types',
            url: 'https://www.postgresql.org/docs/current/datatype.html',
            source: 'PostgreSQL',
          },
          {
            title: 'JSON Types',
            url: 'https://www.postgresql.org/docs/current/datatype-json.html',
            source: 'PostgreSQL',
          },
        ],
      },
      {
        id: 'postgresql-indexes',
        title: 'Indexes',
        description: 'Optimize query performance.',
        order: 4,
        prerequisite: 'postgresql-sql-basics',
        resources: [
          {
            title: 'Indexes',
            url: 'https://www.postgresql.org/docs/current/indexes.html',
            source: 'PostgreSQL',
          },
          {
            title: 'Index Types',
            url: 'https://www.postgresql.org/docs/current/indexes-types.html',
            source: 'PostgreSQL',
          },
        ],
      },
      {
        id: 'postgresql-functions',
        title: 'Functions',
        description: 'Built-in and custom functions.',
        order: 5,
        prerequisite: 'postgresql-sql-basics',
        resources: [
          {
            title: 'Functions',
            url: 'https://www.postgresql.org/docs/current/functions.html',
            source: 'PostgreSQL',
          },
          {
            title: 'Create Function',
            url: 'https://www.postgresql.org/docs/current/sql-createfunction.html',
            source: 'PostgreSQL',
          },
        ],
      },
    ],
  },
  'nodejs': {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome V8',
    steps: [
      {
        id: 'nodejs-getting-started',
        title: 'Getting Started',
        description: 'Introduction to Node.js.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction to Node.js',
            url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
            source: 'Node.js',
          },
          {
            title: 'How to install Node.js',
            url: 'https://nodejs.org/en/learn/getting-started/how-to-install-nodejs',
            source: 'Node.js',
          },
        ],
      },
      {
        id: 'nodejs-core-modules',
        title: 'Core Modules',
        description: 'Built-in Node.js modules.',
        order: 2,
        prerequisite: 'nodejs-getting-started',
        resources: [
          {
            title: 'File System (fs)',
            url: 'https://nodejs.org/api/fs.html',
            source: 'Node.js',
          },
          {
            title: 'Path',
            url: 'https://nodejs.org/api/path.html',
            source: 'Node.js',
          },
          {
            title: 'HTTP',
            url: 'https://nodejs.org/api/http.html',
            source: 'Node.js',
          },
          {
            title: 'Events',
            url: 'https://nodejs.org/api/events.html',
            source: 'Node.js',
          },
        ],
      },
      {
        id: 'nodejs-async',
        title: 'Asynchronous Patterns',
        description: 'Callbacks, Promises, and async/await.',
        order: 3,
        prerequisite: 'nodejs-core-modules',
        resources: [
          {
            title: 'Asynchronous flow control',
            url: 'https://nodejs.org/en/learn/asynchronous-work/asynchronous-flow-control',
            source: 'Node.js',
          },
          {
            title: 'JavaScript Asynchronous Programming',
            url: 'https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks',
            source: 'Node.js',
          },
        ],
      },
      {
        id: 'nodejs-npm',
        title: 'npm & Packages',
        description: 'Package management with npm.',
        order: 4,
        prerequisite: 'nodejs-getting-started',
        resources: [
          {
            title: 'An introduction to npm',
            url: 'https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager',
            source: 'Node.js',
          },
          {
            title: 'npm Docs',
            url: 'https://docs.npmjs.com/',
            source: 'npm',
          },
        ],
      },
      {
        id: 'nodejs-streams',
        title: 'Streams',
        description: 'Working with streams.',
        order: 5,
        prerequisite: 'nodejs-async',
        resources: [
          {
            title: 'Stream API',
            url: 'https://nodejs.org/api/stream.html',
            source: 'Node.js',
          },
          {
            title: 'Backpressuring in Streams',
            url: 'https://nodejs.org/en/learn/modules/backpressuring-in-streams',
            source: 'Node.js',
          },
        ],
      },
    ],
  },
  'http': {
    id: 'http',
    name: 'HTTP',
    description: 'Hypertext Transfer Protocol',
    steps: [
      {
        id: 'http-basics',
        title: 'HTTP Basics',
        description: 'Understanding HTTP fundamentals.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'An overview of HTTP',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
            source: 'MDN',
          },
          {
            title: 'HTTP Basics',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP',
            source: 'MDN',
          },
        ],
      },
      {
        id: 'http-methods',
        title: 'HTTP Methods',
        description: 'GET, POST, PUT, DELETE, PATCH.',
        order: 2,
        prerequisite: 'http-basics',
        resources: [
          {
            title: 'HTTP request methods',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
            source: 'MDN',
          },
          {
            title: 'Safe methods',
            url: 'https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP',
            source: 'MDN',
          },
        ],
      },
      {
        id: 'http-status-codes',
        title: 'Status Codes',
        description: 'HTTP response status codes.',
        order: 3,
        prerequisite: 'http-basics',
        resources: [
          {
            title: 'HTTP response status codes',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
            source: 'MDN',
          },
        ],
      },
      {
        id: 'http-headers',
        title: 'Headers',
        description: 'Request and response headers.',
        order: 4,
        prerequisite: 'http-methods',
        resources: [
          {
            title: 'HTTP headers',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers',
            source: 'MDN',
          },
          {
            title: 'Content-Type',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type',
            source: 'MDN',
          },
        ],
      },
      {
        id: 'http-cors',
        title: 'CORS',
        description: 'Cross-Origin Resource Sharing.',
        order: 5,
        prerequisite: 'http-headers',
        resources: [
          {
            title: 'Cross-Origin Resource Sharing (CORS)',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
            source: 'MDN',
          },
        ],
      },
    ],
  },
  'bun': {
    id: 'bun',
    name: 'Bun',
    description: 'Fast all-in-one JavaScript runtime',
    steps: [
      {
        id: 'bun-installation',
        title: 'Installation',
        description: 'Install and set up Bun.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Installation',
            url: 'https://bun.sh/docs/installation',
            source: 'Bun',
          },
          {
            title: 'Quickstart',
            url: 'https://bun.sh/docs/quickstart',
            source: 'Bun',
          },
        ],
      },
      {
        id: 'bun-runtime',
        title: 'Runtime',
        description: 'Running JavaScript/TypeScript.',
        order: 2,
        prerequisite: 'bun-installation',
        resources: [
          {
            title: 'bun run',
            url: 'https://bun.sh/docs/cli/run',
            source: 'Bun',
          },
          {
            title: 'TypeScript',
            url: 'https://bun.sh/docs/runtime/typescript',
            source: 'Bun',
          },
        ],
      },
      {
        id: 'bun-package-manager',
        title: 'Package Manager',
        description: 'Fast npm-compatible package manager.',
        order: 3,
        prerequisite: 'bun-installation',
        resources: [
          {
            title: 'bun install',
            url: 'https://bun.sh/docs/cli/install',
            source: 'Bun',
          },
          {
            title: 'bun add',
            url: 'https://bun.sh/docs/cli/add',
            source: 'Bun',
          },
        ],
      },
      {
        id: 'bun-apis',
        title: 'Bun APIs',
        description: 'Built-in APIs for common tasks.',
        order: 4,
        prerequisite: 'bun-runtime',
        resources: [
          {
            title: 'HTTP server (Bun.serve)',
            url: 'https://bun.sh/docs/api/http',
            source: 'Bun',
          },
          {
            title: 'File I/O (Bun.file)',
            url: 'https://bun.sh/docs/api/file-io',
            source: 'Bun',
          },
          {
            title: 'SQLite',
            url: 'https://bun.sh/docs/api/sqlite',
            source: 'Bun',
          },
        ],
      },
      {
        id: 'bun-bundler',
        title: 'Bundler',
        description: 'Bundle for production.',
        order: 5,
        prerequisite: 'bun-runtime',
        resources: [
          {
            title: 'Bundler',
            url: 'https://bun.sh/docs/bundler',
            source: 'Bun',
          },
        ],
      },
      {
        id: 'bun-test',
        title: 'Test Runner',
        description: 'Built-in test runner.',
        order: 6,
        prerequisite: 'bun-runtime',
        resources: [
          {
            title: 'bun test',
            url: 'https://bun.sh/docs/cli/test',
            source: 'Bun',
          },
        ],
      },
    ],
  },
  'rest': {
    id: 'rest',
    name: 'REST API',
    description: 'RESTful API design principles',
    steps: [
      {
        id: 'rest-introduction',
        title: 'Introduction',
        description: 'What is REST?',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'What is REST',
            url: 'https://restfulapi.net/',
            source: 'RESTful API',
          },
          {
            title: 'REST Architectural Constraints',
            url: 'https://restfulapi.net/rest-architectural-constraints/',
            source: 'RESTful API',
          },
        ],
      },
      {
        id: 'rest-http-methods',
        title: 'HTTP Methods',
        description: 'CRUD operations with HTTP methods.',
        order: 2,
        prerequisite: 'rest-introduction',
        resources: [
          {
            title: 'HTTP Methods',
            url: 'https://restfulapi.net/http-methods/',
            source: 'RESTful API',
          },
        ],
      },
      {
        id: 'rest-resource-naming',
        title: 'Resource Naming',
        description: 'Best practices for naming resources.',
        order: 3,
        prerequisite: 'rest-http-methods',
        resources: [
          {
            title: 'Resource Naming',
            url: 'https://restfulapi.net/resource-naming/',
            source: 'RESTful API',
          },
        ],
      },
      {
        id: 'rest-status-codes',
        title: 'Status Codes',
        description: 'Proper use of HTTP status codes.',
        order: 4,
        prerequisite: 'rest-http-methods',
        resources: [
          {
            title: 'HTTP Status Codes',
            url: 'https://restfulapi.net/http-status-codes/',
            source: 'RESTful API',
          },
        ],
      },
      {
        id: 'rest-best-practices',
        title: 'Best Practices',
        description: 'REST API design best practices.',
        order: 5,
        prerequisite: 'rest-resource-naming',
        resources: [
          {
            title: 'REST API Design Best Practices',
            url: 'https://restfulapi.net/rest-api-design-tutorial-with-example/',
            source: 'RESTful API',
          },
          {
            title: 'Versioning',
            url: 'https://restfulapi.net/versioning/',
            source: 'RESTful API',
          },
        ],
      },
    ],
  },
  'linux': {
    id: 'linux',
    name: 'Linux',
    description: 'Linux command line and system administration',
    steps: [
      {
        id: 'linux-basics',
        title: 'Command Line Basics',
        description: 'Essential Linux commands.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Linux man pages',
            url: 'https://man7.org/linux/man-pages/',
            source: 'Linux',
          },
          {
            title: 'GNU Coreutils',
            url: 'https://www.gnu.org/software/coreutils/manual/',
            source: 'GNU',
          },
        ],
      },
      {
        id: 'linux-file-system',
        title: 'File System',
        description: 'Navigating and managing files.',
        order: 2,
        prerequisite: 'linux-basics',
        resources: [
          {
            title: 'ls - list directory',
            url: 'https://man7.org/linux/man-pages/man1/ls.1.html',
            source: 'Linux',
          },
          {
            title: 'cp - copy files',
            url: 'https://man7.org/linux/man-pages/man1/cp.1.html',
            source: 'Linux',
          },
          {
            title: 'mv - move files',
            url: 'https://man7.org/linux/man-pages/man1/mv.1.html',
            source: 'Linux',
          },
          {
            title: 'rm - remove files',
            url: 'https://man7.org/linux/man-pages/man1/rm.1.html',
            source: 'Linux',
          },
        ],
      },
      {
        id: 'linux-permissions',
        title: 'Permissions',
        description: 'File permissions and ownership.',
        order: 3,
        prerequisite: 'linux-file-system',
        resources: [
          {
            title: 'chmod - change permissions',
            url: 'https://man7.org/linux/man-pages/man1/chmod.1.html',
            source: 'Linux',
          },
          {
            title: 'chown - change owner',
            url: 'https://man7.org/linux/man-pages/man1/chown.1.html',
            source: 'Linux',
          },
        ],
      },
      {
        id: 'linux-processes',
        title: 'Processes',
        description: 'Managing processes.',
        order: 4,
        prerequisite: 'linux-basics',
        resources: [
          {
            title: 'ps - process status',
            url: 'https://man7.org/linux/man-pages/man1/ps.1.html',
            source: 'Linux',
          },
          {
            title: 'kill - terminate process',
            url: 'https://man7.org/linux/man-pages/man1/kill.1.html',
            source: 'Linux',
          },
          {
            title: 'top - system monitor',
            url: 'https://man7.org/linux/man-pages/man1/top.1.html',
            source: 'Linux',
          },
        ],
      },
      {
        id: 'linux-networking',
        title: 'Networking',
        description: 'Network commands and tools.',
        order: 5,
        prerequisite: 'linux-basics',
        resources: [
          {
            title: 'curl - transfer data',
            url: 'https://man7.org/linux/man-pages/man1/curl.1.html',
            source: 'Linux',
          },
          {
            title: 'ssh - secure shell',
            url: 'https://man7.org/linux/man-pages/man1/ssh.1.html',
            source: 'Linux',
          },
          {
            title: 'scp - secure copy',
            url: 'https://man7.org/linux/man-pages/man1/scp.1.html',
            source: 'Linux',
          },
        ],
      },
    ],
  },
  'fastapi': {
    id: 'fastapi',
    name: 'FastAPI',
    description: 'Modern Python web framework for APIs',
    steps: [
      {
        id: 'fastapi-intro',
        title: 'Introduction',
        description: 'Getting started with FastAPI.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'FastAPI',
            url: 'https://fastapi.tiangolo.com/',
            source: 'FastAPI',
          },
          {
            title: 'First Steps',
            url: 'https://fastapi.tiangolo.com/tutorial/first-steps/',
            source: 'FastAPI',
          },
        ],
      },
      {
        id: 'fastapi-path-query',
        title: 'Path & Query Parameters',
        description: 'Handling URL parameters.',
        order: 2,
        prerequisite: 'fastapi-intro',
        resources: [
          {
            title: 'Path Parameters',
            url: 'https://fastapi.tiangolo.com/tutorial/path-params/',
            source: 'FastAPI',
          },
          {
            title: 'Query Parameters',
            url: 'https://fastapi.tiangolo.com/tutorial/query-params/',
            source: 'FastAPI',
          },
        ],
      },
      {
        id: 'fastapi-request-body',
        title: 'Request Body',
        description: 'Handling JSON request bodies.',
        order: 3,
        prerequisite: 'fastapi-path-query',
        resources: [
          {
            title: 'Request Body',
            url: 'https://fastapi.tiangolo.com/tutorial/body/',
            source: 'FastAPI',
          },
          {
            title: 'Body - Multiple Parameters',
            url: 'https://fastapi.tiangolo.com/tutorial/body-multiple-params/',
            source: 'FastAPI',
          },
        ],
      },
      {
        id: 'fastapi-response',
        title: 'Response Model',
        description: 'Defining response schemas.',
        order: 4,
        prerequisite: 'fastapi-request-body',
        resources: [
          {
            title: 'Response Model',
            url: 'https://fastapi.tiangolo.com/tutorial/response-model/',
            source: 'FastAPI',
          },
          {
            title: 'Response Status Code',
            url: 'https://fastapi.tiangolo.com/tutorial/response-status-code/',
            source: 'FastAPI',
          },
        ],
      },
      {
        id: 'fastapi-dependencies',
        title: 'Dependencies',
        description: 'Dependency injection system.',
        order: 5,
        prerequisite: 'fastapi-response',
        resources: [
          {
            title: 'Dependencies',
            url: 'https://fastapi.tiangolo.com/tutorial/dependencies/',
            source: 'FastAPI',
          },
          {
            title: 'Classes as Dependencies',
            url: 'https://fastapi.tiangolo.com/tutorial/dependencies/classes-as-dependencies/',
            source: 'FastAPI',
          },
        ],
      },
      {
        id: 'fastapi-security',
        title: 'Security',
        description: 'Authentication and authorization.',
        order: 6,
        prerequisite: 'fastapi-dependencies',
        resources: [
          {
            title: 'Security Intro',
            url: 'https://fastapi.tiangolo.com/tutorial/security/',
            source: 'FastAPI',
          },
          {
            title: 'OAuth2 with Password',
            url: 'https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/',
            source: 'FastAPI',
          },
        ],
      },
    ],
  },
  'jwt': {
    id: 'jwt',
    name: 'JWT',
    description: 'JSON Web Tokens for authentication',
    steps: [
      {
        id: 'jwt-introduction',
        title: 'Introduction',
        description: 'What is JWT?',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Introduction to JSON Web Tokens',
            url: 'https://jwt.io/introduction',
            source: 'JWT.io',
          },
          {
            title: 'JWT Debugger',
            url: 'https://jwt.io/',
            source: 'JWT.io',
          },
        ],
      },
      {
        id: 'jwt-structure',
        title: 'Token Structure',
        description: 'Header, payload, and signature.',
        order: 2,
        prerequisite: 'jwt-introduction',
        resources: [
          {
            title: 'JWT Structure',
            url: 'https://jwt.io/introduction#what-is-the-json-web-token-structure-',
            source: 'JWT.io',
          },
          {
            title: 'RFC 7519 - JWT',
            url: 'https://datatracker.ietf.org/doc/html/rfc7519',
            source: 'IETF',
          },
        ],
      },
      {
        id: 'jwt-claims',
        title: 'Claims',
        description: 'Standard and custom claims.',
        order: 3,
        prerequisite: 'jwt-structure',
        resources: [
          {
            title: 'JWT Claims',
            url: 'https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims',
            source: 'Auth0',
          },
        ],
      },
      {
        id: 'jwt-signing',
        title: 'Signing Algorithms',
        description: 'HS256, RS256, and more.',
        order: 4,
        prerequisite: 'jwt-structure',
        resources: [
          {
            title: 'Signing Algorithms',
            url: 'https://auth0.com/docs/get-started/applications/signing-algorithms',
            source: 'Auth0',
          },
        ],
      },
      {
        id: 'jwt-best-practices',
        title: 'Best Practices',
        description: 'Security best practices.',
        order: 5,
        prerequisite: 'jwt-claims',
        resources: [
          {
            title: 'JWT Best Practices',
            url: 'https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/',
            source: 'Auth0',
          },
          {
            title: 'Token Storage',
            url: 'https://auth0.com/docs/secure/security-guidance/data-security/token-storage',
            source: 'Auth0',
          },
        ],
      },
      {
        id: 'jwt-refresh-tokens',
        title: 'Refresh Tokens',
        description: 'Token rotation strategies.',
        order: 6,
        prerequisite: 'jwt-best-practices',
        resources: [
          {
            title: 'Refresh Tokens',
            url: 'https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/',
            source: 'Auth0',
          },
        ],
      },
    ],
  },
};
