import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Home, Search, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { NotFoundPageSEO } from '../components/SEO';

// Popular skills to suggest
const popularSkills = [
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'tailwindcss', name: 'Tailwind CSS' },
];

// Popular domains to suggest
const popularDomains = [
  { id: 'web-development', name: 'Web Development' },
  { id: 'mobile-development', name: 'Mobile Development' },
];

export function NotFoundPage() {
  return (
    <>
      <NotFoundPageSEO />
      <div className="max-w-2xl mx-auto px-4 min-h-[70vh] py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="text-8xl font-bold text-[hsl(var(--muted-foreground))]/20 mb-4">
            404
          </div>
          <h1 className="text-2xl font-medium mb-3">Page not found</h1>
          <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => {
                // Trigger search modal via keyboard event
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  bubbles: true,
                });
                document.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[hsl(var(--border))] rounded-lg hover:bg-[hsl(var(--muted))] transition-colors text-sm font-medium"
            >
              <Search className="w-4 h-4" />
              Search Docs
            </button>
          </div>
        </motion.div>

        {/* Helpful Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Popular Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
              <h2 className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                Popular Learning Paths
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {popularSkills.map((skill) => (
                <a
                  key={skill.id}
                  href={`/skill/${skill.id}`}
                  className="group flex items-center justify-between px-4 py-3 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors"
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Domains */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
              <h2 className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                Explore Domains
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {popularDomains.map((domain) => (
                <a
                  key={domain.id}
                  href={`/domain/${domain.id}`}
                  className="group flex items-center justify-between px-4 py-3 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors"
                >
                  <span className="text-sm font-medium">{domain.name}</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className="text-center pt-4">
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[10px] font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[10px] font-mono">K</kbd> to search
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
