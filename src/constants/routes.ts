export const ROUTES = {
  HOME: '/',
  SKILL: (id: string) => `/skill/${id}`,
  DOMAIN: (id: string) => `/domain/${id}`,
  LANGUAGE: (id: string) => `/language/${id}`,
} as const;

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/your-username/readDocs',
  TWITTER: 'https://twitter.com/readDocs',
} as const;
