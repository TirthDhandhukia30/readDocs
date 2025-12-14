/**
 * Link Validation Script
 * 
 * Validates all URLs in the search index to ensure they are:
 * 1. From allowed domains (official documentation sources)
 * 2. Accessible (return 200 status)
 * 
 * Usage:
 *   npx tsx scripts/validate-links.ts
 *   npx tsx scripts/validate-links.ts --check-live  # Also check HTTP status
 */

import { searchIndex, ALLOWED_HOSTS } from '../src/data/search';

interface ValidationResult {
  id: string;
  url: string;
  title: string;
  isAllowedHost: boolean;
  hostname: string;
  httpStatus?: number;
  error?: string;
}

async function validateUrl(url: string): Promise<{ status?: number; error?: string }> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'readDocs-link-validator/1.0',
      },
    });
    return { status: response.status };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

async function main() {
  const checkLive = process.argv.includes('--check-live');
  const results: ValidationResult[] = [];
  const invalidHosts = new Set<string>();
  const brokenLinks: ValidationResult[] = [];

  console.log('🔍 Validating search index links...\n');
  console.log(`Total entries: ${searchIndex.length}`);
  console.log(`Check live URLs: ${checkLive}\n`);

  for (const entry of searchIndex) {
    try {
      const url = new URL(entry.url);
      const hostname = url.hostname;
      const isAllowedHost = ALLOWED_HOSTS.some(allowed => 
        hostname === allowed || hostname.endsWith('.' + allowed)
      );

      const result: ValidationResult = {
        id: entry.id,
        url: entry.url,
        title: entry.title,
        isAllowedHost,
        hostname,
      };

      if (!isAllowedHost) {
        invalidHosts.add(hostname);
      }

      if (checkLive) {
        process.stdout.write(`Checking ${entry.id}...`);
        const { status, error } = await validateUrl(entry.url);
        result.httpStatus = status;
        result.error = error;
        
        if (status && status >= 400) {
          brokenLinks.push(result);
          console.log(` ❌ ${status}`);
        } else if (error) {
          brokenLinks.push(result);
          console.log(` ❌ ${error}`);
        } else {
          console.log(` ✓`);
        }
        
        // Rate limiting: wait 100ms between requests
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      results.push(result);
    } catch (error) {
      console.error(`Invalid URL for ${entry.id}: ${entry.url}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(60) + '\n');

  const allowedHostCount = results.filter(r => r.isAllowedHost).length;
  const disallowedHostCount = results.filter(r => !r.isAllowedHost).length;

  console.log(`✅ Entries from allowed hosts: ${allowedHostCount}`);
  console.log(`⚠️  Entries from non-allowed hosts: ${disallowedHostCount}`);

  if (invalidHosts.size > 0) {
    console.log('\n⚠️  Non-allowed hosts found:');
    for (const host of invalidHosts) {
      const count = results.filter(r => r.hostname === host).length;
      console.log(`   - ${host} (${count} entries)`);
    }
    console.log('\nConsider adding these to ALLOWED_HOSTS if they are legitimate sources.');
  }

  if (checkLive && brokenLinks.length > 0) {
    console.log('\n❌ Broken links:');
    for (const link of brokenLinks) {
      console.log(`   - ${link.id}: ${link.url}`);
      console.log(`     Status: ${link.httpStatus || 'N/A'}, Error: ${link.error || 'N/A'}`);
    }
  }

  // Category breakdown
  const categoryCounts: Record<string, number> = {};
  for (const entry of searchIndex) {
    categoryCounts[entry.category] = (categoryCounts[entry.category] || 0) + 1;
  }

  console.log('\n📂 Entries by category:');
  for (const [category, count] of Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${category}: ${count}`);
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Total: ${searchIndex.length} entries`);
  console.log('='.repeat(60));

  // Exit with error if there are issues
  if (disallowedHostCount > 0 || brokenLinks.length > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
