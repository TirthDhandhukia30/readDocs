# readDocs

Navigate official documentation with clarity, order, and correctness.

## Overview

readDocs is a structured learning path navigator that helps you master major tech domains by guiding you through official documentation in the correct order. No rewrites, no third-party tutorials—just the right docs in the right sequence.

## Supported Domains

- **Web Development** - HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js
- **Mobile Development** - Swift, SwiftUI, Kotlin, Jetpack Compose, React Native, Flutter
- **Web3** - Blockchain fundamentals, Solidity, Smart Contracts, ethers.js/viem, DeFi
- **AI & Machine Learning** - Python, NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow, Hugging Face

## Tech Stack

- [React](https://react.dev/) - UI Library
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Guiding Principles

1. **Official Sources Only** - Every link points to official documentation
2. **Strict Dependency Order** - Clear prerequisites for each step
3. **No Tool Hype** - Focus on what matters for learning
4. **Clear Mental Models** - Build correct understanding from the ground up

## Features

- 🎯 Domain-based learning paths
- 📊 Progress tracking with local storage
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🔗 Direct links to official documentation

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── Layout.tsx  # Main layout with header/footer
├── data/           # Learning path data
│   └── learningPaths.ts
├── pages/          # Page components
│   ├── HomePage.tsx
│   └── DomainPage.tsx
├── types.ts        # TypeScript type definitions
├── router.tsx      # TanStack Router configuration
├── main.tsx        # App entry point
└── index.css       # Global styles with Tailwind
```

## Contributing

Feel free to submit PRs to:
- Add new domains or learning paths
- Update documentation links
- Improve the UI/UX
- Fix bugs

## License

MIT
