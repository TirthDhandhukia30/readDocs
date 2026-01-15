/**
 * Enhanced SEO Components
 * Fully refactored SEO system with structured data, breadcrumbs, and anti-cannibalization
 */

import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, getCanonicalUrl, getOgImageUrl } from '../lib/seo/config';
import {
  generateWebsiteSchema,
  generateCourseSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateItemListSchema,
  combineSchemas,
  type BreadcrumbItem,
  type FAQ,
} from '../lib/seo/schema';
import {
  descriptionTemplates,
  generateKeywords,
  faqTemplates,
  getUniqueAngle,
} from '../lib/seo/templates';

// ============================================================================
// Base SEO Component
// ============================================================================

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title,
  description = SEO_CONFIG.defaultDescription,
  keywords = SEO_CONFIG.defaultKeywords,
  image,
  url = SEO_CONFIG.baseUrl,
  type = 'website',
  noIndex = false,
  structuredData,
  breadcrumbs,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const fullTitle = title
    ? `${title} - ${SEO_CONFIG.siteName}`
    : `${SEO_CONFIG.siteName} - Learn Programming from Official Documentation`;

  const canonicalUrl = getCanonicalUrl(url);
  const ogImage = getOgImageUrl(image);

  // Combine all structured data
  const allSchemas: object[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (structuredData) {
    if (Array.isArray(structuredData)) {
      allSchemas.push(...structuredData);
    } else {
      allSchemas.push(structuredData);
    }
  }

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
        <meta name="robots" content={SEO_CONFIG.defaultRobots} />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(SEO_CONFIG.ogImageWidth)} />
      <meta property="og:image:height" content={String(SEO_CONFIG.ogImageHeight)} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />

      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {combineSchemas(...allSchemas)}
        </script>
      )}
    </Helmet>
  );
}

// ============================================================================
// Homepage SEO
// ============================================================================

export function HomePageSEO() {
  const websiteSchema = generateWebsiteSchema();

  return (
    <SEO
      structuredData={websiteSchema}
      breadcrumbs={[{ name: 'Home', url: SEO_CONFIG.baseUrl }]}
    />
  );
}

// ============================================================================
// Skill Page SEO
// ============================================================================

interface SkillPageSEOProps {
  skillName: string;
  skillId: string;
  category: string;
  stepsCount: number;
  stepTitles?: string[];
  customDescription?: string;
}

export function SkillPageSEO({
  skillName,
  skillId,
  category,
  stepsCount,
  stepTitles = [],
  customDescription,
}: SkillPageSEOProps) {
  const path = `/skill/${skillId}`;
  const url = getCanonicalUrl(path);

  // Generate unique title using anti-cannibalization
  const angle = getUniqueAngle('skill', skillName);
  const title = `${skillName} ${angle}`;

  // Generate rich description
  const description = customDescription || (
    stepTitles.length > 0
      ? descriptionTemplates.skill.detailed(skillName, category, stepsCount, stepTitles)
      : descriptionTemplates.skill.default(skillName, category, stepsCount)
  );

  // Generate keywords
  const keywords = generateKeywords('skill', skillName, category, stepTitles.slice(0, 5));

  // Generate FAQs from templates
  const faqs: FAQ[] = faqTemplates.skill.slice(0, 3).map((template) => ({
    question: template.question(skillName, category),
    answer: template.answer(skillName, category),
  }));

  // Build schemas
  const courseSchema = generateCourseSchema({
    name: `${skillName} Learning Path`,
    description,
    url,
    stepsCount,
    category,
  });

  const faqSchema = generateFAQSchema(faqs);

  // Breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: SEO_CONFIG.baseUrl },
    { name: 'Skills', url: `${SEO_CONFIG.baseUrl}/#skills` },
    { name: skillName, url },
  ];

  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords.join(', ')}
      url={path}
      type="article"
      structuredData={[courseSchema, faqSchema]}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ============================================================================
// Domain Page SEO
// ============================================================================

interface DomainPageSEOProps {
  domainName: string;
  domainId: string;
  description: string;
  stepsCount: number;
  skills?: string[];
}

export function DomainPageSEO({
  domainName,
  domainId,
  description,
  stepsCount,
  skills = [],
}: DomainPageSEOProps) {
  const path = `/domain/${domainId}`;
  const url = getCanonicalUrl(path);

  // Generate unique title
  const angle = getUniqueAngle('domain', domainName);
  const title = `${domainName} ${angle}`;

  // Generate rich description
  const fullDescription = skills.length > 0
    ? descriptionTemplates.domain.comprehensive(domainName, stepsCount, skills)
    : descriptionTemplates.domain.default(domainName, description, stepsCount);

  // Generate keywords
  const keywords = generateKeywords('domain', domainName, undefined, skills.slice(0, 5));

  // Generate FAQs
  const faqs: FAQ[] = faqTemplates.domain.slice(0, 2).map((template) => ({
    question: template.question(domainName),
    answer: template.answer(domainName, undefined, skills.length > 0 ? `Our ${domainName} learning path covers ${skills.join(', ')}.` : undefined),
  }));

  // Build schemas
  const courseSchema = generateCourseSchema({
    name: `${domainName} Learning Path`,
    description: fullDescription,
    url,
    stepsCount,
    category: domainName,
  });

  const faqSchema = generateFAQSchema(faqs);

  // If we have skills, add an ItemList
  const schemas: object[] = [courseSchema, faqSchema];
  if (skills.length > 0) {
    const itemListSchema = generateItemListSchema(
      `${domainName} Technologies`,
      skills.map((skill) => ({
        name: skill,
        url: `${SEO_CONFIG.baseUrl}/skill/${skill.toLowerCase().replace(/\s+/g, '-')}`,
      }))
    );
    schemas.push(itemListSchema);
  }

  // Breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: SEO_CONFIG.baseUrl },
    { name: 'Domains', url: `${SEO_CONFIG.baseUrl}/#domains` },
    { name: domainName, url },
  ];

  return (
    <SEO
      title={title}
      description={fullDescription}
      keywords={keywords.join(', ')}
      url={path}
      type="article"
      structuredData={schemas}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ============================================================================
// Language Page SEO
// ============================================================================

interface LanguagePageSEOProps {
  languageName: string;
  languageId: string;
  description: string;
  linksCount: number;
  features?: string[];
}

export function LanguagePageSEO({
  languageName,
  languageId,
  description,
  linksCount,
  features = [],
}: LanguagePageSEOProps) {
  const path = `/language/${languageId}`;
  const url = getCanonicalUrl(path);

  // Generate unique title
  const angle = getUniqueAngle('language', languageName);
  const title = `${languageName} ${angle}`;

  // Generate rich description
  const fullDescription = features.length > 0
    ? descriptionTemplates.language.detailed(languageName, linksCount, features)
    : descriptionTemplates.language.default(languageName, description, linksCount);

  // Generate keywords
  const keywords = generateKeywords('language', languageName, undefined, features);

  // Generate FAQs
  const faqs: FAQ[] = faqTemplates.language.map((template) => ({
    question: template.question(languageName),
    answer: template.answer(languageName),
  }));

  // Build schemas
  const courseSchema = generateCourseSchema({
    name: `${languageName} Documentation`,
    description: fullDescription,
    url,
    stepsCount: linksCount,
    category: 'Programming Language',
  });

  const faqSchema = generateFAQSchema(faqs);

  // Breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: SEO_CONFIG.baseUrl },
    { name: 'Languages', url: `${SEO_CONFIG.baseUrl}/#languages` },
    { name: languageName, url },
  ];

  return (
    <SEO
      title={title}
      description={fullDescription}
      keywords={keywords.join(', ')}
      url={path}
      type="article"
      structuredData={[courseSchema, faqSchema]}
      breadcrumbs={breadcrumbs}
    />
  );
}

// ============================================================================
// Not Found Page SEO
// ============================================================================

export function NotFoundPageSEO() {
  return (
    <SEO
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Return to readDocs to continue learning."
      noIndex={true}
    />
  );
}

// ============================================================================
// Breadcrumbs UI Component
// ============================================================================

interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-[hsl(var(--muted-foreground))] ${className}`}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ============================================================================
// FAQ Section Component
// ============================================================================

interface FAQSectionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQSection({ faqs, className = '' }: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className={`mt-12 ${className}`}>
      <h2 className="text-lg font-medium mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-[hsl(var(--border))] rounded-lg"
          >
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[hsl(var(--muted))] transition-colors rounded-lg">
              <span className="font-medium text-sm">{faq.question}</span>
              <span className="text-[hsl(var(--muted-foreground))] group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="px-4 py-3 border-t border-[hsl(var(--border))] text-sm text-[hsl(var(--muted-foreground))]">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
