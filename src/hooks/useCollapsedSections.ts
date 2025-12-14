import { useState, useEffect, useCallback } from 'react';

const STORAGE_PREFIX = 'readDocs-collapsed-';

export function useCollapsedSections(skillId: string) {
  const storageKey = `${STORAGE_PREFIX}${skillId}`;
  
  const [collapsed, setCollapsed] = useState<Set<number>>(() => {
    if (typeof window === 'undefined') return new Set();
    const saved = localStorage.getItem(storageKey);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify([...collapsed]));
  }, [collapsed, storageKey]);

  const toggle = useCallback((index: number) => {
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const isCollapsed = useCallback((index: number) => collapsed.has(index), [collapsed]);

  const expandAll = useCallback(() => setCollapsed(new Set()), []);
  
  const collapseAll = useCallback((indices: number[]) => {
    setCollapsed(new Set(indices));
  }, []);

  const isAllExpanded = collapsed.size === 0;
  const isAllCollapsed = useCallback((total: number) => collapsed.size === total, [collapsed.size]);

  return { 
    isCollapsed, 
    toggle, 
    expandAll, 
    collapseAll,
    isAllExpanded,
    isAllCollapsed,
  };
}
