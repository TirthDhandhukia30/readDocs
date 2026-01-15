/**
 * SEO Configuration
 * Centralized configuration for all SEO-related constants and settings
 */

export const SEO_CONFIG = {
  // Base URLs
  baseUrl: 'https://readdocs.vercel.app',
  siteName: 'readDocs',

  // Social
  twitterHandle: '@readdocs',

  // Default images
  defaultOgImage: '/images/rd-og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // Default descriptions
  defaultDescription: 'Master React, TypeScript, Next.js, Tailwind CSS, and 25+ technologies through structured learning paths. No tutorials, no rewrites—just official documentation in the right order.',
  defaultKeywords: 'learn programming, official documentation, React tutorial, TypeScript guide, Next.js learning path, Tailwind CSS, web development, coding resources',

  // Robots defaults
  defaultRobots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  // Schema.org
  organization: {
    name: 'readDocs',
    url: 'https://readdocs.vercel.app',
    logo: 'https://readdocs.vercel.app/favicon.svg',
  },
} as const;

/**
 * URL helpers
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.baseUrl}${cleanPath}`;
}

export function getOgImageUrl(image?: string): string {
  if (!image) return `${SEO_CONFIG.baseUrl}${SEO_CONFIG.defaultOgImage}`;
  if (image.startsWith('http')) return image;
  return `${SEO_CONFIG.baseUrl}${image}`;
}
