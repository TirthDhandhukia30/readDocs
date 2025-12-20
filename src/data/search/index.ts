import { htmlEntries } from './html';
import { cssEntries } from './css';
import { tailwindEntries } from './tailwind';
import { javascriptEntries } from './javascript';
import { typescriptEntries } from './typescript';
import { reactEntries } from './react';
import { nextjsEntries } from './nextjs';
import { nodejsEntries, gitEntries, pythonEntries, bunEntries, httpEntries, restEntries, linuxEntries, fastapiEntries, jwtEntries } from './other';
import { cloudEntries } from './cloud';
import { languageEntries, rustEntries, goEntries, kotlinEntries, swiftEntries } from './languages';
import { 
  tanstackQueryEntries, 
  prismaEntries, 
  drizzleEntries, 
  zodEntries, 
  trpcEntries, 
  betterAuthEntries,
  dodoPaymentsEntries,
  supermemoryEntries,
  shadcnEntries,
  aceternityEntries,
  framerMotionEntries, 
  zustandEntries,
  vitestEntries,
  jestEntries,
  testingLibraryEntries,
  playwrightEntries,
  expressEntries,
  axiosEntries,
  dateFnsEntries,
  utilityEntries,
} from './libraries';
import type { SearchEntry } from './types';

// Export all entries as a unified searchIndex
export const searchIndex: SearchEntry[] = [
  ...htmlEntries,
  ...cssEntries,
  ...tailwindEntries,
  ...javascriptEntries,
  ...typescriptEntries,
  ...reactEntries,
  ...nextjsEntries,
  ...nodejsEntries,
  ...gitEntries,
  ...pythonEntries,
  ...bunEntries,
  ...httpEntries,
  ...restEntries,
  ...linuxEntries,
  ...fastapiEntries,
  ...jwtEntries,
  ...cloudEntries,
  ...languageEntries,
  // Libraries & Frameworks
  ...tanstackQueryEntries,
  ...prismaEntries,
  ...drizzleEntries,
  ...zodEntries,
  ...trpcEntries,
  ...betterAuthEntries,
  ...dodoPaymentsEntries,
  ...supermemoryEntries,
  ...shadcnEntries,
  ...aceternityEntries,
  ...framerMotionEntries,
  ...zustandEntries,
  // Testing
  ...vitestEntries,
  ...jestEntries,
  ...testingLibraryEntries,
  ...playwrightEntries,
  // More Libraries
  ...expressEntries,
  ...axiosEntries,
  ...dateFnsEntries,
  ...utilityEntries,
];

// Export individual entry arrays for selective imports
export {
  htmlEntries,
  cssEntries,
  tailwindEntries,
  javascriptEntries,
  typescriptEntries,
  reactEntries,
  nextjsEntries,
  nodejsEntries,
  gitEntries,
  pythonEntries,
  bunEntries,
  httpEntries,
  restEntries,
  linuxEntries,
  fastapiEntries,
  jwtEntries,
  cloudEntries,
  languageEntries,
  rustEntries,
  goEntries,
  kotlinEntries,
  swiftEntries,
  // Libraries
  tanstackQueryEntries,
  prismaEntries,
  drizzleEntries,
  zodEntries,
  trpcEntries,
  betterAuthEntries,
  dodoPaymentsEntries,
  supermemoryEntries,
  shadcnEntries,
  aceternityEntries,
  framerMotionEntries,
  zustandEntries,
  // Testing
  vitestEntries,
  jestEntries,
  testingLibraryEntries,
  playwrightEntries,
  // More Libraries
  expressEntries,
  axiosEntries,
  dateFnsEntries,
  utilityEntries,
};

// Re-export types
export type { SearchEntry } from './types';
export { ALLOWED_HOSTS } from './types';

// Helper to get entry count by category
export function getEntryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const entry of searchIndex) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}

// Total entry count
export const totalEntries = searchIndex.length;

console.log(`[readDocs] Loaded ${totalEntries} search entries`);
