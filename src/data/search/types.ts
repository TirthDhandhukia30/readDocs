export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  source: string;
  keywords: string[];
  aliases?: string[];
  priority?: number;
}

// Allowed documentation hostnames (for link validation)
export const ALLOWED_HOSTS = [
  'developer.mozilla.org',
  'tailwindcss.com',
  'react.dev',
  'nextjs.org',
  'nodejs.org',
  'typescriptlang.org',
  'www.typescriptlang.org',
  'docs.soliditylang.org',
  'ethereum.org',
  'docs.ethers.org',
  'docs.python.org',
  'git-scm.com',
  'supabase.com',
  'firebase.google.com',
  'docs.aws.amazon.com',
  'aws.amazon.com',
  'docs.amplify.aws',
  'learn.microsoft.com',
  'azure.microsoft.com',
  'vercel.com',
  'developers.cloudflare.com',
  'docs.docker.com',
  'redis.io',
  'www.mongodb.com',
  'mongoosejs.com',
  'www.postgresql.org',
];
