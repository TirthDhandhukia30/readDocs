/**
 * SEO Library Exports
 * Centralized exports for all SEO-related utilities
 */

// Configuration
export { SEO_CONFIG, getCanonicalUrl, getOgImageUrl } from './config';

// Schema generators
export {
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateCourseSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateWebPageSchema,
  generateItemListSchema,
  combineSchemas,
  generateBreadcrumbsFromPath,
  type BreadcrumbItem,
  type FAQ,
  type CourseParams,
  type WebPageParams,
  type HowToStep,
} from './schema';

// Templates
export {
  titleTemplates,
  descriptionTemplates,
  h1Templates,
  generateKeywords,
  faqTemplates,
  getUniqueAngle,
  detectPotentialCannibalization,
  type FAQTemplate,
} from './templates';
