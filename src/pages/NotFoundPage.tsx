import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
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
    </div>
  );
}
