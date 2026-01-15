/**
 * Related Content Component
 * Implements hub-and-spoke internal linking for SEO
 */

import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { skills } from '../data/skillPaths';
import { domains, languages } from '../data/learningPaths';

interface RelatedItem {
  id: string;
  name: string;
  type: 'skill' | 'domain' | 'language';
  category?: string;
}

interface RelatedContentProps {
  currentId: string;
  currentType: 'skill' | 'domain' | 'language';
  maxItems?: number;
  className?: string;
}

/**
 * Get related content based on category similarity and type
 */
function getRelatedContent(
  currentId: string,
  currentType: string,
  maxItems: number
): RelatedItem[] {
  const related: RelatedItem[] = [];

  if (currentType === 'skill') {
    const currentSkill = skills.find((s) => s.id === currentId);
    if (!currentSkill) return [];

    // Get skills in the same category
    const sameCategory = skills
      .filter((s) => s.id !== currentId && s.category === currentSkill.category)
      .slice(0, Math.ceil(maxItems / 2))
      .map((s) => ({ id: s.id, name: s.name, type: 'skill' as const, category: s.category }));

    // Get skills from other categories for diversity
    const otherCategories = skills
      .filter((s) => s.id !== currentId && s.category !== currentSkill.category)
      .slice(0, Math.floor(maxItems / 2))
      .map((s) => ({ id: s.id, name: s.name, type: 'skill' as const, category: s.category }));

    related.push(...sameCategory, ...otherCategories);
  } else if (currentType === 'domain') {
    // For domains, show related domains and key skills
    const otherDomains = domains
      .filter((d) => d.id !== currentId)
      .slice(0, 2)
      .map((d) => ({ id: d.id, name: d.name, type: 'domain' as const }));

    const popularSkills = skills
      .filter((s) => s.category === 'framework' || s.category === 'library')
      .slice(0, maxItems - otherDomains.length)
      .map((s) => ({ id: s.id, name: s.name, type: 'skill' as const, category: s.category }));

    related.push(...otherDomains, ...popularSkills);
  } else if (currentType === 'language') {
    // For languages, show other languages and related tools
    const otherLanguages = languages
      .filter((l) => l.id !== currentId)
      .map((l) => ({ id: l.id, name: l.name, type: 'language' as const }));

    const relatedTools = skills
      .filter((s) => s.category === 'tool' || s.category === 'runtime')
      .slice(0, maxItems - otherLanguages.length)
      .map((s) => ({ id: s.id, name: s.name, type: 'skill' as const, category: s.category }));

    related.push(...otherLanguages, ...relatedTools);
  }

  return related.slice(0, maxItems);
}

/**
 * Get the correct route path for an item
 */
function getItemPath(item: RelatedItem): string {
  switch (item.type) {
    case 'skill':
      return `/skill/${item.id}`;
    case 'domain':
      return `/domain/${item.id}`;
    case 'language':
      return `/language/${item.id}`;
  }
}

/**
 * Get a display label for the item type/category
 */
function getItemLabel(item: RelatedItem): string {
  if (item.category) {
    return item.category.charAt(0).toUpperCase() + item.category.slice(1);
  }
  return item.type.charAt(0).toUpperCase() + item.type.slice(1);
}

export function RelatedContent({
  currentId,
  currentType,
  maxItems = 6,
  className = '',
}: RelatedContentProps) {
  const relatedItems = getRelatedContent(currentId, currentType, maxItems);

  if (relatedItems.length === 0) return null;

  return (
    <section className={`mt-12 ${className}`} aria-labelledby="related-content-heading">
      <h2
        id="related-content-heading"
        className="text-lg font-medium mb-4"
      >
        Continue Learning
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {relatedItems.map((item) => (
          <Link
            key={`${item.type}-${item.id}`}
            to={getItemPath(item)}
            className="group flex items-center justify-between px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--foreground))]/10 transition-all duration-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-medium text-sm truncate">{item.name}</span>
              <span className="text-[10px] text-[hsl(var(--muted-foreground))] flex-shrink-0">
                {getItemLabel(item)}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Prerequisite Links Component
 * Shows what to learn before the current topic
 */
interface PrerequisiteLinksProps {
  prerequisites: Array<{ id: string; name: string; type: 'skill' | 'domain' | 'language' }>;
  className?: string;
}

export function PrerequisiteLinks({ prerequisites, className = '' }: PrerequisiteLinksProps) {
  if (prerequisites.length === 0) return null;

  return (
    <div className={`mb-6 ${className}`}>
      <p className="text-xs text-[hsl(var(--muted-foreground))] mb-2">
        Prerequisites:
      </p>
      <div className="flex flex-wrap gap-2">
        {prerequisites.map((prereq) => (
          <Link
            key={`${prereq.type}-${prereq.id}`}
            to={getItemPath({ ...prereq, name: prereq.name })}
            className="text-xs px-2 py-1 rounded-md bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted))]/80 transition-colors"
          >
            {prereq.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Next Steps Component
 * Shows what to learn after the current topic
 */
interface NextStepsProps {
  nextItems: Array<{ id: string; name: string; type: 'skill' | 'domain' | 'language' }>;
  className?: string;
}

export function NextSteps({ nextItems, className = '' }: NextStepsProps) {
  if (nextItems.length === 0) return null;

  return (
    <section className={`mt-8 ${className}`}>
      <h2 className="text-sm font-medium mb-3">What to Learn Next</h2>
      <div className="flex flex-wrap gap-2">
        {nextItems.map((item) => (
          <Link
            key={`${item.type}-${item.id}`}
            to={getItemPath({ ...item, name: item.name })}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm bg-[hsl(var(--muted))] hover:bg-[hsl(var(--foreground))]/10 transition-colors"
          >
            {item.name}
            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </section>
  );
}
