/**
 * Schema.org Structured Data Generators
 * Generates JSON-LD structured data for various page types
 */

import { SEO_CONFIG } from './config';

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CourseParams {
  name: string;
  description: string;
  url: string;
  stepsCount: number;
  category?: string;
  datePublished?: string;
  dateModified?: string;
}

export interface WebPageParams {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

// ============================================================================
// Schema Generators
// ============================================================================

/**
 * Generate Website schema for homepage
 */
export function generateWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    alternateName: ['Read Docs', 'readdocs.vercel.app'],
    description: 'Structured learning paths through official documentation for developers',
    url: SEO_CONFIG.baseUrl,
    inLanguage: 'en-US',
    publisher: generateOrganizationSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.baseUrl}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(): object {
  return {
    '@type': 'Organization',
    name: SEO_CONFIG.organization.name,
    url: SEO_CONFIG.organization.url,
    logo: SEO_CONFIG.organization.logo,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Course schema (for learning paths)
 */
export function generateCourseSchema(params: CourseParams): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: params.name,
    description: params.description,
    url: params.url,
    provider: generateOrganizationSchema(),
    educationalLevel: 'Beginner to Advanced',
    isAccessibleForFree: true,
    numberOfCredits: params.stepsCount,
    inLanguage: 'en-US',
    ...(params.category && {
      about: {
        '@type': 'Thing',
        name: params.category,
      },
    }),
    ...(params.datePublished && { datePublished: params.datePublished }),
    ...(params.dateModified && { dateModified: params.dateModified }),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate HowTo schema (for step-by-step guides)
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(params: WebPageParams): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: params.name,
    description: params.description,
    url: params.url,
    isPartOf: {
      '@type': 'WebSite',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.baseUrl,
    },
    ...(params.datePublished && { datePublished: params.datePublished }),
    ...(params.dateModified && { dateModified: params.dateModified }),
  };
}

/**
 * Generate ItemList schema (for collections)
 */
export function generateItemListSchema(
  name: string,
  items: Array<{ name: string; url: string; description?: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  };
}

// ============================================================================
// Helpers
// ============================================================================

/**
 * Combine multiple schemas into a single JSON-LD script content
 */
export function combineSchemas(...schemas: object[]): string {
  if (schemas.length === 0) return '';
  if (schemas.length === 1) return JSON.stringify(schemas[0]);
  return JSON.stringify(schemas);
}

/**
 * Generate breadcrumb items from path segments
 */
export function generateBreadcrumbsFromPath(
  path: string,
  labels: Record<string, string> = {}
): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: SEO_CONFIG.baseUrl },
  ];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    items.push({
      name: label,
      url: `${SEO_CONFIG.baseUrl}${currentPath}`,
    });
  }

  return items;
}
