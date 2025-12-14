import type { SearchEntry } from './types';

export const nodejsEntries: SearchEntry[] = [
  // Core
  { id: 'node-intro', title: 'Node.js', description: 'Node.js documentation', url: 'https://nodejs.org/en/docs', category: 'Node.js', source: 'Node.js', keywords: ['node', 'nodejs', 'node.js', 'server'], priority: 90 },
  { id: 'node-fs', title: 'File System (fs)', description: 'File system module', url: 'https://nodejs.org/api/fs.html', category: 'Node.js', source: 'Node.js', keywords: ['fs', 'file', 'read', 'write', 'readFile', 'writeFile', 'file system'], aliases: ['fs', 'readFile', 'writeFile'], priority: 90 },
  { id: 'node-path', title: 'Path', description: 'Path utilities', url: 'https://nodejs.org/api/path.html', category: 'Node.js', source: 'Node.js', keywords: ['path', 'join', 'resolve', 'dirname', 'basename', 'extname'], aliases: ['path.join', 'path.resolve'], priority: 85 },
  { id: 'node-http', title: 'HTTP', description: 'HTTP module', url: 'https://nodejs.org/api/http.html', category: 'Node.js', source: 'Node.js', keywords: ['http', 'server', 'request', 'response', 'createServer'], priority: 85 },
  { id: 'node-https', title: 'HTTPS', description: 'HTTPS module', url: 'https://nodejs.org/api/https.html', category: 'Node.js', source: 'Node.js', keywords: ['https', 'ssl', 'tls', 'secure'], priority: 75 },
  { id: 'node-url', title: 'URL', description: 'URL parsing', url: 'https://nodejs.org/api/url.html', category: 'Node.js', source: 'Node.js', keywords: ['url', 'URL', 'parse', 'URLSearchParams'], priority: 80 },
  { id: 'node-events', title: 'Events', description: 'Event emitter', url: 'https://nodejs.org/api/events.html', category: 'Node.js', source: 'Node.js', keywords: ['events', 'EventEmitter', 'emit', 'on', 'off', 'once'], aliases: ['EventEmitter'], priority: 80 },
  { id: 'node-stream', title: 'Stream', description: 'Streams API', url: 'https://nodejs.org/api/stream.html', category: 'Node.js', source: 'Node.js', keywords: ['stream', 'streams', 'readable', 'writable', 'pipe', 'transform'], priority: 75 },
  { id: 'node-buffer', title: 'Buffer', description: 'Buffer handling', url: 'https://nodejs.org/api/buffer.html', category: 'Node.js', source: 'Node.js', keywords: ['buffer', 'Buffer', 'binary', 'bytes'], priority: 75 },
  { id: 'node-crypto', title: 'Crypto', description: 'Cryptography', url: 'https://nodejs.org/api/crypto.html', category: 'Node.js', source: 'Node.js', keywords: ['crypto', 'hash', 'encrypt', 'decrypt', 'randomBytes', 'createHash'], priority: 75 },
  { id: 'node-process', title: 'Process', description: 'Process object', url: 'https://nodejs.org/api/process.html', category: 'Node.js', source: 'Node.js', keywords: ['process', 'env', 'argv', 'exit', 'cwd', 'process.env'], aliases: ['process.env'], priority: 85 },
  { id: 'node-os', title: 'OS', description: 'Operating system', url: 'https://nodejs.org/api/os.html', category: 'Node.js', source: 'Node.js', keywords: ['os', 'platform', 'cpus', 'memory', 'homedir'], priority: 65 },
  { id: 'node-child-process', title: 'Child Process', description: 'Spawn processes', url: 'https://nodejs.org/api/child_process.html', category: 'Node.js', source: 'Node.js', keywords: ['child_process', 'spawn', 'exec', 'fork', 'execSync'], aliases: ['spawn', 'exec'], priority: 70 },
  { id: 'node-util', title: 'Util', description: 'Utility functions', url: 'https://nodejs.org/api/util.html', category: 'Node.js', source: 'Node.js', keywords: ['util', 'promisify', 'format', 'inspect'], aliases: ['promisify'], priority: 70 },
  { id: 'node-assert', title: 'Assert', description: 'Assertion testing', url: 'https://nodejs.org/api/assert.html', category: 'Node.js', source: 'Node.js', keywords: ['assert', 'assertion', 'test', 'equal', 'strictEqual'], priority: 65 },
  
  // Package Management
  { id: 'npm-intro', title: 'npm', description: 'Node Package Manager', url: 'https://docs.npmjs.com/', category: 'Node.js', source: 'npm', keywords: ['npm', 'package', 'install', 'node_modules'], priority: 90 },
  { id: 'npm-package-json', title: 'package.json', description: 'Package configuration', url: 'https://docs.npmjs.com/cli/v10/configuring-npm/package-json', category: 'Node.js', source: 'npm', keywords: ['package.json', 'dependencies', 'devDependencies', 'scripts'], aliases: ['package.json'], priority: 90 },
  { id: 'npm-scripts', title: 'npm scripts', description: 'Package scripts', url: 'https://docs.npmjs.com/cli/v10/using-npm/scripts', category: 'Node.js', source: 'npm', keywords: ['scripts', 'npm run', 'npm start', 'npm test', 'npm build'], aliases: ['npm run'], priority: 85 },
  { id: 'npm-install', title: 'npm install', description: 'Install packages', url: 'https://docs.npmjs.com/cli/v10/commands/npm-install', category: 'Node.js', source: 'npm', keywords: ['npm install', 'npm i', 'install', 'add package'], aliases: ['npm i'], priority: 90 },
  { id: 'npm-workspaces', title: 'npm Workspaces', description: 'Monorepo workspaces', url: 'https://docs.npmjs.com/cli/v10/using-npm/workspaces', category: 'Node.js', source: 'npm', keywords: ['workspaces', 'monorepo', 'workspace'], priority: 70 },
  
  // ESM vs CommonJS
  { id: 'node-esm', title: 'ES Modules', description: 'ECMAScript modules', url: 'https://nodejs.org/api/esm.html', category: 'Node.js', source: 'Node.js', keywords: ['esm', 'es modules', 'import', 'export', 'type: module'], aliases: ['import', 'export'], priority: 85 },
  { id: 'node-commonjs', title: 'CommonJS', description: 'CommonJS modules', url: 'https://nodejs.org/api/modules.html', category: 'Node.js', source: 'Node.js', keywords: ['commonjs', 'cjs', 'require', 'module.exports'], aliases: ['require', 'module.exports'], priority: 80 },
];

export const gitEntries: SearchEntry[] = [
  // Basics
  { id: 'git-init', title: 'git init', description: 'Initialize repository', url: 'https://git-scm.com/docs/git-init', category: 'Git', source: 'Git', keywords: ['init', 'initialize', 'create repo', 'new repo'], aliases: ['git init'], priority: 90 },
  { id: 'git-clone', title: 'git clone', description: 'Clone repository', url: 'https://git-scm.com/docs/git-clone', category: 'Git', source: 'Git', keywords: ['clone', 'copy', 'download repo'], aliases: ['git clone'], priority: 95 },
  { id: 'git-add', title: 'git add', description: 'Stage changes', url: 'https://git-scm.com/docs/git-add', category: 'Git', source: 'Git', keywords: ['add', 'stage', 'staging', 'git add .'], aliases: ['git add', 'git add .'], priority: 95 },
  { id: 'git-commit', title: 'git commit', description: 'Commit changes', url: 'https://git-scm.com/docs/git-commit', category: 'Git', source: 'Git', keywords: ['commit', 'save', 'commit -m'], aliases: ['git commit'], priority: 95 },
  { id: 'git-push', title: 'git push', description: 'Push to remote', url: 'https://git-scm.com/docs/git-push', category: 'Git', source: 'Git', keywords: ['push', 'upload', 'remote push'], aliases: ['git push'], priority: 95 },
  { id: 'git-pull', title: 'git pull', description: 'Pull from remote', url: 'https://git-scm.com/docs/git-pull', category: 'Git', source: 'Git', keywords: ['pull', 'fetch merge', 'download changes'], aliases: ['git pull'], priority: 95 },
  { id: 'git-fetch', title: 'git fetch', description: 'Fetch from remote', url: 'https://git-scm.com/docs/git-fetch', category: 'Git', source: 'Git', keywords: ['fetch', 'download', 'remote fetch'], aliases: ['git fetch'], priority: 80 },
  { id: 'git-status', title: 'git status', description: 'Check status', url: 'https://git-scm.com/docs/git-status', category: 'Git', source: 'Git', keywords: ['status', 'check', 'changes', 'modified'], aliases: ['git status'], priority: 90 },
  { id: 'git-log', title: 'git log', description: 'View commit history', url: 'https://git-scm.com/docs/git-log', category: 'Git', source: 'Git', keywords: ['log', 'history', 'commits', 'git log'], aliases: ['git log'], priority: 85 },
  { id: 'git-diff', title: 'git diff', description: 'Show changes', url: 'https://git-scm.com/docs/git-diff', category: 'Git', source: 'Git', keywords: ['diff', 'changes', 'difference', 'compare'], aliases: ['git diff'], priority: 85 },
  
  // Branching
  { id: 'git-branch', title: 'git branch', description: 'Manage branches', url: 'https://git-scm.com/docs/git-branch', category: 'Git', source: 'Git', keywords: ['branch', 'branches', 'list branches', 'create branch', 'delete branch'], aliases: ['git branch'], priority: 90 },
  { id: 'git-checkout', title: 'git checkout', description: 'Switch branches', url: 'https://git-scm.com/docs/git-checkout', category: 'Git', source: 'Git', keywords: ['checkout', 'switch', 'change branch'], aliases: ['git checkout'], priority: 85 },
  { id: 'git-switch', title: 'git switch', description: 'Switch branches (modern)', url: 'https://git-scm.com/docs/git-switch', category: 'Git', source: 'Git', keywords: ['switch', 'change branch', 'switch branch'], aliases: ['git switch'], priority: 80 },
  { id: 'git-merge', title: 'git merge', description: 'Merge branches', url: 'https://git-scm.com/docs/git-merge', category: 'Git', source: 'Git', keywords: ['merge', 'combine', 'join branches'], aliases: ['git merge'], priority: 90 },
  { id: 'git-rebase', title: 'git rebase', description: 'Rebase commits', url: 'https://git-scm.com/docs/git-rebase', category: 'Git', source: 'Git', keywords: ['rebase', 'replay', 'linear history'], aliases: ['git rebase'], priority: 80 },
  
  // Advanced
  { id: 'git-stash', title: 'git stash', description: 'Stash changes', url: 'https://git-scm.com/docs/git-stash', category: 'Git', source: 'Git', keywords: ['stash', 'save', 'temporary', 'stash pop', 'stash apply'], aliases: ['git stash'], priority: 85 },
  { id: 'git-reset', title: 'git reset', description: 'Reset changes', url: 'https://git-scm.com/docs/git-reset', category: 'Git', source: 'Git', keywords: ['reset', 'undo', 'unstage', 'reset --hard', 'reset --soft'], aliases: ['git reset'], priority: 85 },
  { id: 'git-revert', title: 'git revert', description: 'Revert commit', url: 'https://git-scm.com/docs/git-revert', category: 'Git', source: 'Git', keywords: ['revert', 'undo commit', 'reverse'], aliases: ['git revert'], priority: 80 },
  { id: 'git-cherry-pick', title: 'git cherry-pick', description: 'Apply specific commits', url: 'https://git-scm.com/docs/git-cherry-pick', category: 'Git', source: 'Git', keywords: ['cherry-pick', 'cherry pick', 'pick commit'], aliases: ['git cherry-pick'], priority: 75 },
  { id: 'git-remote', title: 'git remote', description: 'Manage remotes', url: 'https://git-scm.com/docs/git-remote', category: 'Git', source: 'Git', keywords: ['remote', 'origin', 'upstream', 'add remote'], aliases: ['git remote'], priority: 80 },
  { id: 'git-tag', title: 'git tag', description: 'Manage tags', url: 'https://git-scm.com/docs/git-tag', category: 'Git', source: 'Git', keywords: ['tag', 'tags', 'version', 'release'], aliases: ['git tag'], priority: 75 },
  
  // Config
  { id: 'git-config', title: 'git config', description: 'Git configuration', url: 'https://git-scm.com/docs/git-config', category: 'Git', source: 'Git', keywords: ['config', 'configure', 'user.name', 'user.email', 'settings'], aliases: ['git config'], priority: 85 },
  { id: 'git-gitignore', title: '.gitignore', description: 'Ignore files', url: 'https://git-scm.com/docs/gitignore', category: 'Git', source: 'Git', keywords: ['gitignore', '.gitignore', 'ignore', 'exclude'], aliases: ['.gitignore'], priority: 90 },
];

export const pythonEntries: SearchEntry[] = [
  // Basics
  { id: 'py-intro', title: 'Python', description: 'Python documentation', url: 'https://docs.python.org/3/', category: 'Python', source: 'Python', keywords: ['python', 'python3', 'py'], priority: 90 },
  { id: 'py-tutorial', title: 'Python Tutorial', description: 'Official Python tutorial', url: 'https://docs.python.org/3/tutorial/', category: 'Python', source: 'Python', keywords: ['tutorial', 'learn', 'beginner', 'getting started'], priority: 85 },
  { id: 'py-functions', title: 'Functions', description: 'Defining functions', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions', category: 'Python', source: 'Python', keywords: ['function', 'def', 'define function', 'lambda'], priority: 90 },
  { id: 'py-classes', title: 'Classes', description: 'Python classes', url: 'https://docs.python.org/3/tutorial/classes.html', category: 'Python', source: 'Python', keywords: ['class', 'classes', 'oop', 'object oriented', '__init__'], priority: 90 },
  { id: 'py-list', title: 'Lists', description: 'Python lists', url: 'https://docs.python.org/3/tutorial/datastructures.html#more-on-lists', category: 'Python', source: 'Python', keywords: ['list', 'lists', 'array', 'append', 'extend'], priority: 90 },
  { id: 'py-dict', title: 'Dictionaries', description: 'Python dictionaries', url: 'https://docs.python.org/3/tutorial/datastructures.html#dictionaries', category: 'Python', source: 'Python', keywords: ['dict', 'dictionary', 'dictionaries', 'key value', 'hashmap'], priority: 90 },
  { id: 'py-comprehension', title: 'Comprehensions', description: 'List/dict comprehensions', url: 'https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions', category: 'Python', source: 'Python', keywords: ['comprehension', 'list comprehension', 'dict comprehension', 'generator'], priority: 85 },
  { id: 'py-decorators', title: 'Decorators', description: 'Function decorators', url: 'https://docs.python.org/3/glossary.html#term-decorator', category: 'Python', source: 'Python', keywords: ['decorator', 'decorators', '@', 'wrapper'], priority: 80 },
  { id: 'py-async', title: 'Async/Await', description: 'Asynchronous programming', url: 'https://docs.python.org/3/library/asyncio.html', category: 'Python', source: 'Python', keywords: ['async', 'await', 'asyncio', 'asynchronous', 'coroutine'], priority: 80 },
  { id: 'py-typing', title: 'Type Hints', description: 'Python type hints', url: 'https://docs.python.org/3/library/typing.html', category: 'Python', source: 'Python', keywords: ['typing', 'type hints', 'type annotation', 'mypy'], priority: 80 },
  { id: 'py-dataclasses', title: 'Dataclasses', description: 'Data classes', url: 'https://docs.python.org/3/library/dataclasses.html', category: 'Python', source: 'Python', keywords: ['dataclass', 'dataclasses', '@dataclass', 'data class'], priority: 75 },
  { id: 'py-virtualenv', title: 'Virtual Environments', description: 'Virtual environments', url: 'https://docs.python.org/3/tutorial/venv.html', category: 'Python', source: 'Python', keywords: ['venv', 'virtualenv', 'virtual environment', 'pip'], priority: 85 },
];

export const bunEntries: SearchEntry[] = [
  { id: 'bun-intro', title: 'Bun', description: 'Bun runtime documentation', url: 'https://bun.sh/docs', category: 'Bun', source: 'Bun', keywords: ['bun', 'runtime', 'javascript', 'typescript', 'bundler'], priority: 90 },
  { id: 'bun-install', title: 'Installation', description: 'Install Bun', url: 'https://bun.sh/docs/installation', category: 'Bun', source: 'Bun', keywords: ['install', 'setup', 'bun install'], priority: 85 },
  { id: 'bun-run', title: 'bun run', description: 'Run scripts and files', url: 'https://bun.sh/docs/cli/run', category: 'Bun', source: 'Bun', keywords: ['run', 'execute', 'bun run', 'scripts'], aliases: ['bun run'], priority: 90 },
  { id: 'bun-package', title: 'Package Manager', description: 'Bun package manager', url: 'https://bun.sh/docs/cli/install', category: 'Bun', source: 'Bun', keywords: ['package', 'npm', 'install', 'bun add', 'bun install'], aliases: ['bun add', 'bun install'], priority: 90 },
  { id: 'bun-bundler', title: 'Bundler', description: 'Bun bundler', url: 'https://bun.sh/docs/bundler', category: 'Bun', source: 'Bun', keywords: ['bundle', 'bundler', 'build', 'bun build'], aliases: ['bun build'], priority: 85 },
  { id: 'bun-test', title: 'Test Runner', description: 'Built-in test runner', url: 'https://bun.sh/docs/cli/test', category: 'Bun', source: 'Bun', keywords: ['test', 'testing', 'bun test', 'jest'], aliases: ['bun test'], priority: 85 },
  { id: 'bun-apis', title: 'Runtime APIs', description: 'Bun runtime APIs', url: 'https://bun.sh/docs/runtime/bun-apis', category: 'Bun', source: 'Bun', keywords: ['api', 'Bun.file', 'Bun.serve', 'Bun.write'], priority: 80 },
  { id: 'bun-serve', title: 'HTTP Server', description: 'Bun.serve() HTTP server', url: 'https://bun.sh/docs/api/http', category: 'Bun', source: 'Bun', keywords: ['serve', 'http', 'server', 'Bun.serve', 'web server'], aliases: ['Bun.serve'], priority: 90 },
  { id: 'bun-sqlite', title: 'SQLite', description: 'Built-in SQLite', url: 'https://bun.sh/docs/api/sqlite', category: 'Bun', source: 'Bun', keywords: ['sqlite', 'database', 'db', 'bun:sqlite'], priority: 75 },
];

export const httpEntries: SearchEntry[] = [
  { id: 'http-mdn', title: 'HTTP', description: 'HTTP documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', category: 'HTTP', source: 'MDN', keywords: ['http', 'https', 'protocol', 'web'], priority: 90 },
  { id: 'http-methods', title: 'HTTP Methods', description: 'GET, POST, PUT, DELETE...', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods', category: 'HTTP', source: 'MDN', keywords: ['methods', 'get', 'post', 'put', 'delete', 'patch', 'http methods'], priority: 95 },
  { id: 'http-status', title: 'HTTP Status Codes', description: '200, 404, 500...', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', category: 'HTTP', source: 'MDN', keywords: ['status', 'status codes', '200', '404', '500', '201', '401', '403'], priority: 95 },
  { id: 'http-headers', title: 'HTTP Headers', description: 'Request/response headers', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers', category: 'HTTP', source: 'MDN', keywords: ['headers', 'content-type', 'authorization', 'accept', 'cors'], priority: 90 },
  { id: 'http-cors', title: 'CORS', description: 'Cross-Origin Resource Sharing', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', category: 'HTTP', source: 'MDN', keywords: ['cors', 'cross-origin', 'origin', 'access-control'], aliases: ['CORS'], priority: 90 },
  { id: 'http-cookies', title: 'Cookies', description: 'HTTP cookies', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', category: 'HTTP', source: 'MDN', keywords: ['cookies', 'cookie', 'set-cookie', 'session'], priority: 85 },
  { id: 'http-caching', title: 'HTTP Caching', description: 'Caching mechanisms', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching', category: 'HTTP', source: 'MDN', keywords: ['cache', 'caching', 'cache-control', 'etag', 'expires'], priority: 80 },
  { id: 'http-content-types', title: 'Content Types', description: 'MIME types', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types', category: 'HTTP', source: 'MDN', keywords: ['content-type', 'mime', 'mime type', 'application/json', 'text/html'], priority: 85 },
];

export const restEntries: SearchEntry[] = [
  { id: 'rest-intro', title: 'REST API', description: 'RESTful API design', url: 'https://restfulapi.net/', category: 'REST', source: 'RESTful API', keywords: ['rest', 'restful', 'api', 'api design'], priority: 90 },
  { id: 'rest-methods', title: 'REST Methods', description: 'HTTP methods in REST', url: 'https://restfulapi.net/http-methods/', category: 'REST', source: 'RESTful API', keywords: ['methods', 'crud', 'get', 'post', 'put', 'delete', 'patch'], priority: 90 },
  { id: 'rest-status', title: 'REST Status Codes', description: 'Status codes best practices', url: 'https://restfulapi.net/http-status-codes/', category: 'REST', source: 'RESTful API', keywords: ['status codes', 'response codes', '200', '201', '400', '404', '500'], priority: 85 },
  { id: 'rest-naming', title: 'REST Naming', description: 'Resource naming conventions', url: 'https://restfulapi.net/resource-naming/', category: 'REST', source: 'RESTful API', keywords: ['naming', 'endpoints', 'resources', 'url', 'uri', 'convention'], priority: 85 },
  { id: 'rest-versioning', title: 'API Versioning', description: 'Version your APIs', url: 'https://restfulapi.net/versioning/', category: 'REST', source: 'RESTful API', keywords: ['versioning', 'version', 'v1', 'v2', 'api version'], priority: 80 },
  { id: 'rest-pagination', title: 'Pagination', description: 'API pagination patterns', url: 'https://restfulapi.net/pagination/', category: 'REST', source: 'RESTful API', keywords: ['pagination', 'page', 'limit', 'offset', 'cursor'], priority: 80 },
];

export const linuxEntries: SearchEntry[] = [
  { id: 'linux-intro', title: 'Linux', description: 'Linux documentation', url: 'https://www.kernel.org/doc/html/latest/', category: 'Linux', source: 'Linux', keywords: ['linux', 'kernel', 'unix', 'os'], priority: 85 },
  { id: 'linux-man', title: 'Man Pages', description: 'Linux manual pages', url: 'https://man7.org/linux/man-pages/', category: 'Linux', source: 'Linux', keywords: ['man', 'manual', 'man pages', 'documentation'], priority: 85 },
  { id: 'linux-ls', title: 'ls', description: 'List directory contents', url: 'https://man7.org/linux/man-pages/man1/ls.1.html', category: 'Linux', source: 'Linux', keywords: ['ls', 'list', 'directory', 'files', 'ls -la'], aliases: ['ls', 'ls -la'], priority: 90 },
  { id: 'linux-cd', title: 'cd', description: 'Change directory', url: 'https://man7.org/linux/man-pages/man1/cd.1p.html', category: 'Linux', source: 'Linux', keywords: ['cd', 'change directory', 'navigate'], aliases: ['cd'], priority: 90 },
  { id: 'linux-grep', title: 'grep', description: 'Search text patterns', url: 'https://man7.org/linux/man-pages/man1/grep.1.html', category: 'Linux', source: 'Linux', keywords: ['grep', 'search', 'find', 'pattern', 'regex'], aliases: ['grep'], priority: 90 },
  { id: 'linux-find', title: 'find', description: 'Find files', url: 'https://man7.org/linux/man-pages/man1/find.1.html', category: 'Linux', source: 'Linux', keywords: ['find', 'search files', 'locate'], aliases: ['find'], priority: 85 },
  { id: 'linux-chmod', title: 'chmod', description: 'Change file permissions', url: 'https://man7.org/linux/man-pages/man1/chmod.1.html', category: 'Linux', source: 'Linux', keywords: ['chmod', 'permissions', '755', '644', 'rwx'], aliases: ['chmod'], priority: 85 },
  { id: 'linux-chown', title: 'chown', description: 'Change file owner', url: 'https://man7.org/linux/man-pages/man1/chown.1.html', category: 'Linux', source: 'Linux', keywords: ['chown', 'owner', 'ownership'], aliases: ['chown'], priority: 80 },
  { id: 'linux-ps', title: 'ps', description: 'Process status', url: 'https://man7.org/linux/man-pages/man1/ps.1.html', category: 'Linux', source: 'Linux', keywords: ['ps', 'process', 'ps aux', 'running'], aliases: ['ps', 'ps aux'], priority: 85 },
  { id: 'linux-kill', title: 'kill', description: 'Terminate processes', url: 'https://man7.org/linux/man-pages/man1/kill.1.html', category: 'Linux', source: 'Linux', keywords: ['kill', 'terminate', 'signal', 'kill -9'], aliases: ['kill'], priority: 85 },
  { id: 'linux-ssh', title: 'ssh', description: 'Secure shell', url: 'https://man7.org/linux/man-pages/man1/ssh.1.html', category: 'Linux', source: 'Linux', keywords: ['ssh', 'remote', 'secure shell', 'connect'], aliases: ['ssh'], priority: 90 },
  { id: 'linux-curl', title: 'curl', description: 'Transfer data', url: 'https://man7.org/linux/man-pages/man1/curl.1.html', category: 'Linux', source: 'Linux', keywords: ['curl', 'http', 'download', 'request', 'api'], aliases: ['curl'], priority: 90 },
  { id: 'linux-wget', title: 'wget', description: 'Download files', url: 'https://man7.org/linux/man-pages/man1/wget.1.html', category: 'Linux', source: 'Linux', keywords: ['wget', 'download', 'fetch'], aliases: ['wget'], priority: 80 },
  { id: 'linux-tar', title: 'tar', description: 'Archive files', url: 'https://man7.org/linux/man-pages/man1/tar.1.html', category: 'Linux', source: 'Linux', keywords: ['tar', 'archive', 'compress', 'extract', 'tar -xvf'], aliases: ['tar'], priority: 85 },
  { id: 'linux-systemd', title: 'systemd', description: 'System service manager', url: 'https://www.freedesktop.org/software/systemd/man/', category: 'Linux', source: 'Linux', keywords: ['systemd', 'systemctl', 'service', 'daemon'], aliases: ['systemctl'], priority: 80 },
];

export const fastapiEntries: SearchEntry[] = [
  { id: 'fastapi-intro', title: 'FastAPI', description: 'FastAPI documentation', url: 'https://fastapi.tiangolo.com/', category: 'FastAPI', source: 'FastAPI', keywords: ['fastapi', 'api', 'python', 'async'], priority: 90 },
  { id: 'fastapi-tutorial', title: 'Tutorial', description: 'FastAPI tutorial', url: 'https://fastapi.tiangolo.com/tutorial/', category: 'FastAPI', source: 'FastAPI', keywords: ['tutorial', 'learn', 'getting started', 'first steps'], priority: 85 },
  { id: 'fastapi-path', title: 'Path Parameters', description: 'Path parameters', url: 'https://fastapi.tiangolo.com/tutorial/path-params/', category: 'FastAPI', source: 'FastAPI', keywords: ['path', 'parameters', 'path params', 'route'], priority: 85 },
  { id: 'fastapi-query', title: 'Query Parameters', description: 'Query parameters', url: 'https://fastapi.tiangolo.com/tutorial/query-params/', category: 'FastAPI', source: 'FastAPI', keywords: ['query', 'parameters', 'query params', 'query string'], priority: 85 },
  { id: 'fastapi-body', title: 'Request Body', description: 'Request body with Pydantic', url: 'https://fastapi.tiangolo.com/tutorial/body/', category: 'FastAPI', source: 'FastAPI', keywords: ['body', 'request body', 'pydantic', 'json'], priority: 90 },
  { id: 'fastapi-response', title: 'Response Model', description: 'Response models', url: 'https://fastapi.tiangolo.com/tutorial/response-model/', category: 'FastAPI', source: 'FastAPI', keywords: ['response', 'response model', 'return type'], priority: 85 },
  { id: 'fastapi-dependency', title: 'Dependencies', description: 'Dependency injection', url: 'https://fastapi.tiangolo.com/tutorial/dependencies/', category: 'FastAPI', source: 'FastAPI', keywords: ['dependency', 'dependencies', 'inject', 'Depends'], aliases: ['Depends'], priority: 85 },
  { id: 'fastapi-security', title: 'Security', description: 'Authentication & security', url: 'https://fastapi.tiangolo.com/tutorial/security/', category: 'FastAPI', source: 'FastAPI', keywords: ['security', 'auth', 'authentication', 'oauth', 'jwt'], priority: 85 },
  { id: 'fastapi-middleware', title: 'Middleware', description: 'Custom middleware', url: 'https://fastapi.tiangolo.com/tutorial/middleware/', category: 'FastAPI', source: 'FastAPI', keywords: ['middleware', 'cors', 'request', 'response'], priority: 80 },
  { id: 'fastapi-cors', title: 'CORS', description: 'CORS middleware', url: 'https://fastapi.tiangolo.com/tutorial/cors/', category: 'FastAPI', source: 'FastAPI', keywords: ['cors', 'cross-origin', 'CORSMiddleware'], aliases: ['CORSMiddleware'], priority: 85 },
  { id: 'fastapi-background', title: 'Background Tasks', description: 'Background tasks', url: 'https://fastapi.tiangolo.com/tutorial/background-tasks/', category: 'FastAPI', source: 'FastAPI', keywords: ['background', 'tasks', 'async', 'BackgroundTasks'], aliases: ['BackgroundTasks'], priority: 80 },
  { id: 'fastapi-testing', title: 'Testing', description: 'Testing FastAPI', url: 'https://fastapi.tiangolo.com/tutorial/testing/', category: 'FastAPI', source: 'FastAPI', keywords: ['test', 'testing', 'pytest', 'TestClient'], aliases: ['TestClient'], priority: 80 },
];

export const jwtEntries: SearchEntry[] = [
  { id: 'jwt-intro', title: 'JWT', description: 'JSON Web Tokens', url: 'https://jwt.io/introduction', category: 'JWT', source: 'JWT.io', keywords: ['jwt', 'json web token', 'token', 'authentication'], aliases: ['JWT'], priority: 90 },
  { id: 'jwt-debugger', title: 'JWT Debugger', description: 'Decode and verify JWTs', url: 'https://jwt.io/', category: 'JWT', source: 'JWT.io', keywords: ['debugger', 'decode', 'verify', 'inspect'], priority: 90 },
  { id: 'jwt-structure', title: 'JWT Structure', description: 'Header, payload, signature', url: 'https://jwt.io/introduction#what-is-the-json-web-token-structure-', category: 'JWT', source: 'JWT.io', keywords: ['structure', 'header', 'payload', 'signature', 'claims'], priority: 85 },
  { id: 'jwt-claims', title: 'JWT Claims', description: 'Standard claims', url: 'https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims', category: 'JWT', source: 'Auth0', keywords: ['claims', 'iss', 'sub', 'exp', 'iat', 'aud'], priority: 85 },
  { id: 'jwt-best-practices', title: 'JWT Best Practices', description: 'Security best practices', url: 'https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/', category: 'JWT', source: 'Auth0', keywords: ['best practices', 'security', 'secure', 'guidelines'], priority: 80 },
  { id: 'jwt-refresh', title: 'Refresh Tokens', description: 'Token refresh strategy', url: 'https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/', category: 'JWT', source: 'Auth0', keywords: ['refresh', 'refresh token', 'token rotation', 'renewal'], priority: 85 },
];
