import { useParams, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { languages } from '../data/learningPaths';
import { rustEntries, goEntries, kotlinEntries, swiftEntries } from '../data/search';
import type { SearchEntry } from '../data/search';

const languageData: Record<string, { entries: SearchEntry[]; description: string }> = {
  rust: {
    entries: rustEntries,
    description: 'A language empowering everyone to build reliable and efficient software.',
  },
  go: {
    entries: goEntries,
    description: 'Build simple, secure, scalable systems with Go.',
  },
  kotlin: {
    entries: kotlinEntries,
    description: 'A modern, concise and safe programming language.',
  },
  swift: {
    entries: swiftEntries,
    description: 'A powerful and intuitive language for iOS, macOS, and beyond.',
  },
};

export function LanguagePage() {
  const { languageId } = useParams({ from: '/language/$languageId' });
  const language = languages.find((l) => l.id === languageId);
  const data = languageData[languageId];

  if (!language || !data) {
    return (
      <div className="max-w-2xl mx-auto px-4 pt-20">
        <p className="text-[hsl(var(--muted-foreground))]">Language not found.</p>
        <Link to="/" className="text-sm underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  // Group entries by topic/section
  const groupedEntries = data.entries.reduce((acc, entry) => {
    const groupKey = getGroupKey(entry);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(entry);
    return acc;
  }, {} as Record<string, SearchEntry[]>);

  function getGroupKey(entry: SearchEntry): string {
    const id = entry.id.toLowerCase();
    
    // Common groupings
    if (id.includes('book') || id.includes('tour') || id.includes('docs') || id.includes('playground') || id.includes('example')) return 'Getting Started';
    if (id.includes('ownership') || id.includes('borrow') || id.includes('lifetime')) return 'Ownership & Memory';
    if (id.includes('struct') || id.includes('enum') || id.includes('trait') || id.includes('class') || id.includes('interface') || id.includes('protocol')) return 'Types & Structures';
    if (id.includes('error') || id.includes('result') || id.includes('option')) return 'Error Handling';
    if (id.includes('async') || id.includes('concurrency') || id.includes('goroutine') || id.includes('channel') || id.includes('thread') || id.includes('coroutine') || id.includes('actor')) return 'Concurrency';
    if (id.includes('collection') || id.includes('iterator') || id.includes('sequence') || id.includes('lambda') || id.includes('scope-function')) return 'Collections & Functional';
    if (id.includes('module') || id.includes('cargo') || id.includes('crate') || id.includes('testing') || id.includes('mod')) return 'Modules & Tools';
    if (id.includes('std') || id.includes('http') || id.includes('json') || id.includes('io') || id.includes('fmt') || id.includes('context')) return 'Standard Library';
    if (id.includes('generic') || id.includes('macro') || id.includes('unsafe') || id.includes('smart-pointer') || id.includes('arc') || id.includes('template') || id.includes('concept') || id.includes('range')) return 'Advanced';
    if (id.includes('swiftui') || id.includes('android') || id.includes('multiplatform')) return 'Platform';
    
    return 'Core Concepts';
  }

  const groupOrder = [
    'Getting Started',
    'Core Concepts', 
    'Types & Structures',
    'Ownership & Memory',
    'Error Handling',
    'Collections & Functional',
    'Concurrency',
    'Standard Library',
    'Modules & Tools',
    'Advanced',
    'Platform',
  ];

  const sortedGroups = Object.entries(groupedEntries).sort(
    ([a], [b]) => groupOrder.indexOf(a) - groupOrder.indexOf(b)
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-12 pb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="text-2xl font-semibold mb-2">{language.name}</h1>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">
          {data.description}
        </p>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">
          {data.entries.length} documentation links
        </p>
      </motion.div>

      {/* Grouped Resources */}
      <div className="pb-32 space-y-8">
        {sortedGroups.map(([groupName, entries], groupIndex) => (
          <motion.section
            key={groupName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + groupIndex * 0.05, duration: 0.3 }}
          >
            <h2 className="text-[11px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3 px-1">
              {groupName}
            </h2>
            <div className="flex flex-col gap-2">
              {entries.map((entry) => (
                <a
                  key={entry.id}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--foreground))]/10 transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{entry.title}</span>
                      <span className="text-[10px] text-[hsl(var(--muted-foreground))]">
                        {entry.source}
                      </span>
                    </div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5 truncate">
                      {entry.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[hsl(var(--muted-foreground))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
