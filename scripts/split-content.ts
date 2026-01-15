/**
 * Content Splitting Script
 * Converts monolithic TypeScript data files into modular JSON files
 * 
 * Run: npx tsx scripts/split-content.ts
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Import source data
import { skills, skillPaths } from '../src/data/skillPaths';
import { domains, languages, learningPaths } from '../src/data/learningPaths';

const CONTENT_DIR = join(process.cwd(), 'content');
const TODAY = new Date().toISOString().split('T')[0];

interface ContentRegistry {
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

interface SkillContent {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  summary: string;
  longDescription: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    prerequisite: string | null;
    resources: Array<{
      title: string;
      url: string;
      source: string;
    }>;
  }>;
  tags: string[];
  relatedSkillIds: string[];
  faqs: Array<{ question: string; answer: string }>;
  metadata: {
    createdAt: string;
    updatedAt: string;
    priority: number;
  };
}

interface DomainContent {
  id: string;
  slug: string;
  name: string;
  description: string;
  summary: string;
  longDescription: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    prerequisite: string | null;
    resources: Array<{
      title: string;
      url: string;
      source: string;
    }>;
  }>;
  tags: string[];
  relatedDomainIds: string[];
  relatedSkillIds: string[];
  faqs: Array<{ question: string; answer: string }>;
  metadata: {
    createdAt: string;
    updatedAt: string;
    priority: number;
  };
}

interface LanguageContent {
  id: string;
  slug: string;
  name: string;
  description: string;
  summary: string;
  longDescription: string;
  features: string[];
  links: Array<{
    title: string;
    url: string;
    source: string;
    category?: string;
  }>;
  tags: string[];
  relatedLanguageIds: string[];
  faqs: Array<{ question: string; answer: string }>;
  metadata: {
    createdAt: string;
    updatedAt: string;
    priority: number;
  };
}

// Helper to generate long descriptions
function generateLongDescription(name: string, type: 'skill' | 'domain' | 'language', stepCount: number): string {
  const templates: Record<string, (name: string, count: number) => string> = {
    skill: (n, c) => `${n} is a powerful technology that every modern developer should master. Our structured learning path guides you through ${c} essential steps, from foundational concepts to advanced techniques. Each step includes curated resources from official documentation, ensuring you learn from authoritative and up-to-date sources. Whether you're a beginner or looking to deepen your expertise, this learning path provides the guidance you need.`,
    domain: (n, c) => `${n} development encompasses a wide range of skills and technologies. This comprehensive learning path breaks down the journey into ${c} manageable steps, covering everything from basics to advanced concepts. Follow this structured curriculum to build a solid foundation and progressively enhance your capabilities in ${n.toLowerCase()} development.`,
    language: (n, c) => `${n} is a versatile programming language with unique features and capabilities. Our curated collection of ${c} documentation links helps you explore ${n}'s ecosystem, from getting started guides to advanced language features. Learn from official sources and build your proficiency systematically.`,
  };
  return templates[type](name, stepCount);
}

// Helper to generate FAQs
function generateFaqs(name: string, type: 'skill' | 'domain' | 'language', category?: string): Array<{ question: string; answer: string }> {
  const faqsByType: Record<string, Array<{ q: (n: string, c?: string) => string; a: (n: string, c?: string) => string }>> = {
    skill: [
      {
        q: (n) => `What is ${n} and why should I learn it?`,
        a: (n, c) => `${n} is a widely-used ${c || 'technology'} in modern software development. Learning ${n} will help you build better applications and make you more marketable as a developer.`,
      },
      {
        q: (n) => `How long does it take to learn ${n}?`,
        a: (n) => `The time to learn ${n} varies based on your background and dedication. With consistent practice, most developers become proficient within 2-4 weeks of focused study.`,
      },
      {
        q: (n) => `What are the prerequisites for learning ${n}?`,
        a: (n) => `Before diving into ${n}, you should have a solid foundation in programming fundamentals. Check our learning path prerequisites for specific requirements.`,
      },
    ],
    domain: [
      {
        q: (n) => `What is ${n} development?`,
        a: (n) => `${n} development involves creating and maintaining ${n.toLowerCase()} applications. It encompasses various technologies, frameworks, and best practices.`,
      },
      {
        q: (n) => `How do I get started with ${n} development?`,
        a: (n) => `Start with the fundamentals in our ${n} learning path. We've organized the materials in optimal learning order to help you progress efficiently.`,
      },
    ],
    language: [
      {
        q: (n) => `Is ${n} a good programming language to learn?`,
        a: (n) => `${n} is an excellent choice for specific use cases. Its unique features make it suitable for various types of projects and career paths.`,
      },
      {
        q: (n) => `What can I build with ${n}?`,
        a: (n) => `${n} is versatile and can be used for a wide range of applications. Check our documentation resources to learn about ${n}'s capabilities.`,
      },
    ],
  };

  return faqsByType[type].map((faq) => ({
    question: faq.q(name, category),
    answer: faq.a(name, category),
  }));
}

// Find related skills based on category
function findRelatedSkillIds(currentId: string, category: string, limit: number = 3): string[] {
  return skills
    .filter((s) => s.id !== currentId && s.category === category)
    .slice(0, limit)
    .map((s) => s.id);
}

function main() {
  console.log('📦 Splitting content into modular JSON files...\n');

  // Create directory structure
  const dirs = ['skills', 'domains', 'languages'];
  for (const dir of dirs) {
    const path = join(CONTENT_DIR, dir);
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
      console.log(`📁 Created: content/${dir}/`);
    }
  }

  const registry: ContentRegistry = {
    version: '1.0.0',
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

  // Process Skills
  console.log('\n🔧 Processing Skills...');
  for (const skill of skills) {
    const path = skillPaths[skill.id];
    if (!path) {
      console.warn(`  ⚠️ No path found for skill: ${skill.id}`);
      continue;
    }

    const stepTitles = path.steps.map((s) => s.title);
    const content: SkillContent = {
      id: skill.id,
      slug: skill.id,
      name: skill.name,
      category: skill.category,
      description: path.description,
      summary: `Master ${skill.name} through ${path.steps.length} structured learning steps.`,
      longDescription: generateLongDescription(skill.name, 'skill', path.steps.length),
      steps: path.steps,
      tags: [skill.name.toLowerCase(), skill.category, ...stepTitles.slice(0, 3).map((t) => t.toLowerCase())],
      relatedSkillIds: findRelatedSkillIds(skill.id, skill.category),
      faqs: generateFaqs(skill.name, 'skill', skill.category),
      metadata: {
        createdAt: TODAY,
        updatedAt: TODAY,
        priority: 80, // Default priority
      },
    };

    const filePath = join(CONTENT_DIR, 'skills', `${skill.id}.json`);
    writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
    registry.skills.push(skill.id);
    console.log(`  ✅ ${skill.name} (${path.steps.length} steps)`);
  }

  // Process Domains
  console.log('\n📂 Processing Domains...');
  for (const domain of domains) {
    const path = learningPaths[domain.id];
    if (!path) {
      console.warn(`  ⚠️ No path found for domain: ${domain.id}`);
      continue;
    }

    const content: DomainContent = {
      id: domain.id,
      slug: domain.id,
      name: domain.name,
      description: path.description,
      summary: `Complete ${domain.name} learning path with ${path.steps.length} steps.`,
      longDescription: generateLongDescription(domain.name, 'domain', path.steps.length),
      steps: path.steps,
      tags: [domain.name.toLowerCase(), 'development', 'learning path'],
      relatedDomainIds: domains.filter((d) => d.id !== domain.id).map((d) => d.id),
      relatedSkillIds: skills.slice(0, 5).map((s) => s.id), // Top 5 skills
      faqs: generateFaqs(domain.name, 'domain'),
      metadata: {
        createdAt: TODAY,
        updatedAt: TODAY,
        priority: 70,
      },
    };

    const filePath = join(CONTENT_DIR, 'domains', `${domain.id}.json`);
    writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
    registry.domains.push(domain.id);
    console.log(`  ✅ ${domain.name} (${path.steps.length} steps)`);
  }

  // Process Languages
  console.log('\n🔤 Processing Languages...');
  for (const language of languages) {
    const content: LanguageContent = {
      id: language.id,
      slug: language.id,
      name: language.name,
      description: `Programming language documentation for ${language.name}`,
      summary: `Learn ${language.name} programming with curated documentation.`,
      longDescription: generateLongDescription(language.name, 'language', 10),
      features: ['Documentation', 'Tutorials', 'Best Practices'],
      links: [],
      tags: [language.name.toLowerCase(), 'programming', 'language'],
      relatedLanguageIds: languages.filter((l) => l.id !== language.id).map((l) => l.id),
      faqs: generateFaqs(language.name, 'language'),
      metadata: {
        createdAt: TODAY,
        updatedAt: TODAY,
        priority: 70,
      },
    };

    const filePath = join(CONTENT_DIR, 'languages', `${language.id}.json`);
    writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
    registry.languages.push(language.id);
    console.log(`  ✅ ${language.name}`);
  }

  // Update stats
  registry.stats = {
    totalSkills: registry.skills.length,
    totalDomains: registry.domains.length,
    totalLanguages: registry.languages.length,
    totalItems: registry.skills.length + registry.domains.length + registry.languages.length,
  };

  // Write registry
  const registryPath = join(CONTENT_DIR, 'registry.json');
  writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
  console.log(`\n📋 Generated: content/registry.json`);

  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('📊 Content Split Complete!');
  console.log('═'.repeat(50));
  console.log(`  Skills:    ${registry.stats.totalSkills}`);
  console.log(`  Domains:   ${registry.stats.totalDomains}`);
  console.log(`  Languages: ${registry.stats.totalLanguages}`);
  console.log(`  Total:     ${registry.stats.totalItems}`);
  console.log('═'.repeat(50));
}

main();
