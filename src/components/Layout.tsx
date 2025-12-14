import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Moon, Sun, Keyboard } from 'lucide-react';
import { KeyboardShortcuts } from './KeyboardShortcuts';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [showShortcuts, setShowShortcuts] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // ? for keyboard shortcuts help
      if (e.key === '?' && e.shiftKey) {
        e.preventDefault();
        setShowShortcuts(true);
      }

      // H for home (when not in input)
      if (e.key === 'h' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        if (location.pathname !== '/') {
          navigate({ to: '/' });
        }
      }

      // Escape to close modals or go back
      if (e.key === 'Escape') {
        if (showShortcuts) {
          setShowShortcuts(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname, showShortcuts]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] flex flex-col">
      {/* Header */}
      <header className="w-full print:hidden">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
            readDocs
          </Link>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowShortcuts(true)}
              className="p-2 rounded-full hover:bg-[hsl(var(--muted))] transition-colors hidden sm:flex"
              aria-label="Keyboard shortcuts"
              title="Keyboard shortcuts (?)"
            >
              <Keyboard className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-[hsl(var(--muted))] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto print:hidden">
        <div className="max-w-3xl mx-auto px-6 py-8">
        </div>
      </footer>

      {/* Keyboard shortcuts modal */}
      <KeyboardShortcuts isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
    </div>
  );
}
