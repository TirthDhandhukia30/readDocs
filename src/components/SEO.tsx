import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: object;
}

const BASE_URL = 'https://readdocs.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/images/rd-og.png`;
const SITE_NAME = 'readDocs';

export function SEO({
  title,
  description = 'Master React, TypeScript, Next.js, Tailwind CSS, and 25+ technologies through structured learning paths. No tutorials, no rewrites—just official documentation in the right order.',
  keywords = 'learn programming, official documentation, React tutorial, TypeScript guide, Next.js learning path, Tailwind CSS, web development, coding resources',
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = 'website',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title
    ? `${title} - ${SITE_NAME}`
    : `${SITE_NAME} - Learn Programming from Official Documentation`;

  const canonicalUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content="@readdocs" />
      <meta name="twitter:creator" content="@readdocs" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-configured SEO components for specific page types
export function HomePageSEO() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: ['Read Docs', 'readdocs.vercel.app'],
    description: 'Structured learning paths through official documentation for developers',
    url: BASE_URL,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <SEO
      structuredData={structuredData}
    />
  );
}

interface SkillPageSEOProps {
  skillName: string;
  skillId: string;
  category: string;
  stepsCount: number;
}

export function SkillPageSEO({ skillName, skillId, category, stepsCount }: SkillPageSEOProps) {
  const description = `Master ${skillName} through ${stepsCount} structured learning steps. Official documentation and resources for ${category}.`;
  const url = `${BASE_URL}/skill/${skillId}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${skillName} Learning Path`,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    educationalLevel: 'Beginner to Advanced',
    isAccessibleForFree: true,
    numberOfCredits: stepsCount,
  };

  return (
    <SEO
      title={`${skillName} Learning Path`}
      description={description}
      keywords={`${skillName}, ${category}, learn ${skillName}, ${skillName} tutorial, ${skillName} documentation, ${skillName} guide`}
      url={url}
      structuredData={structuredData}
    />
  );
}

interface DomainPageSEOProps {
  domainName: string;
  domainId: string;
  description: string;
  stepsCount: number;
}

export function DomainPageSEO({ domainName, domainId, description, stepsCount }: DomainPageSEOProps) {
  const fullDescription = `${description} Learn ${domainName} development through ${stepsCount} structured steps using official documentation.`;
  const url = `${BASE_URL}/domain/${domainId}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${domainName} Learning Path`,
    description: fullDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    educationalLevel: 'Beginner to Advanced',
    isAccessibleForFree: true,
    numberOfCredits: stepsCount,
  };

  return (
    <SEO
      title={`${domainName} Learning Path`}
      description={fullDescription}
      keywords={`${domainName}, ${domainName.toLowerCase()} development, learn ${domainName.toLowerCase()}, ${domainName.toLowerCase()} tutorial, ${domainName.toLowerCase()} documentation`}
      url={url}
      structuredData={structuredData}
    />
  );
}

interface LanguagePageSEOProps {
  languageName: string;
  languageId: string;
  description: string;
  linksCount: number;
}

export function LanguagePageSEO({ languageName, languageId, description, linksCount }: LanguagePageSEOProps) {
  const fullDescription = `${description} Explore ${linksCount} curated documentation links for ${languageName} programming.`;
  const url = `${BASE_URL}/language/${languageId}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${languageName} Documentation`,
    description: fullDescription,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    programmingLanguage: languageName,
    educationalLevel: 'Beginner to Advanced',
    isAccessibleForFree: true,
  };

  return (
    <SEO
      title={`${languageName} Documentation`}
      description={fullDescription}
      keywords={`${languageName}, ${languageName.toLowerCase()} programming, learn ${languageName.toLowerCase()}, ${languageName.toLowerCase()} tutorial, ${languageName.toLowerCase()} documentation, ${languageName.toLowerCase()} guide`}
      url={url}
      structuredData={structuredData}
    />
  );
}

export function NotFoundPageSEO() {
  return (
    <SEO
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Return to readDocs to continue learning."
      noIndex={true}
    />
  );
}
