/**
 * SEO Meta Templates
 * Dynamic templates for generating unique, intent-matched content per page type
 */

// ============================================================================
// Title Templates
// ============================================================================

export const titleTemplates = {
  skill: {
    default: (name: string) => `${name} Learning Path`,
    withSteps: (name: string, steps: number) => `${name} Learning Path - ${steps} Steps`,
    documentation: (name: string) => `${name} Documentation Guide`,
  },

  domain: {
    default: (name: string) => `${name} Learning Path`,
    roadmap: (name: string) => `${name} Roadmap`,
    guide: (name: string) => `Complete ${name} Guide`,
  },

  language: {
    default: (name: string) => `${name} Documentation`,
    learning: (name: string) => `Learn ${name}`,
  },

  topic: {
    default: (topic: string, parent: string) => `${topic} in ${parent}`,
    deepDive: (topic: string) => `${topic} - Deep Dive`,
  },
};

// ============================================================================
// Description Templates
// ============================================================================

export const descriptionTemplates = {
  skill: {
    default: (name: string, category: string, stepsCount: number) =>
      `Master ${name} through ${stepsCount} structured learning steps. Official ${category} documentation and curated resources for developers.`,

    detailed: (name: string, category: string, stepsCount: number, topics: string[]) =>
      `Learn ${name} with ${stepsCount} comprehensive steps covering ${topics.slice(0, 3).join(', ')}${topics.length > 3 ? ', and more' : ''}. Curated ${category} resources from official documentation.`,

    beginner: (name: string, stepsCount: number) =>
      `Start learning ${name} from scratch with ${stepsCount} beginner-friendly steps. Official documentation organized in the right order.`,
  },

  domain: {
    default: (name: string, description: string, stepsCount: number) =>
      `${description} Learn ${name} development through ${stepsCount} structured steps using official documentation.`,

    comprehensive: (name: string, stepsCount: number, skills: string[]) =>
      `Complete ${name} learning path with ${stepsCount} steps. Master ${skills.slice(0, 3).join(', ')}${skills.length > 3 ? ` and ${skills.length - 3} more technologies` : ''}.`,
  },

  language: {
    default: (name: string, description: string, linksCount: number) =>
      `${description} Explore ${linksCount} curated documentation links for ${name} programming.`,

    detailed: (name: string, linksCount: number, features: string[]) =>
      `Learn ${name} programming with ${linksCount} curated resources. Covers ${features.slice(0, 3).join(', ')}.`,
  },
};

// ============================================================================
// H1 Templates (can differ from title for better on-page SEO)
// ============================================================================

export const h1Templates = {
  skill: {
    default: (name: string) => `Learn ${name}`,
    withContext: (name: string, category: string) => `${name} ${category} Guide`,
  },

  domain: {
    default: (name: string) => `${name} Learning Path`,
    action: (name: string) => `Become a ${name} Developer`,
  },

  language: {
    default: (name: string) => `${name} Documentation`,
    learning: (name: string) => `Learn ${name} Programming`,
  },
};

// ============================================================================
// Keywords Generator
// ============================================================================

export function generateKeywords(
  type: 'skill' | 'domain' | 'language',
  name: string,
  category?: string,
  additionalKeywords: string[] = []
): string[] {
  const baseKeywords = [name.toLowerCase()];

  const typeKeywords: Record<string, string[]> = {
    skill: [
      `${name} documentation`,
      `learn ${name}`,
      `${name} tutorial`,
      `${name} guide`,
      `${name} learning path`,
      category ? `${category} ${name}` : '',
    ],
    domain: [
      `${name} development`,
      `learn ${name}`,
      `${name} roadmap`,
      `${name} curriculum`,
      `become ${name} developer`,
    ],
    language: [
      `${name} programming`,
      `learn ${name}`,
      `${name} documentation`,
      `${name} tutorial`,
      `${name} syntax`,
    ],
  };

  return [
    ...baseKeywords,
    ...typeKeywords[type].filter(Boolean),
    ...additionalKeywords,
  ].filter((k): k is string => Boolean(k));
}

// ============================================================================
// FAQ Templates
// ============================================================================

export interface FAQTemplate {
  question: (name: string, category?: string) => string;
  answer: (name: string, category?: string, details?: string) => string;
}

export const faqTemplates: Record<string, FAQTemplate[]> = {
  skill: [
    {
      question: (name) => `What is ${name} and why should I learn it?`,
      answer: (name, category) =>
        `${name} is a popular ${category || 'technology'} used in modern development. Learning ${name} will help you build better applications and increase your marketability as a developer.`,
    },
    {
      question: (name) => `How long does it take to learn ${name}?`,
      answer: (name, _, details) =>
        details || `The time to learn ${name} varies based on your background. With consistent practice, most developers can become proficient in ${name} within 2-4 weeks.`,
    },
    {
      question: (name) => `What are the prerequisites for learning ${name}?`,
      answer: (name, _, details) =>
        details || `Before learning ${name}, you should have a solid foundation in the basics. Check our learning path for recommended prerequisites.`,
    },
    {
      question: (name) => `What can I build with ${name}?`,
      answer: (name, category) =>
        `With ${name}, you can build a variety of ${category === 'framework' ? 'applications' : 'projects'}. Our learning path includes practical examples and real-world use cases.`,
    },
  ],

  domain: [
    {
      question: (name) => `What is ${name} development?`,
      answer: (name) =>
        `${name} development encompasses the skills and technologies needed to build ${name.toLowerCase()} applications. Our learning path covers everything from fundamentals to advanced concepts.`,
    },
    {
      question: (name) => `How do I start learning ${name} development?`,
      answer: (name) =>
        `Start with the foundational concepts in our ${name} learning path. We've organized official documentation in the optimal learning order.`,
    },
    {
      question: (name) => `What technologies are covered in ${name} development?`,
      answer: (name, _, details) =>
        details || `Our ${name} learning path covers essential technologies and frameworks used in modern ${name.toLowerCase()} development.`,
    },
  ],

  language: [
    {
      question: (name) => `Is ${name} a good programming language to learn?`,
      answer: (name) =>
        `${name} is an excellent choice for many use cases. Check our documentation guide to understand where ${name} excels.`,
    },
    {
      question: (name) => `What makes ${name} unique?`,
      answer: (name) =>
        `${name} has distinctive features that make it suitable for specific types of projects. Our curated documentation covers these core concepts.`,
    },
  ],
};

// ============================================================================
// Anti-Cannibalization Helpers
// ============================================================================

/**
 * Get a unique angle/modifier for the title to prevent keyword cannibalization
 * Uses a deterministic hash so the same content always gets the same angle
 */
export function getUniqueAngle(type: string, name: string): string {
  const angles: Record<string, string[]> = {
    skill: ['Learning Path', 'Documentation Guide', 'Tutorial Series', 'Complete Guide', 'Mastery Path'],
    domain: ['Roadmap', 'Learning Path', 'Curriculum', 'Study Guide', 'Developer Path'],
    language: ['Documentation', 'Learning Guide', 'Programming Guide', 'Reference'],
  };

  const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const typeAngles = angles[type] || angles.skill;
  return typeAngles[hash % typeAngles.length];
}

/**
 * Detect potential cannibalization issues between pages
 */
export function detectPotentialCannibalization(
  page1: { title: string; description: string },
  page2: { title: string; description: string }
): { risk: 'low' | 'medium' | 'high'; reason?: string } {
  // Simple word overlap check
  const words1 = new Set(page1.title.toLowerCase().split(/\s+/));
  const words2 = new Set(page2.title.toLowerCase().split(/\s+/));

  const overlap = [...words1].filter(w => words2.has(w) && w.length > 3);
  const overlapRatio = overlap.length / Math.min(words1.size, words2.size);

  if (overlapRatio > 0.7) {
    return { risk: 'high', reason: `High title overlap: ${overlap.join(', ')}` };
  }
  if (overlapRatio > 0.4) {
    return { risk: 'medium', reason: `Moderate title overlap: ${overlap.join(', ')}` };
  }
  return { risk: 'low' };
}
