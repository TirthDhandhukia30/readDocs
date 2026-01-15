/**
 * Content Registry Types
 * Type definitions for the modular content system
 */

// ============================================================================
// Registry
// ============================================================================

export interface ContentRegistry {
  version: string;
  generatedAt: string;
  skills: string[];
  domains: string[];
  languages: string[];
  stats: {
    totalSkills: number;
    totalDomains: number;
    totalLanguages: number;
    totalItems: number;
  };
}

// ============================================================================
// Common Types
// ============================================================================

export interface Resource {
  title: string;
  url: string;
  source: string;
  description?: string;
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  order: number;
  prerequisite: string | null;
  resources: Resource[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentMetadata {
  createdAt: string;
  updatedAt: string;
  priority: number;
}

// ============================================================================
// Content Types
// ============================================================================

export interface SkillContent {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  summary: string;
  longDescription: string;
  steps: LearningStep[];
  tags: string[];
  relatedSkillIds: string[];
  faqs: FAQ[];
  metadata: ContentMetadata;
}

export interface DomainContent {
  id: string;
  slug: string;
  name: string;
  description: string;
  summary: string;
  longDescription: string;
  steps: LearningStep[];
  tags: string[];
  relatedDomainIds: string[];
  relatedSkillIds: string[];
  faqs: FAQ[];
  metadata: ContentMetadata;
}

export interface LanguageContent {
  id: string;
  slug: string;
  name: string;
  description: string;
  summary: string;
  longDescription: string;
  features: string[];
  links: Array<Resource & { category?: string }>;
  tags: string[];
  relatedLanguageIds: string[];
  faqs: FAQ[];
  metadata: ContentMetadata;
}

// ============================================================================
// Union Types
// ============================================================================

export type ContentType = 'skill' | 'domain' | 'language';

export type ContentItem = SkillContent | DomainContent | LanguageContent;

export interface ContentRef {
  id: string;
  type: ContentType;
  name: string;
}
