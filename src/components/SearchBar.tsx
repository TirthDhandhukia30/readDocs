import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Copy, Check, ExternalLink, Clock, X } from 'lucide-react';
import MiniSearch from 'minisearch';
import { searchIndex } from '../data/search';
import type { SearchEntry } from '../data/search';
import { cn } from '../lib/utils';
import { useRecentSearches } from '../hooks/useRecentSearches';

// Initialize MiniSearch with fuzzy search configuration
const miniSearch = new MiniSearch<SearchEntry>({
  fields: ['title', 'description', 'keywords', 'aliases', 'category'], // fields to index
  storeFields: ['id', 'title', 'description', 'url', 'category', 'source', 'keywords', 'aliases', 'priority', 'kind'],
  searchOptions: {
    boost: { title: 3, keywords: 2, aliases: 2, description: 1 },
    fuzzy: 0.2,
    prefix: true,
  },
  extractField: (document, fieldName) => {
    // Handle array fields like keywords and aliases
    const value = document[fieldName as keyof SearchEntry];
    if (Array.isArray(value)) {
      return value.join(' ');
    }
    return value as string;
  },
});

// Index all entries
miniSearch.addAll(searchIndex);

interface GroupedResults {
  category: string;
  entries: SearchEntry[];
}

// Highlight matching text in search results
function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return text;
  
  // Create a regex pattern that matches any of the search terms
  const pattern = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(pattern);
  
  return parts.map((part, i) => {
    const isMatch = terms.some(term => part.toLowerCase() === term.toLowerCase());
    return isMatch ? (
      <mark key={i} className="bg-[hsl(var(--foreground))]/10 text-inherit rounded-sm px-0.5">
        {part}
      </mark>
    ) : part;
  });
}

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    'Search documentation...',
    'Search across all docs',
    'Try "useEffect" or "Prisma"',
    'Find React, Next.js, Tailwind...',
    'Explore 500+ documentation pages',
    'Search "authentication" or "API"',
  ];

  // Rotate placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { recent, addRecent, removeRecent } = useRecentSearches();

  // Filter results based on query with MiniSearch
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.trim();
    
    // Use MiniSearch for fuzzy search
    const searchResults = miniSearch.search(searchTerm, {
      boost: { title: 3, keywords: 2, aliases: 2, description: 1 },
      fuzzy: 0.2,
      prefix: true,
    });
    
    // Map to full entries and sort by score + priority
    return searchResults
      .slice(0, 12)
      .map(r => searchIndex.find(e => e.id === r.id)!)
      .filter(Boolean)
      .sort((a, b) => {
        // Combine MiniSearch score with priority
        const aScore = searchResults.find(r => r.id === a.id)?.score || 0;
        const bScore = searchResults.find(r => r.id === b.id)?.score || 0;
        const aPriority = (a.priority || 50) / 100;
        const bPriority = (b.priority || 50) / 100;
        return (bScore * bPriority) - (aScore * aPriority);
      });
  }, [query]);

  // Group results by category for display
  const groupedResults = useMemo((): GroupedResults[] => {
    const groups: Record<string, SearchEntry[]> = {};
    for (const entry of results) {
      if (!groups[entry.category]) {
        groups[entry.category] = [];
      }
      groups[entry.category].push(entry);
    }
    return Object.entries(groups).map(([category, entries]) => ({ category, entries }));
  }, [results]);

  // Flat list for keyboard navigation
  const flatResults = useMemo(() => results, [results]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, flatResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && flatResults[selectedIndex]) {
      e.preventDefault();
      // Cmd+Enter opens in new tab (always), Enter opens in same tab
      if (e.metaKey || e.ctrlKey) {
        window.open(flatResults[selectedIndex].url, '_blank');
      } else {
        window.open(flatResults[selectedIndex].url, '_blank');
      }
      setIsOpen(false);
      setQuery('');
    }
  };

  // Handle query change
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleResultClick = (entry: SearchEntry, e: React.MouseEvent) => {
    // Cmd+Click copies URL
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      copyUrl(entry.url);
      return;
    }
    addRecent(query);
    window.open(entry.url, '_blank');
    setIsOpen(false);
    setQuery('');
  };

  const copyUrl = useCallback(async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  }, []);

  // Current flat index tracker for grouped display
  let currentFlatIndex = 0;

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-3 px-4 py-3 w-full max-w-xl mx-auto",
          "bg-[hsl(var(--muted))]",
          "border border-[hsl(var(--border))]",
          "rounded-xl",
          "text-[hsl(var(--muted-foreground))]",
          "hover:border-[hsl(var(--foreground))]/20",
          "transition-colors duration-200",
          "group cursor-text"
        )}
      >
        <Search className="w-4 h-4 flex-shrink-0" />
        <div className="flex-1 text-left text-sm h-5 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={placeholderIndex}
              initial={{ y: 12, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -12, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {placeholders[placeholderIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        {/* Desktop: show keyboard shortcut */}
        <kbd className={cn(
          "hidden sm:flex items-center gap-1 px-2 py-0.5",
          "bg-[hsl(var(--background))]",
          "border border-[hsl(var(--border))]",
          "rounded text-xs font-medium",
          "text-[hsl(var(--muted-foreground))]"
        )}>
          <Command className="w-3 h-3" />
          <span>K</span>
        </kbd>
        {/* Mobile: show tap hint */}
        <span className="sm:hidden text-xs text-[hsl(var(--muted-foreground))]">
          Tap to search
        </span>
      </button>

      {/* Search modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "fixed left-1/2 top-[15%] -translate-x-1/2 z-50",
                "w-full max-w-2xl mx-4",
                "bg-[hsl(var(--background))]",
                "border border-[hsl(var(--border))]",
                "rounded-2xl shadow-2xl",
                "overflow-hidden"
              )}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-[hsl(var(--border))]">
                <Search className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleQueryChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search documentation..."
                  className={cn(
                    "flex-1 bg-transparent outline-none",
                    "text-[hsl(var(--foreground))]",
                    "placeholder:text-[hsl(var(--muted-foreground))]"
                  )}
                />
                <kbd className={cn(
                  "px-2 py-1 rounded text-xs",
                  "bg-[hsl(var(--muted))]",
                  "text-[hsl(var(--muted-foreground))]"
                )}>
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={resultsRef} className="max-h-[400px] overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-[hsl(var(--muted-foreground))]">
                    <p>No results found for "{query}"</p>
                  </div>
                )}

                {/* Grouped results */}
                {groupedResults.map((group) => (
                  <div key={group.category}>
                    <div className="px-4 py-2 text-xs font-medium text-[hsl(var(--muted-foreground))] uppercase tracking-wider bg-[hsl(var(--muted))]/50">
                      {group.category}
                    </div>
                    {group.entries.map((entry) => {
                      const index = currentFlatIndex++;
                      return (
                        <button
                          key={entry.id}
                          data-index={index}
                          onClick={(e) => handleResultClick(entry, e)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={cn(
                            "w-full px-4 py-3 flex items-center gap-4 text-left",
                            "transition-colors duration-100",
                            index === selectedIndex
                              ? "bg-[hsl(var(--muted))]"
                              : "hover:bg-[hsl(var(--muted))]/50"
                          )}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-[hsl(var(--foreground))]">
                                {highlightMatch(entry.title, query)}
                              </span>
                              <span className="text-xs text-[hsl(var(--muted-foreground))]">
                                {entry.source}
                              </span>
                            </div>
                            <p className="text-sm text-[hsl(var(--muted-foreground))] truncate mt-0.5">
                              {highlightMatch(entry.description, query)}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Copy button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyUrl(entry.url);
                              }}
                              className={cn(
                                "p-1.5 rounded-md",
                                "hover:bg-[hsl(var(--background))]",
                                "text-[hsl(var(--muted-foreground))]",
                                "opacity-0 group-hover:opacity-100",
                                index === selectedIndex && "opacity-100"
                              )}
                              title="Copy link (⌘+Click)"
                            >
                              {copiedUrl === entry.url ? (
                                <Check className="w-3.5 h-3.5 text-green-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            
                            <ExternalLink className={cn(
                              "w-4 h-4 flex-shrink-0",
                              "text-[hsl(var(--muted-foreground))]",
                              index === selectedIndex && "text-[hsl(var(--foreground))]"
                            )} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}

                {/* Reset counter after rendering */}
                {(() => { currentFlatIndex = 0; return null; })()}

                {!query && (
                  <div className="px-4 py-6 space-y-6">
                    {/* Recent searches */}
                    {recent.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-[hsl(var(--muted-foreground))] flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            Recent searches
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recent.map((term) => (
                            <div
                              key={term}
                              className="group flex items-center gap-1"
                            >
                              <button
                                onClick={() => setQuery(term)}
                                className={cn(
                                  "px-3 py-1.5 rounded-l-lg text-sm",
                                  "bg-[hsl(var(--muted))]",
                                  "text-[hsl(var(--foreground))]",
                                  "hover:bg-[hsl(var(--muted))]/80",
                                  "border border-r-0 border-[hsl(var(--border))]",
                                  "transition-colors duration-200"
                                )}
                              >
                                {term}
                              </button>
                              <button
                                onClick={() => removeRecent(term)}
                                className={cn(
                                  "px-2 py-1.5 rounded-r-lg text-sm",
                                  "bg-[hsl(var(--muted))]",
                                  "text-[hsl(var(--muted-foreground))]",
                                  "hover:bg-red-500/20 hover:text-red-500",
                                  "border border-[hsl(var(--border))]",
                                  "transition-colors duration-200"
                                )}
                                title="Remove from recent"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Quick searches */}
                    <div>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                        Quick searches
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['flexbox', 'padding', 'useState', 'grid', 'interface', 'routing', 'async await', 'useEffect'].map((term) => (
                          <button
                            key={term}
                            onClick={() => setQuery(term)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-sm",
                              "bg-[hsl(var(--muted))]",
                              "text-[hsl(var(--foreground))]",
                              "hover:bg-[hsl(var(--muted))]/80 hover:border-[hsl(var(--foreground))]/10",
                              "border border-[hsl(var(--border))]",
                              "transition-colors duration-200"
                            )}
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className={cn(
                "px-4 py-3 border-t border-[hsl(var(--border))]",
                "flex items-center gap-4 text-xs text-[hsl(var(--muted-foreground))]"
              )}>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))]">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))]">↵</kbd>
                  <span>Open</span>
                </span>
                <span className="ml-auto text-[hsl(var(--muted-foreground))]/60">
                  {searchIndex.length} docs indexed
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
