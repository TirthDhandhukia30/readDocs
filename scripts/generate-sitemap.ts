/**
 * Sitemap Generator Script
 * Generates sitemap.xml from all content sources
 * 
 * Run: npx tsx scripts/generate-sitemap.ts
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Import data sources
import { skills } from '../src/data/skillPaths';
import { domains, languages } from '../src/data/learningPaths';

const BASE_URL = 'https://readdocs.vercel.app';
const OUTPUT_DIR = join(process.cwd(), 'public');
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

function generateSitemapIndex(sitemaps: string[]): string {
  const entries = sitemaps
    .map(
      (sitemap) => `  <sitemap>
    <loc>${BASE_URL}/${sitemap}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`;
}

function main() {
  console.log('🗺️  Generating sitemaps...\n');

  const allUrls: SitemapUrl[] = [];

  // Homepage
  allUrls.push({
    loc: BASE_URL,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 1.0,
  });

  // Skills
  console.log(`📦 Skills: ${skills.length}`);
  for (const skill of skills) {
    allUrls.push({
      loc: `${BASE_URL}/skill/${skill.id}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: 0.8,
    });
  }

  // Domains
  console.log(`📂 Domains: ${domains.length}`);
  for (const domain of domains) {
    allUrls.push({
      loc: `${BASE_URL}/domain/${domain.id}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }

  // Languages
  console.log(`🔤 Languages: ${languages.length}`);
  for (const language of languages) {
    allUrls.push({
      loc: `${BASE_URL}/language/${language.id}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: 0.7,
    });
  }

  console.log(`\n📊 Total URLs: ${allUrls.length}`);

  // For small sites (< 50k URLs), generate a single sitemap
  if (allUrls.length < 50000) {
    const sitemapContent = generateSitemapXml(allUrls);
    const outputPath = join(OUTPUT_DIR, 'sitemap.xml');
    writeFileSync(outputPath, sitemapContent, 'utf-8');
    console.log(`✅ Generated: ${outputPath}`);
  } else {
    // For large sites, split into multiple sitemaps
    const URLS_PER_SITEMAP = 10000;
    const sitemaps: string[] = [];

    // Ensure sitemaps directory exists
    const sitemapsDir = join(OUTPUT_DIR, 'sitemaps');
    if (!existsSync(sitemapsDir)) {
      mkdirSync(sitemapsDir, { recursive: true });
    }

    for (let i = 0; i < allUrls.length; i += URLS_PER_SITEMAP) {
      const chunk = allUrls.slice(i, i + URLS_PER_SITEMAP);
      const chunkIndex = Math.floor(i / URLS_PER_SITEMAP) + 1;
      const filename = `sitemap-${chunkIndex}.xml`;

      const sitemapContent = generateSitemapXml(chunk);
      writeFileSync(join(sitemapsDir, filename), sitemapContent, 'utf-8');
      sitemaps.push(`sitemaps/${filename}`);
      console.log(`✅ Generated: sitemaps/${filename} (${chunk.length} URLs)`);
    }

    // Generate sitemap index
    const indexContent = generateSitemapIndex(sitemaps);
    writeFileSync(join(OUTPUT_DIR, 'sitemap.xml'), indexContent, 'utf-8');
    console.log(`✅ Generated: sitemap.xml (index with ${sitemaps.length} sitemaps)`);
  }

  console.log('\n🎉 Sitemap generation complete!');
}

main();
