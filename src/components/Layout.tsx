import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Moon, Sun, Keyboard, X, Copy, Check, ArrowRight, Coffee, CreditCard, Star } from 'lucide-react';
import { KeyboardShortcuts } from './KeyboardShortcuts';

interface LayoutProps {
  children: ReactNode;
}

function DonateModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[hsl(var(--muted))] transition-colors"
        >
          <X className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
        </button>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-1">Support readDocs</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Help me get a proper domain
          </p>
        </div>

        <div className="space-y-2">
          {/* Buy Me a Coffee */}
          <a
            href="https://buymeacoffee.com/tirth30infn"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--foreground))]/10 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Coffee className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
              <div>
                <p className="font-medium text-sm">Buy Me a Coffee</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </a>

          {/* UPI */}
          <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
              <div>
                <p className="font-medium text-sm">UPI</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">9137813827@upi</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard('9137813827@upi', 'upi')}
              className="p-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
            >
              {copied === 'upi' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
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
  const [showDonate, setShowDonate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            <a
              href="https://github.com/TirthDhandhukia30/readDocs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[hsl(var(--muted))] transition-colors hidden sm:flex items-center gap-1.5"
              aria-label="Star on GitHub"
              title="Star on GitHub"
            >
              <Star className="h-4 w-4" />
            </a>
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

      {/* Help me get a domain */}
      <section className="print:hidden">
        <div className="max-w-2xl mx-auto px-6 pb-6">
          <button
            onClick={() => setShowDonate(true)}
            className="group w-full flex items-center justify-between px-4 py-3 rounded-xl border border-dashed border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))]/20 hover:bg-[hsl(var(--muted))]/50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Coffee className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
              <span className="text-sm text-[hsl(var(--muted-foreground))]">Help me get a domain</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto print:hidden">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <p className="text-center text-xs text-[hsl(var(--muted-foreground))]">
            Made with <span className="text-red-500">♥</span>{' '}
            <a
              href="https://tirthdhandhukia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Tirthhh
            </a>
          </p>
        </div>
      </footer>

      {/* Keyboard shortcuts modal */}
      <KeyboardShortcuts isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />

      {/* Donate modal */}
      <DonateModal isOpen={showDonate} onClose={() => setShowDonate(false)} />
    </div>
  );
}
