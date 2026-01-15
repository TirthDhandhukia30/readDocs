/**
 * Content Loaders
 * Functions to load content from modular JSON files
 * Designed to work with both Vite (current) and Next.js (future migration)
 */

import type {
  ContentRegistry,
  SkillContent,
  DomainContent,
  LanguageContent,
  ContentType,
  ContentRef,
} from './types';

// ============================================================================
// Cache Layer
// ============================================================================

// In-memory cache for loaded content (cleared on page refresh)
const contentCache = new Map<string, unknown>();

function getCacheKey(type: ContentType, id: string): string {
  return `${type}:${id}`;
}

function getCached<T>(type: ContentType, id: string): T | null {
  const key = getCacheKey(type, id);
  const cached = contentCache.get(key);
  return cached ? (cached as T) : null;
}

function setCache<T>(type: ContentType, id: string, content: T): void {
  const key = getCacheKey(type, id);
  contentCache.set(key, content);
}

// ============================================================================
// Registry Loader
// ============================================================================

let registryCache: ContentRegistry | null = null;

/**
 * Load the content registry (index of all content IDs)
 * This is the source of truth for generateStaticParams in Next.js
 */
export async function getRegistry(): Promise<ContentRegistry> {
  if (registryCache) return registryCache;

  try {
    // Dynamic import for Vite compatibility
    const registry = await import('../../../content/registry.json');
    registryCache = registry.default || registry;
    return registryCache;
  } catch {
    // Fallback to empty registry if not yet generated
    console.warn('[Content] Registry not found, returning empty registry');
    return {
      version: '0.0.0',
      generatedAt: new Date().toISOString(),
      skills: [],
      domains: [],
      languages: [],
      stats: {
        totalSkills: 0,
        totalDomains: 0,
        totalLanguages: 0,
        totalItems: 0,
      },
    };
  }
}

// ============================================================================
// Skill Loaders
// ============================================================================

/**
 * Get all skill IDs (for generateStaticParams in Next.js)
 */
export async function getAllSkillIds(): Promise<string[]> {
  const registry = await getRegistry();
  return registry.skills;
}

/**
 * Load a single skill by ID
 */
export async function getSkill(id: string): Promise<SkillContent | null> {
  // Check cache first
  const cached = getCached<SkillContent>('skill', id);
  if (cached) return cached;

  try {
    // Dynamic import for Vite compatibility
    const content = await import(`../../../content/skills/${id}.json`);
    const skill = (content.default || content) as SkillContent;
    setCache('skill', id, skill);
    return skill;
  } catch {
    console.warn(`[Content] Skill not found: ${id}`);
    return null;
  }
}

/**
 * Load multiple skills by IDs
 */
export async function getSkills(ids: string[]): Promise<SkillContent[]> {
  const skills = await Promise.all(ids.map(getSkill));
  return skills.filter((s): s is SkillContent => s !== null);
}

// ============================================================================
// Domain Loaders
// ============================================================================

/**
 * Get all domain IDs (for generateStaticParams in Next.js)
 */
export async function getAllDomainIds(): Promise<string[]> {
  const registry = await getRegistry();
  return registry.domains;
}

/**
 * Load a single domain by ID
 */
export async function getDomain(id: string): Promise<DomainContent | null> {
  const cached = getCached<DomainContent>('domain', id);
  if (cached) return cached;

  try {
    const content = await import(`../../../content/domains/${id}.json`);
    const domain = (content.default || content) as DomainContent;
    setCache('domain', id, domain);
    return domain;
  } catch {
    console.warn(`[Content] Domain not found: ${id}`);
    return null;
  }
}

/**
 * Load multiple domains by IDs
 */
export async function getDomains(ids: string[]): Promise<DomainContent[]> {
  const domains = await Promise.all(ids.map(getDomain));
  return domains.filter((d): d is DomainContent => d !== null);
}

// ============================================================================
// Language Loaders
// ============================================================================

/**
 * Get all language IDs (for generateStaticParams in Next.js)
 */
export async function getAllLanguageIds(): Promise<string[]> {
  const registry = await getRegistry();
  return registry.languages;
}

/**
 * Load a single language by ID
 */
export async function getLanguage(id: string): Promise<LanguageContent | null> {
  const cached = getCached<LanguageContent>('language', id);
  if (cached) return cached;

  try {
    const content = await import(`../../../content/languages/${id}.json`);
    const language = (content.default || content) as LanguageContent;
    setCache('language', id, language);
    return language;
  } catch {
    console.warn(`[Content] Language not found: ${id}`);
    return null;
  }
}

/**
 * Load multiple languages by IDs
 */
export async function getLanguages(ids: string[]): Promise<LanguageContent[]> {
  const languages = await Promise.all(ids.map(getLanguage));
  return languages.filter((l): l is LanguageContent => l !== null);
}

// ============================================================================
// Related Content
// ============================================================================

/**
 * Get related content for a given item
 */
export async function getRelatedContent(
  currentId: string,
  type: ContentType,
  limit: number = 6
): Promise<ContentRef[]> {
  const related: ContentRef[] = [];

  if (type === 'skill') {
    const skill = await getSkill(currentId);
    if (skill?.relatedSkillIds) {
      const relatedSkills = await getSkills(skill.relatedSkillIds.slice(0, limit));
      related.push(
        ...relatedSkills.map((s) => ({
          id: s.id,
          type: 'skill' as ContentType,
          name: s.name,
        }))
      );
    }
  } else if (type === 'domain') {
    const domain = await getDomain(currentId);
    if (domain) {
      // Add related domains
      if (domain.relatedDomainIds) {
        const relatedDomains = await getDomains(domain.relatedDomainIds.slice(0, 2));
        related.push(
          ...relatedDomains.map((d) => ({
            id: d.id,
            type: 'domain' as ContentType,
            name: d.name,
          }))
        );
      }
      // Add related skills
      if (domain.relatedSkillIds) {
        const relatedSkills = await getSkills(domain.relatedSkillIds.slice(0, limit - related.length));
        related.push(
          ...relatedSkills.map((s) => ({
            id: s.id,
            type: 'skill' as ContentType,
            name: s.name,
          }))
        );
      }
    }
  } else if (type === 'language') {
    const language = await getLanguage(currentId);
    if (language?.relatedLanguageIds) {
      const relatedLanguages = await getLanguages(language.relatedLanguageIds.slice(0, limit));
      related.push(
        ...relatedLanguages.map((l) => ({
          id: l.id,
          type: 'language' as ContentType,
          name: l.name,
        }))
      );
    }
  }

  return related.slice(0, limit);
}

// ============================================================================
// Stats
// ============================================================================

/**
 * Get content statistics
 */
export async function getContentStats() {
  const registry = await getRegistry();
  return registry.stats;
}

// ============================================================================
// Preload Helpers (for performance)
// ============================================================================

/**
 * Preload all content into cache (useful for SSG/build time)
 */
export async function preloadAllContent(): Promise<void> {
  const registry = await getRegistry();

  console.log('[Content] Preloading all content...');

  await Promise.all([
    ...registry.skills.map((id) => getSkill(id)),
    ...registry.domains.map((id) => getDomain(id)),
    ...registry.languages.map((id) => getLanguage(id)),
  ]);

  console.log(`[Content] Preloaded ${registry.stats.totalItems} items`);
}

/**
 * Clear the content cache
 */
export function clearContentCache(): void {
  contentCache.clear();
  registryCache = null;
}
