---
description: Comprehensive SEO Architecture Refactor for Vite SPA
---

# Programmatic SEO Architecture Refactor

## Executive Summary

This document outlines the SEO architecture improvements for readDocs. The implementation focuses on:

1. **Modular Data Architecture** - Split monolithic data files into individual JSON files
2. **Structured Data (Schema.org)** - Centralized schema generators
3. **Dynamic Metadata System** - Template-based metadata generation
4. **Internal Linking Strategy** - Hub-and-spoke with intelligent cross-linking
5. **Content Differentiation** - Unique titles, descriptions, and FAQs per page
6. **Automated Sitemap** - Auto-generated from content registry

---

## Implementation Status

### ✅ Completed Components

| Component | File | Description |
|-----------|------|-------------|
| SEO Config | `src/lib/seo/config.ts` | Base URLs, defaults, OG image helpers |
| Schema Generators | `src/lib/seo/schema.ts` | Breadcrumb, Course, FAQ, HowTo, ItemList schemas |
| SEO Templates | `src/lib/seo/templates.ts` | Dynamic title/description/FAQ templates |
| Enhanced SEO Component | `src/components/SEO.tsx` | Full SEO with structured data support |
| Breadcrumbs Component | `src/components/SEO.tsx` | UI + Schema breadcrumbs |
| FAQ Section Component | `src/components/SEO.tsx` | Collapsible FAQs with schema |
| RelatedContent Component | `src/components/RelatedContent.tsx` | Hub-and-spoke internal linking |
| Content Types | `src/lib/content/types.ts` | TypeScript interfaces for content |
| Content Loaders | `src/lib/content/loaders.ts` | Dynamic JSON content loading |
| Content Split Script | `scripts/split-content.ts` | Converts TS to modular JSON |
| Sitemap Generator | `scripts/generate-sitemap.ts` | Auto-generates sitemap.xml |
| Modular JSON Content | `content/skills/*.json` | 33 skill files |
| Modular JSON Content | `content/domains/*.json` | 4 domain files |
| Modular JSON Content | `content/languages/*.json` | 4 language files |
| Content Registry | `content/registry.json` | Index of all content IDs |

---

## Data Architecture

### Directory Structure

```
content/
├── skills/
│   ├── react.json
│   ├── nextjs.json
│   ├── typescript.json
│   └── ... (33 files)
├── domains/
│   ├── web-development.json
│   ├── mobile-development.json
│   └── ... (4 files)
├── languages/
│   ├── rust.json
│   ├── go.json
│   └── ... (4 files)
└── registry.json  # Index of all IDs
```

### Content Schema

Each content file includes:

```typescript
interface SkillContent {
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
  metadata: {
    createdAt: string;
    updatedAt: string;
    priority: number;
  };
}
```

### Registry

The `content/registry.json` indexes all content:

```json
{
  "version": "1.0.0",
  "generatedAt": "2026-01-15T12:51:58.293Z",
  "skills": ["react", "tailwindcss", "nextjs", ...],
  "domains": ["web-development", ...],
  "languages": ["rust", "go", ...],
  "stats": { "totalSkills": 33, "totalDomains": 4, "totalLanguages": 4 }
}
```

---

## SEO Infrastructure

### Schema.org Generators

Available in `src/lib/seo/schema.ts`:

- `generateWebsiteSchema()` - For homepage
- `generateBreadcrumbSchema(items)` - Breadcrumb navigation
- `generateCourseSchema(params)` - Learning paths
- `generateFAQSchema(faqs)` - FAQ pages
- `generateHowToSchema(name, description, steps)` - Step-by-step guides
- `generateItemListSchema(name, items)` - Collections

### Meta Templates

Available in `src/lib/seo/templates.ts`:

```typescript
// Title templates
titleTemplates.skill.default(name) // "React Learning Path"
titleTemplates.skill.withSteps(name, 8) // "React Learning Path - 8 Steps"

// Description templates
descriptionTemplates.skill.default(name, category, stepsCount)
descriptionTemplates.skill.detailed(name, category, stepsCount, topics)

// Anti-cannibalization
getUniqueAngle('skill', 'React') // Returns unique title modifier
```

### FAQ Auto-Generation

Each page type has FAQ templates:

```typescript
faqTemplates.skill[0].question('React', 'library')
// "What is React and why should I learn it?"

faqTemplates.skill[0].answer('React', 'library')
// "React is a widely-used library in modern software development..."
```

---

## Internal Linking

### Hub-and-Spoke Pattern

```
Homepage (Hub)
├── Skills Section
│   ├── /skill/react (Spoke)
│   ├── /skill/nextjs (Spoke)
│   └── /skill/typescript (Spoke)
├── Domains Section
│   ├── /domain/web-development (Hub)
│   └── /domain/mobile-development (Hub)
└── Languages Section
    ├── /language/rust (Spoke)
    └── /language/go (Spoke)
```

### RelatedContent Component

```tsx
<RelatedContent
  currentId="react"
  currentType="skill"
  maxItems={6}
/>
```

Shows:
- Same-category skills (50%)
- Cross-category skills (50%)

---

## Usage

### Split Content into Modular JSON

```bash
npm run content:split
```

Converts `skillPaths.ts` and `learningPaths.ts` into individual JSON files in `content/`.

### Generate Sitemap

```bash
npm run sitemap:generate
```

Reads from `content/registry.json` and generates `public/sitemap.xml`.

### Full Build Pipeline

```bash
npm run build:full
```

Runs: content:split → sitemap:generate → build

---

## Adding New Content

### 1. Add to Source Data

Edit `src/data/skillPaths.ts` or `src/data/learningPaths.ts`:

```typescript
export const skills: Skill[] = [
  // ... existing
  { id: 'new-skill', name: 'New Skill', category: 'library' },
];

export const skillPaths: Record<string, LearningPath> = {
  // ... existing
  'new-skill': {
    id: 'new-skill',
    name: 'New Skill',
    description: 'Description here',
    steps: [...],
  },
};
```

### 2. Regenerate Content

```bash
npm run content:split
npm run sitemap:generate
```

### 3. Build & Deploy

```bash
npm run build
```

---

## SEO Checklist Per Page

- [x] Unique title (via `getUniqueAngle`)
- [x] 150+ character description
- [x] Breadcrumb schema
- [x] Course/FAQ structured data
- [x] H1 different from meta title
- [x] Internal links to related content
- [x] Long-form description section
- [x] FAQ section with schema

---

## Impact

| Metric | Before | After |
|--------|--------|-------|
| Sitemap | Manual (stale) | Auto-generated |
| Schema Types | 1 (Course) | 5+ (Course, FAQ, Breadcrumb, etc.) |
| Internal Links | Minimal | Hub-and-spoke |
| Content Depth | Thin | FAQs + descriptions |
| Anti-Cannibalization | None | Unique title angles |
| Data Organization | Monolithic | Modular JSON |
