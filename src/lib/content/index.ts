/**
 * Content Library Exports
 */

// Types
export type {
  ContentRegistry,
  SkillContent,
  DomainContent,
  LanguageContent,
  ContentType,
  ContentItem,
  ContentRef,
  Resource,
  LearningStep,
  FAQ,
  ContentMetadata,
} from './types';

// Loaders
export {
  // Registry
  getRegistry,

  // Skills
  getAllSkillIds,
  getSkill,
  getSkills,

  // Domains
  getAllDomainIds,
  getDomain,
  getDomains,

  // Languages
  getAllLanguageIds,
  getLanguage,
  getLanguages,

  // Related Content
  getRelatedContent,

  // Stats
  getContentStats,

  // Cache Management
  preloadAllContent,
  clearContentCache,
} from './loaders';
