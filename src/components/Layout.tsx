import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Moon, Sun, Keyboard, X, Copy, Check, ArrowRight, Coffee, CreditCard } from 'lucide-react';

// GitHub Stars Button Component
function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Fetch star count from GitHub API
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/TirthDhandhukia30/readDocs');
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
      }
    };

    fetchStars();
    // Refresh every 5 minutes
    const interval = setInterval(fetchStars, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return (count / 1000).toFixed(count >= 10000 ? 0 : 1) + 'k';
    }
    return count.toString();
  };

  return (
    <div className="relative">
      <a
        href="https://github.com/TirthDhandhukia30/readDocs"
        target="_blank"
        rel="noopener noreferrer"
        className="github-stars-btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted))]/80 transition-all duration-200"
        aria-label="Star on GitHub"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* GitHub Octicon */}
        <svg
          viewBox="0 0 16 16"
          className="h-4 w-4 fill-current text-[hsl(var(--muted-foreground))]"
          aria-hidden="true"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
        {stars !== null && (
          <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
            {formatStars(stars)}
          </span>
        )}
      </a>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1.5 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-xs font-medium rounded-md whitespace-nowrap z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-150">
          Star on GitHub
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[hsl(var(--foreground))] rotate-45" />
        </div>
      )}
    </div>
  );
}
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
            <div className="hidden sm:block">
              <GitHubStars />
            </div>
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
