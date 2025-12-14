import type { SearchEntry } from './types';

export const cloudEntries: SearchEntry[] = [
  // Supabase
  { id: 'supabase-intro', title: 'Supabase', description: 'Supabase documentation', url: 'https://supabase.com/docs', category: 'Cloud', source: 'Supabase', keywords: ['supabase', 'backend', 'baas'], priority: 90 },
  { id: 'supabase-auth', title: 'Supabase Auth', description: 'Authentication', url: 'https://supabase.com/docs/guides/auth', category: 'Cloud', source: 'Supabase', keywords: ['auth', 'authentication', 'login', 'signup', 'supabase auth'], priority: 90 },
  { id: 'supabase-database', title: 'Supabase Database', description: 'PostgreSQL database', url: 'https://supabase.com/docs/guides/database/overview', category: 'Cloud', source: 'Supabase', keywords: ['database', 'postgres', 'postgresql', 'sql', 'supabase database'], priority: 90 },
  { id: 'supabase-storage', title: 'Supabase Storage', description: 'File storage', url: 'https://supabase.com/docs/guides/storage', category: 'Cloud', source: 'Supabase', keywords: ['storage', 'files', 'upload', 'bucket', 'supabase storage'], priority: 85 },
  { id: 'supabase-realtime', title: 'Supabase Realtime', description: 'Realtime subscriptions', url: 'https://supabase.com/docs/guides/realtime', category: 'Cloud', source: 'Supabase', keywords: ['realtime', 'websocket', 'subscribe', 'live', 'supabase realtime'], priority: 80 },
  { id: 'supabase-edge', title: 'Supabase Edge Functions', description: 'Serverless functions', url: 'https://supabase.com/docs/guides/functions', category: 'Cloud', source: 'Supabase', keywords: ['edge functions', 'serverless', 'deno', 'supabase functions'], priority: 75 },
  { id: 'supabase-rls', title: 'Row Level Security', description: 'Postgres RLS policies', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security', category: 'Cloud', source: 'Supabase', keywords: ['rls', 'row level security', 'policies', 'security'], priority: 80 },
  
  // Firebase
  { id: 'firebase-intro', title: 'Firebase', description: 'Firebase documentation', url: 'https://firebase.google.com/docs', category: 'Cloud', source: 'Firebase', keywords: ['firebase', 'google firebase', 'baas'], priority: 90 },
  { id: 'firebase-auth', title: 'Firebase Auth', description: 'Firebase Authentication', url: 'https://firebase.google.com/docs/auth', category: 'Cloud', source: 'Firebase', keywords: ['firebase auth', 'authentication', 'login', 'google auth'], priority: 90 },
  { id: 'firebase-firestore', title: 'Firestore', description: 'Cloud Firestore database', url: 'https://firebase.google.com/docs/firestore', category: 'Cloud', source: 'Firebase', keywords: ['firestore', 'database', 'nosql', 'firebase database'], priority: 90 },
  { id: 'firebase-storage', title: 'Firebase Storage', description: 'Cloud Storage', url: 'https://firebase.google.com/docs/storage', category: 'Cloud', source: 'Firebase', keywords: ['firebase storage', 'files', 'upload', 'cloud storage'], priority: 85 },
  { id: 'firebase-hosting', title: 'Firebase Hosting', description: 'Web hosting', url: 'https://firebase.google.com/docs/hosting', category: 'Cloud', source: 'Firebase', keywords: ['firebase hosting', 'deploy', 'hosting', 'cdn'], priority: 80 },
  { id: 'firebase-functions', title: 'Cloud Functions', description: 'Serverless functions', url: 'https://firebase.google.com/docs/functions', category: 'Cloud', source: 'Firebase', keywords: ['cloud functions', 'firebase functions', 'serverless'], priority: 80 },
  
  // Vercel
  { id: 'vercel-intro', title: 'Vercel', description: 'Vercel documentation', url: 'https://vercel.com/docs', category: 'Cloud', source: 'Vercel', keywords: ['vercel', 'deploy', 'hosting'], priority: 90 },
  { id: 'vercel-deploy', title: 'Vercel Deployment', description: 'Deploying to Vercel', url: 'https://vercel.com/docs/deployments/overview', category: 'Cloud', source: 'Vercel', keywords: ['deploy', 'deployment', 'vercel deploy', 'git deploy'], priority: 90 },
  { id: 'vercel-functions', title: 'Vercel Functions', description: 'Serverless functions', url: 'https://vercel.com/docs/functions', category: 'Cloud', source: 'Vercel', keywords: ['vercel functions', 'serverless', 'api', 'edge'], priority: 85 },
  { id: 'vercel-env', title: 'Vercel Environment Variables', description: 'Environment variables', url: 'https://vercel.com/docs/projects/environment-variables', category: 'Cloud', source: 'Vercel', keywords: ['vercel env', 'environment variables', 'secrets'], priority: 85 },
  { id: 'vercel-domains', title: 'Vercel Domains', description: 'Custom domains', url: 'https://vercel.com/docs/projects/domains', category: 'Cloud', source: 'Vercel', keywords: ['domains', 'custom domain', 'dns', 'vercel domains'], priority: 75 },
  
  // Cloudflare
  { id: 'cf-intro', title: 'Cloudflare', description: 'Cloudflare documentation', url: 'https://developers.cloudflare.com/', category: 'Cloud', source: 'Cloudflare', keywords: ['cloudflare', 'cdn', 'edge'], priority: 85 },
  { id: 'cf-workers', title: 'Cloudflare Workers', description: 'Edge workers', url: 'https://developers.cloudflare.com/workers/', category: 'Cloud', source: 'Cloudflare', keywords: ['workers', 'cloudflare workers', 'edge functions', 'serverless'], priority: 85 },
  { id: 'cf-pages', title: 'Cloudflare Pages', description: 'Static site hosting', url: 'https://developers.cloudflare.com/pages/', category: 'Cloud', source: 'Cloudflare', keywords: ['cloudflare pages', 'static hosting', 'deploy'], priority: 80 },
  { id: 'cf-d1', title: 'Cloudflare D1', description: 'SQLite database', url: 'https://developers.cloudflare.com/d1/', category: 'Cloud', source: 'Cloudflare', keywords: ['d1', 'cloudflare d1', 'sqlite', 'database'], priority: 75 },
  { id: 'cf-r2', title: 'Cloudflare R2', description: 'Object storage', url: 'https://developers.cloudflare.com/r2/', category: 'Cloud', source: 'Cloudflare', keywords: ['r2', 'cloudflare r2', 'storage', 's3 compatible'], priority: 75 },
  { id: 'cf-kv', title: 'Cloudflare KV', description: 'Key-value storage', url: 'https://developers.cloudflare.com/kv/', category: 'Cloud', source: 'Cloudflare', keywords: ['kv', 'cloudflare kv', 'key value', 'storage'], priority: 75 },
  
  // Docker
  { id: 'docker-intro', title: 'Docker', description: 'Docker documentation', url: 'https://docs.docker.com/', category: 'Cloud', source: 'Docker', keywords: ['docker', 'container', 'containers'], priority: 90 },
  { id: 'docker-dockerfile', title: 'Dockerfile', description: 'Dockerfile reference', url: 'https://docs.docker.com/engine/reference/builder/', category: 'Cloud', source: 'Docker', keywords: ['dockerfile', 'docker build', 'image', 'FROM', 'RUN', 'COPY'], aliases: ['Dockerfile'], priority: 90 },
  { id: 'docker-compose', title: 'Docker Compose', description: 'Multi-container applications', url: 'https://docs.docker.com/compose/', category: 'Cloud', source: 'Docker', keywords: ['docker compose', 'compose', 'docker-compose.yml', 'multi-container'], aliases: ['docker-compose.yml'], priority: 90 },
  { id: 'docker-run', title: 'docker run', description: 'Run containers', url: 'https://docs.docker.com/engine/reference/commandline/run/', category: 'Cloud', source: 'Docker', keywords: ['docker run', 'run container', '-p', '-v', '-e'], aliases: ['docker run'], priority: 85 },
  { id: 'docker-build', title: 'docker build', description: 'Build images', url: 'https://docs.docker.com/engine/reference/commandline/build/', category: 'Cloud', source: 'Docker', keywords: ['docker build', 'build image', '-t', 'tag'], aliases: ['docker build'], priority: 85 },
  
  // Databases
  { id: 'redis-intro', title: 'Redis', description: 'Redis documentation', url: 'https://redis.io/docs/', category: 'Cloud', source: 'Redis', keywords: ['redis', 'cache', 'in-memory', 'key value'], priority: 85 },
  { id: 'redis-commands', title: 'Redis Commands', description: 'Redis command reference', url: 'https://redis.io/commands/', category: 'Cloud', source: 'Redis', keywords: ['redis commands', 'SET', 'GET', 'HSET', 'LPUSH'], priority: 80 },
  { id: 'mongodb-intro', title: 'MongoDB', description: 'MongoDB documentation', url: 'https://www.mongodb.com/docs/', category: 'Cloud', source: 'MongoDB', keywords: ['mongodb', 'mongo', 'nosql', 'document database'], priority: 85 },
  { id: 'mongodb-crud', title: 'MongoDB CRUD', description: 'CRUD operations', url: 'https://www.mongodb.com/docs/manual/crud/', category: 'Cloud', source: 'MongoDB', keywords: ['mongodb crud', 'insert', 'find', 'update', 'delete', 'insertOne', 'findOne'], priority: 85 },
  { id: 'mongodb-aggregation', title: 'MongoDB Aggregation', description: 'Aggregation pipeline', url: 'https://www.mongodb.com/docs/manual/aggregation/', category: 'Cloud', source: 'MongoDB', keywords: ['aggregation', 'pipeline', '$match', '$group', '$project'], priority: 75 },
  { id: 'postgres-intro', title: 'PostgreSQL', description: 'PostgreSQL documentation', url: 'https://www.postgresql.org/docs/', category: 'Cloud', source: 'PostgreSQL', keywords: ['postgresql', 'postgres', 'sql', 'relational database'], priority: 85 },
  { id: 'postgres-tutorial', title: 'PostgreSQL Tutorial', description: 'SQL tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html', category: 'Cloud', source: 'PostgreSQL', keywords: ['postgres tutorial', 'sql tutorial', 'learn sql'], priority: 80 },
  
  // AWS
  { id: 'aws-intro', title: 'AWS', description: 'AWS documentation', url: 'https://docs.aws.amazon.com/', category: 'Cloud', source: 'AWS', keywords: ['aws', 'amazon', 'cloud', 'amazon web services'], priority: 85 },
  { id: 'aws-s3', title: 'AWS S3', description: 'Simple Storage Service', url: 'https://docs.aws.amazon.com/s3/', category: 'Cloud', source: 'AWS', keywords: ['s3', 'aws s3', 'storage', 'bucket', 'object storage'], priority: 85 },
  { id: 'aws-lambda', title: 'AWS Lambda', description: 'Serverless compute', url: 'https://docs.aws.amazon.com/lambda/', category: 'Cloud', source: 'AWS', keywords: ['lambda', 'aws lambda', 'serverless', 'function'], priority: 85 },
  { id: 'aws-dynamodb', title: 'DynamoDB', description: 'NoSQL database', url: 'https://docs.aws.amazon.com/dynamodb/', category: 'Cloud', source: 'AWS', keywords: ['dynamodb', 'dynamo', 'nosql', 'aws database'], priority: 80 },
  { id: 'aws-ec2', title: 'AWS EC2', description: 'Elastic Compute Cloud', url: 'https://docs.aws.amazon.com/ec2/', category: 'Cloud', source: 'AWS', keywords: ['ec2', 'aws ec2', 'virtual machine', 'instance', 'compute'], priority: 80 },
  
  // Azure
  { id: 'azure-intro', title: 'Azure', description: 'Azure documentation', url: 'https://learn.microsoft.com/en-us/azure/', category: 'Cloud', source: 'Azure', keywords: ['azure', 'microsoft azure', 'cloud'], priority: 80 },
  { id: 'azure-functions', title: 'Azure Functions', description: 'Serverless compute', url: 'https://learn.microsoft.com/en-us/azure/azure-functions/', category: 'Cloud', source: 'Azure', keywords: ['azure functions', 'serverless', 'function app'], priority: 80 },
  { id: 'azure-blob', title: 'Azure Blob Storage', description: 'Object storage', url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/', category: 'Cloud', source: 'Azure', keywords: ['blob', 'azure blob', 'storage', 'azure storage'], priority: 75 },
  
  // Netlify
  { id: 'netlify-intro', title: 'Netlify', description: 'Netlify documentation', url: 'https://docs.netlify.com/', category: 'Cloud', source: 'Netlify', keywords: ['netlify', 'deploy', 'hosting', 'jamstack'], priority: 85 },
  { id: 'netlify-deploy', title: 'Netlify Deploy', description: 'Deploying to Netlify', url: 'https://docs.netlify.com/site-deploys/overview/', category: 'Cloud', source: 'Netlify', keywords: ['deploy', 'deployment', 'netlify deploy', 'git deploy'], priority: 85 },
  { id: 'netlify-functions', title: 'Netlify Functions', description: 'Serverless functions', url: 'https://docs.netlify.com/functions/overview/', category: 'Cloud', source: 'Netlify', keywords: ['netlify functions', 'functions', 'serverless', 'lambda'], priority: 80 },
  { id: 'netlify-env', title: 'Environment Variables', description: 'Netlify env vars', url: 'https://docs.netlify.com/environment-variables/overview/', category: 'Cloud', source: 'Netlify', keywords: ['env', 'environment variables', 'secrets', 'netlify env'], priority: 75 },
  { id: 'netlify-forms', title: 'Netlify Forms', description: 'Form handling', url: 'https://docs.netlify.com/forms/setup/', category: 'Cloud', source: 'Netlify', keywords: ['forms', 'netlify forms', 'form submission', 'contact form'], priority: 70 },
  
  // Railway
  { id: 'railway-intro', title: 'Railway', description: 'Railway documentation', url: 'https://docs.railway.app/', category: 'Cloud', source: 'Railway', keywords: ['railway', 'deploy', 'hosting', 'paas'], priority: 80 },
  { id: 'railway-deploy', title: 'Railway Deploy', description: 'Deploying to Railway', url: 'https://docs.railway.app/guides/deployments', category: 'Cloud', source: 'Railway', keywords: ['deploy', 'deployment', 'railway deploy'], priority: 80 },
  { id: 'railway-databases', title: 'Railway Databases', description: 'Managed databases', url: 'https://docs.railway.app/guides/databases', category: 'Cloud', source: 'Railway', keywords: ['database', 'postgres', 'mysql', 'redis', 'railway database'], priority: 75 },
  
  // Render
  { id: 'render-intro', title: 'Render', description: 'Render documentation', url: 'https://docs.render.com/', category: 'Cloud', source: 'Render', keywords: ['render', 'deploy', 'hosting', 'paas'], priority: 80 },
  { id: 'render-deploy', title: 'Render Deploy', description: 'Deploying to Render', url: 'https://docs.render.com/deploys', category: 'Cloud', source: 'Render', keywords: ['deploy', 'deployment', 'render deploy'], priority: 80 },
  { id: 'render-databases', title: 'Render PostgreSQL', description: 'Managed PostgreSQL', url: 'https://docs.render.com/databases', category: 'Cloud', source: 'Render', keywords: ['database', 'postgres', 'postgresql', 'render database'], priority: 75 },
  
  // PlanetScale
  { id: 'planetscale-intro', title: 'PlanetScale', description: 'PlanetScale serverless MySQL', url: 'https://planetscale.com/docs', category: 'Cloud', source: 'PlanetScale', keywords: ['planetscale', 'mysql', 'database', 'serverless database'], priority: 85 },
  { id: 'planetscale-quickstart', title: 'PlanetScale Quickstart', description: 'Get started with PlanetScale', url: 'https://planetscale.com/docs/tutorials/planetscale-quick-start-guide', category: 'Cloud', source: 'PlanetScale', keywords: ['quickstart', 'getting started', 'setup'], priority: 80 },
  { id: 'planetscale-branching', title: 'Database Branching', description: 'Branch your database', url: 'https://planetscale.com/docs/concepts/branching', category: 'Cloud', source: 'PlanetScale', keywords: ['branch', 'branching', 'database branch', 'git for databases'], priority: 80 },
  { id: 'planetscale-connect', title: 'Connect to PlanetScale', description: 'Connection strings', url: 'https://planetscale.com/docs/concepts/connection-strings', category: 'Cloud', source: 'PlanetScale', keywords: ['connect', 'connection string', 'database url'], priority: 80 },
  
  // Neon
  { id: 'neon-intro', title: 'Neon', description: 'Serverless Postgres', url: 'https://neon.tech/docs/introduction', category: 'Cloud', source: 'Neon', keywords: ['neon', 'postgres', 'postgresql', 'serverless postgres'], priority: 85 },
  { id: 'neon-quickstart', title: 'Neon Quickstart', description: 'Get started with Neon', url: 'https://neon.tech/docs/get-started-with-neon/signing-up', category: 'Cloud', source: 'Neon', keywords: ['quickstart', 'getting started', 'setup'], priority: 80 },
  { id: 'neon-branching', title: 'Neon Branching', description: 'Database branching', url: 'https://neon.tech/docs/introduction/branching', category: 'Cloud', source: 'Neon', keywords: ['branch', 'branching', 'database branch'], priority: 80 },
  { id: 'neon-connect', title: 'Connect to Neon', description: 'Connection details', url: 'https://neon.tech/docs/connect/connect-from-any-app', category: 'Cloud', source: 'Neon', keywords: ['connect', 'connection string', 'database url', 'prisma neon', 'drizzle neon'], priority: 80 },
  { id: 'neon-serverless', title: 'Neon Serverless Driver', description: '@neondatabase/serverless', url: 'https://neon.tech/docs/serverless/serverless-driver', category: 'Cloud', source: 'Neon', keywords: ['serverless driver', '@neondatabase/serverless', 'edge', 'vercel edge'], priority: 75 },
  
  // Upstash
  { id: 'upstash-intro', title: 'Upstash', description: 'Serverless data platform', url: 'https://upstash.com/docs', category: 'Cloud', source: 'Upstash', keywords: ['upstash', 'redis', 'kafka', 'qstash', 'serverless'], priority: 85 },
  { id: 'upstash-redis', title: 'Upstash Redis', description: 'Serverless Redis', url: 'https://upstash.com/docs/redis/overall/getstarted', category: 'Cloud', source: 'Upstash', keywords: ['upstash redis', 'redis', 'serverless redis', 'cache'], priority: 85 },
  { id: 'upstash-redis-sdk', title: '@upstash/redis', description: 'Redis SDK', url: 'https://upstash.com/docs/redis/sdks/ts/overview', category: 'Cloud', source: 'Upstash', keywords: ['@upstash/redis', 'redis sdk', 'upstash sdk'], aliases: ['@upstash/redis'], priority: 80 },
  { id: 'upstash-ratelimit', title: 'Upstash Rate Limit', description: 'Rate limiting library', url: 'https://upstash.com/docs/redis/sdks/ratelimit-ts/overview', category: 'Cloud', source: 'Upstash', keywords: ['rate limit', 'ratelimit', '@upstash/ratelimit', 'throttle'], aliases: ['@upstash/ratelimit'], priority: 80 },
  { id: 'upstash-qstash', title: 'QStash', description: 'Serverless messaging', url: 'https://upstash.com/docs/qstash/overall/getstarted', category: 'Cloud', source: 'Upstash', keywords: ['qstash', 'message queue', 'queue', 'background jobs'], priority: 75 },
  { id: 'upstash-vector', title: 'Upstash Vector', description: 'Serverless vector database', url: 'https://upstash.com/docs/vector/overall/getstarted', category: 'Cloud', source: 'Upstash', keywords: ['vector', 'upstash vector', 'embeddings', 'semantic search', 'ai'], priority: 75 },
  
  // Turso
  { id: 'turso-intro', title: 'Turso', description: 'Edge SQLite database', url: 'https://docs.turso.tech/', category: 'Cloud', source: 'Turso', keywords: ['turso', 'sqlite', 'libsql', 'edge database'], priority: 80 },
  { id: 'turso-quickstart', title: 'Turso Quickstart', description: 'Get started with Turso', url: 'https://docs.turso.tech/quickstart', category: 'Cloud', source: 'Turso', keywords: ['quickstart', 'getting started', 'setup'], priority: 75 },
  { id: 'turso-sdk', title: '@libsql/client', description: 'Turso client SDK', url: 'https://docs.turso.tech/sdk/ts/quickstart', category: 'Cloud', source: 'Turso', keywords: ['@libsql/client', 'libsql', 'turso client', 'sdk'], aliases: ['@libsql/client'], priority: 75 },
];
