import { useState, useEffect } from 'react';

const MAX_RECENT = 5;
const STORAGE_KEY = 'readDocs-recent-searches';

export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  }, [recent]);

  const addRecent = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;
    
    setRecent(prev => {
      const filtered = prev.filter(q => q.toLowerCase() !== trimmed.toLowerCase());
      return [trimmed, ...filtered].slice(0, MAX_RECENT);
    });
  };

  const removeRecent = (query: string) => {
    setRecent(prev => prev.filter(q => q !== query));
  };

  const clearRecent = () => setRecent([]);

  return { recent, addRecent, removeRecent, clearRecent };
}
