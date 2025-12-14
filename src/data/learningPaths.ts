import type { Domain, LearningPath } from '../types';

export const domains: Domain[] = [
  {
    id: 'web-development',
    name: 'Web Development',
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
  },
  {
    id: 'web3',
    name: 'Web3',
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
  },
];

export const languages: Domain[] = [
  { id: 'rust', name: 'Rust' },
  { id: 'go', name: 'Go' },
  { id: 'kotlin', name: 'Kotlin' },
  { id: 'swift', name: 'Swift' },
];

export const learningPaths: Record<string, LearningPath> = {
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    description: 'From fundamentals to full-stack',
    steps: [
      {
        id: 'html-fundamentals',
        title: 'HTML Fundamentals',
        description: 'The foundation of all web pages. Learn semantic markup and document structure.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'HTML Elements Reference',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
            source: 'MDN Web Docs',
          },
          {
            title: 'HTML Basics',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
            source: 'MDN Web Docs',
          },
          {
            title: 'HTML Forms',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'css-fundamentals',
        title: 'CSS Fundamentals',
        description: 'Style your HTML with cascading stylesheets. Master selectors, box model, and layout.',
        order: 2,
        prerequisite: 'html-fundamentals',
        resources: [
          {
            title: 'CSS First Steps',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
            source: 'MDN Web Docs',
          },
          {
            title: 'CSS Selectors',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors',
            source: 'MDN Web Docs',
          },
          {
            title: 'CSS Box Model',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model',
            source: 'MDN Web Docs',
          },
          {
            title: 'CSS Layout',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'css-flexbox-grid',
        title: 'CSS Flexbox & Grid',
        description: 'Modern layout systems for responsive web design.',
        order: 3,
        prerequisite: 'css-fundamentals',
        resources: [
          {
            title: 'Flexbox Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout',
            source: 'MDN Web Docs',
          },
          {
            title: 'CSS Grid Layout',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'The programming language of the web. Learn syntax, data types, and control flow.',
        order: 4,
        prerequisite: 'html-fundamentals',
        resources: [
          {
            title: 'JavaScript Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            source: 'MDN Web Docs',
          },
          {
            title: 'JavaScript Reference',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
            source: 'MDN Web Docs',
          },
          {
            title: 'JavaScript Data Types',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'javascript-dom',
        title: 'DOM Manipulation',
        description: 'Interact with web pages dynamically using the Document Object Model.',
        order: 5,
        prerequisite: 'javascript-fundamentals',
        resources: [
          {
            title: 'Introduction to the DOM',
            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
            source: 'MDN Web Docs',
          },
          {
            title: 'DOM Manipulation',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
            source: 'MDN Web Docs',
          },
          {
            title: 'Event Handling',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Events',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'javascript-async',
        title: 'Asynchronous JavaScript',
        description: 'Handle async operations with callbacks, promises, and async/await.',
        order: 6,
        prerequisite: 'javascript-dom',
        resources: [
          {
            title: 'Asynchronous JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
            source: 'MDN Web Docs',
          },
          {
            title: 'Promises',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
            source: 'MDN Web Docs',
          },
          {
            title: 'Fetch API',
            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
            source: 'MDN Web Docs',
          },
        ],
      },
      {
        id: 'typescript',
        title: 'TypeScript',
        description: 'Add static typing to JavaScript for better tooling and reliability.',
        order: 7,
        prerequisite: 'javascript-async',
        resources: [
          {
            title: 'TypeScript Handbook',
            url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
            source: 'TypeScript',
          },
          {
            title: 'TypeScript for JavaScript Programmers',
            url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
            source: 'TypeScript',
          },
          {
            title: 'TypeScript Reference',
            url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html',
            source: 'TypeScript',
          },
        ],
      },
      {
        id: 'react',
        title: 'React',
        description: 'Build component-based user interfaces with React.',
        order: 8,
        prerequisite: 'typescript',
        resources: [
          {
            title: 'React Quick Start',
            url: 'https://react.dev/learn',
            source: 'React',
          },
          {
            title: 'Describing the UI',
            url: 'https://react.dev/learn/describing-the-ui',
            source: 'React',
          },
          {
            title: 'Adding Interactivity',
            url: 'https://react.dev/learn/adding-interactivity',
            source: 'React',
          },
          {
            title: 'Managing State',
            url: 'https://react.dev/learn/managing-state',
            source: 'React',
          },
          {
            title: 'React Hooks Reference',
            url: 'https://react.dev/reference/react/hooks',
            source: 'React',
          },
        ],
      },
      {
        id: 'nextjs',
        title: 'Next.js',
        description: 'Full-stack React framework with server-side rendering and routing.',
        order: 9,
        prerequisite: 'react',
        resources: [
          {
            title: 'Next.js Documentation',
            url: 'https://nextjs.org/docs',
            source: 'Next.js',
          },
          {
            title: 'App Router',
            url: 'https://nextjs.org/docs/app',
            source: 'Next.js',
          },
          {
            title: 'Data Fetching',
            url: 'https://nextjs.org/docs/app/building-your-application/data-fetching',
            source: 'Next.js',
          },
          {
            title: 'Server Components',
            url: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components',
            source: 'Next.js',
          },
        ],
      },
      {
        id: 'nodejs',
        title: 'Node.js',
        description: 'Server-side JavaScript runtime for building backend services.',
        order: 10,
        prerequisite: 'javascript-async',
        resources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/docs/latest/api/',
            source: 'Node.js',
          },
          {
            title: 'Getting Started Guide',
            url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
            source: 'Node.js',
          },
          {
            title: 'File System Module',
            url: 'https://nodejs.org/docs/latest/api/fs.html',
            source: 'Node.js',
          },
          {
            title: 'HTTP Module',
            url: 'https://nodejs.org/docs/latest/api/http.html',
            source: 'Node.js',
          },
        ],
      },
    ],
  },
  'mobile-development': {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform apps',
    steps: [
      {
        id: 'mobile-fundamentals',
        title: 'Mobile Development Concepts',
        description: 'Understand mobile platforms, app lifecycles, and design principles.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Android App Fundamentals',
            url: 'https://developer.android.com/guide/components/fundamentals',
            source: 'Android Developers',
          },
          {
            title: 'iOS App Life Cycle',
            url: 'https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle',
            source: 'Apple Developer',
          },
        ],
      },
      {
        id: 'swift-fundamentals',
        title: 'Swift Programming',
        description: 'Apple\'s modern programming language for iOS, macOS, and more.',
        order: 2,
        prerequisite: 'mobile-fundamentals',
        resources: [
          {
            title: 'Swift Language Guide',
            url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/',
            source: 'Swift.org',
          },
          {
            title: 'Swift Standard Library',
            url: 'https://developer.apple.com/documentation/swift/swift-standard-library',
            source: 'Apple Developer',
          },
        ],
      },
      {
        id: 'swiftui',
        title: 'SwiftUI',
        description: 'Declarative UI framework for building iOS and macOS apps.',
        order: 3,
        prerequisite: 'swift-fundamentals',
        resources: [
          {
            title: 'SwiftUI Documentation',
            url: 'https://developer.apple.com/documentation/swiftui',
            source: 'Apple Developer',
          },
          {
            title: 'SwiftUI Tutorials',
            url: 'https://developer.apple.com/tutorials/swiftui',
            source: 'Apple Developer',
          },
        ],
      },
      {
        id: 'kotlin-fundamentals',
        title: 'Kotlin Programming',
        description: 'Modern language for Android development endorsed by Google.',
        order: 4,
        prerequisite: 'mobile-fundamentals',
        resources: [
          {
            title: 'Kotlin Documentation',
            url: 'https://kotlinlang.org/docs/home.html',
            source: 'Kotlin',
          },
          {
            title: 'Kotlin Basics',
            url: 'https://kotlinlang.org/docs/basic-syntax.html',
            source: 'Kotlin',
          },
          {
            title: 'Kotlin for Android',
            url: 'https://developer.android.com/kotlin',
            source: 'Android Developers',
          },
        ],
      },
      {
        id: 'jetpack-compose',
        title: 'Jetpack Compose',
        description: 'Modern declarative UI toolkit for Android.',
        order: 5,
        prerequisite: 'kotlin-fundamentals',
        resources: [
          {
            title: 'Jetpack Compose Documentation',
            url: 'https://developer.android.com/develop/ui/compose/documentation',
            source: 'Android Developers',
          },
          {
            title: 'Compose Basics',
            url: 'https://developer.android.com/develop/ui/compose/mental-model',
            source: 'Android Developers',
          },
          {
            title: 'Compose Layouts',
            url: 'https://developer.android.com/develop/ui/compose/layouts',
            source: 'Android Developers',
          },
        ],
      },
      {
        id: 'react-native',
        title: 'React Native',
        description: 'Build cross-platform mobile apps using React and JavaScript.',
        order: 6,
        prerequisite: 'mobile-fundamentals',
        resources: [
          {
            title: 'React Native Introduction',
            url: 'https://reactnative.dev/docs/getting-started',
            source: 'React Native',
          },
          {
            title: 'Core Components',
            url: 'https://reactnative.dev/docs/components-and-apis',
            source: 'React Native',
          },
          {
            title: 'Navigation',
            url: 'https://reactnavigation.org/docs/getting-started',
            source: 'React Navigation',
          },
        ],
      },
      {
        id: 'flutter',
        title: 'Flutter',
        description: 'Google\'s UI toolkit for building natively compiled applications.',
        order: 7,
        prerequisite: 'mobile-fundamentals',
        resources: [
          {
            title: 'Flutter Documentation',
            url: 'https://docs.flutter.dev/',
            source: 'Flutter',
          },
          {
            title: 'Dart Language',
            url: 'https://dart.dev/language',
            source: 'Dart',
          },
          {
            title: 'Widget Catalog',
            url: 'https://docs.flutter.dev/ui/widgets',
            source: 'Flutter',
          },
          {
            title: 'State Management',
            url: 'https://docs.flutter.dev/data-and-backend/state-mgmt',
            source: 'Flutter',
          },
        ],
      },
    ],
  },
  'web3': {
    id: 'web3',
    name: 'Web3',
    description: 'Blockchain and smart contracts',
    steps: [
      {
        id: 'blockchain-fundamentals',
        title: 'Blockchain Fundamentals',
        description: 'Understand how blockchain networks work, consensus mechanisms, and cryptography basics.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Ethereum Whitepaper',
            url: 'https://ethereum.org/en/whitepaper/',
            source: 'Ethereum',
          },
          {
            title: 'How Does Ethereum Work?',
            url: 'https://ethereum.org/en/developers/docs/intro-to-ethereum/',
            source: 'Ethereum',
          },
          {
            title: 'Accounts',
            url: 'https://ethereum.org/en/developers/docs/accounts/',
            source: 'Ethereum',
          },
          {
            title: 'Transactions',
            url: 'https://ethereum.org/en/developers/docs/transactions/',
            source: 'Ethereum',
          },
        ],
      },
      {
        id: 'solidity-basics',
        title: 'Solidity Basics',
        description: 'Learn Solidity, the primary language for Ethereum smart contracts.',
        order: 2,
        prerequisite: 'blockchain-fundamentals',
        resources: [
          {
            title: 'Solidity Documentation',
            url: 'https://docs.soliditylang.org/en/latest/',
            source: 'Solidity',
          },
          {
            title: 'Solidity by Example',
            url: 'https://docs.soliditylang.org/en/latest/solidity-by-example.html',
            source: 'Solidity',
          },
          {
            title: 'Types',
            url: 'https://docs.soliditylang.org/en/latest/types.html',
            source: 'Solidity',
          },
        ],
      },
      {
        id: 'smart-contracts',
        title: 'Smart Contract Development',
        description: 'Write, test, and deploy smart contracts on Ethereum.',
        order: 3,
        prerequisite: 'solidity-basics',
        resources: [
          {
            title: 'Smart Contracts Introduction',
            url: 'https://ethereum.org/en/developers/docs/smart-contracts/',
            source: 'Ethereum',
          },
          {
            title: 'Contract Anatomy',
            url: 'https://ethereum.org/en/developers/docs/smart-contracts/anatomy/',
            source: 'Ethereum',
          },
          {
            title: 'Testing Smart Contracts',
            url: 'https://ethereum.org/en/developers/docs/smart-contracts/testing/',
            source: 'Ethereum',
          },
        ],
      },
      {
        id: 'hardhat',
        title: 'Hardhat Development Environment',
        description: 'Professional development environment for compiling, deploying, and testing smart contracts.',
        order: 4,
        prerequisite: 'smart-contracts',
        resources: [
          {
            title: 'Hardhat Documentation',
            url: 'https://hardhat.org/docs',
            source: 'Hardhat',
          },
          {
            title: 'Getting Started',
            url: 'https://hardhat.org/hardhat-runner/docs/getting-started',
            source: 'Hardhat',
          },
          {
            title: 'Testing Contracts',
            url: 'https://hardhat.org/hardhat-runner/docs/guides/test-contracts',
            source: 'Hardhat',
          },
        ],
      },
      {
        id: 'ethers-viem',
        title: 'Ethereum Libraries (ethers.js / viem)',
        description: 'Interact with Ethereum from JavaScript applications.',
        order: 5,
        prerequisite: 'smart-contracts',
        resources: [
          {
            title: 'ethers.js Documentation',
            url: 'https://docs.ethers.org/v6/',
            source: 'ethers.js',
          },
          {
            title: 'viem Documentation',
            url: 'https://viem.sh/docs/introduction',
            source: 'viem',
          },
          {
            title: 'wagmi Documentation',
            url: 'https://wagmi.sh/core/getting-started',
            source: 'wagmi',
          },
        ],
      },
      {
        id: 'defi-protocols',
        title: 'DeFi Protocols',
        description: 'Understand decentralized finance protocols and standards.',
        order: 6,
        prerequisite: 'ethers-viem',
        resources: [
          {
            title: 'ERC-20 Token Standard',
            url: 'https://ethereum.org/en/developers/docs/standards/tokens/erc-20/',
            source: 'Ethereum',
          },
          {
            title: 'ERC-721 NFT Standard',
            url: 'https://ethereum.org/en/developers/docs/standards/tokens/erc-721/',
            source: 'Ethereum',
          },
          {
            title: 'Uniswap V3 Docs',
            url: 'https://docs.uniswap.org/',
            source: 'Uniswap',
          },
        ],
      },
      {
        id: 'security',
        title: 'Smart Contract Security',
        description: 'Security best practices and common vulnerabilities.',
        order: 7,
        prerequisite: 'defi-protocols',
        resources: [
          {
            title: 'Security Considerations',
            url: 'https://docs.soliditylang.org/en/latest/security-considerations.html',
            source: 'Solidity',
          },
          {
            title: 'Smart Contract Security',
            url: 'https://ethereum.org/en/developers/docs/smart-contracts/security/',
            source: 'Ethereum',
          },
          {
            title: 'OpenZeppelin Contracts',
            url: 'https://docs.openzeppelin.com/contracts/',
            source: 'OpenZeppelin',
          },
        ],
      },
    ],
  },
  'ai-ml': {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Python to deep learning',
    steps: [
      {
        id: 'python-fundamentals',
        title: 'Python Fundamentals',
        description: 'Essential Python programming for data science and ML.',
        order: 1,
        prerequisite: null,
        resources: [
          {
            title: 'Python Documentation',
            url: 'https://docs.python.org/3/tutorial/index.html',
            source: 'Python',
          },
          {
            title: 'Python Language Reference',
            url: 'https://docs.python.org/3/reference/index.html',
            source: 'Python',
          },
          {
            title: 'Python Standard Library',
            url: 'https://docs.python.org/3/library/index.html',
            source: 'Python',
          },
        ],
      },
      {
        id: 'numpy',
        title: 'NumPy',
        description: 'Numerical computing with arrays and matrices.',
        order: 2,
        prerequisite: 'python-fundamentals',
        resources: [
          {
            title: 'NumPy User Guide',
            url: 'https://numpy.org/doc/stable/user/index.html',
            source: 'NumPy',
          },
          {
            title: 'NumPy Quickstart',
            url: 'https://numpy.org/doc/stable/user/quickstart.html',
            source: 'NumPy',
          },
          {
            title: 'NumPy Reference',
            url: 'https://numpy.org/doc/stable/reference/index.html',
            source: 'NumPy',
          },
        ],
      },
      {
        id: 'pandas',
        title: 'Pandas',
        description: 'Data manipulation and analysis with DataFrames.',
        order: 3,
        prerequisite: 'numpy',
        resources: [
          {
            title: 'Pandas User Guide',
            url: 'https://pandas.pydata.org/docs/user_guide/index.html',
            source: 'Pandas',
          },
          {
            title: 'Getting Started',
            url: 'https://pandas.pydata.org/docs/getting_started/index.html',
            source: 'Pandas',
          },
          {
            title: 'API Reference',
            url: 'https://pandas.pydata.org/docs/reference/index.html',
            source: 'Pandas',
          },
        ],
      },
      {
        id: 'matplotlib',
        title: 'Matplotlib & Visualization',
        description: 'Create static, animated, and interactive visualizations.',
        order: 4,
        prerequisite: 'pandas',
        resources: [
          {
            title: 'Matplotlib User Guide',
            url: 'https://matplotlib.org/stable/users/index.html',
            source: 'Matplotlib',
          },
          {
            title: 'Pyplot Tutorial',
            url: 'https://matplotlib.org/stable/tutorials/pyplot.html',
            source: 'Matplotlib',
          },
          {
            title: 'Seaborn Documentation',
            url: 'https://seaborn.pydata.org/tutorial.html',
            source: 'Seaborn',
          },
        ],
      },
      {
        id: 'scikit-learn',
        title: 'Scikit-learn',
        description: 'Machine learning algorithms and tools.',
        order: 5,
        prerequisite: 'matplotlib',
        resources: [
          {
            title: 'Scikit-learn User Guide',
            url: 'https://scikit-learn.org/stable/user_guide.html',
            source: 'Scikit-learn',
          },
          {
            title: 'Getting Started',
            url: 'https://scikit-learn.org/stable/getting_started.html',
            source: 'Scikit-learn',
          },
          {
            title: 'API Reference',
            url: 'https://scikit-learn.org/stable/modules/classes.html',
            source: 'Scikit-learn',
          },
        ],
      },
      {
        id: 'pytorch',
        title: 'PyTorch',
        description: 'Deep learning framework with dynamic computation graphs.',
        order: 6,
        prerequisite: 'scikit-learn',
        resources: [
          {
            title: 'PyTorch Documentation',
            url: 'https://pytorch.org/docs/stable/index.html',
            source: 'PyTorch',
          },
          {
            title: 'PyTorch Tutorials',
            url: 'https://pytorch.org/tutorials/',
            source: 'PyTorch',
          },
          {
            title: 'Learn the Basics',
            url: 'https://pytorch.org/tutorials/beginner/basics/intro.html',
            source: 'PyTorch',
          },
        ],
      },
      {
        id: 'tensorflow',
        title: 'TensorFlow',
        description: 'End-to-end platform for machine learning.',
        order: 7,
        prerequisite: 'scikit-learn',
        resources: [
          {
            title: 'TensorFlow Guide',
            url: 'https://www.tensorflow.org/guide',
            source: 'TensorFlow',
          },
          {
            title: 'TensorFlow Tutorials',
            url: 'https://www.tensorflow.org/tutorials',
            source: 'TensorFlow',
          },
          {
            title: 'Keras Documentation',
            url: 'https://keras.io/guides/',
            source: 'Keras',
          },
        ],
      },
      {
        id: 'huggingface',
        title: 'Hugging Face Transformers',
        description: 'State-of-the-art NLP and transformer models.',
        order: 8,
        prerequisite: 'pytorch',
        resources: [
          {
            title: 'Transformers Documentation',
            url: 'https://huggingface.co/docs/transformers/index',
            source: 'Hugging Face',
          },
          {
            title: 'Quick Tour',
            url: 'https://huggingface.co/docs/transformers/quicktour',
            source: 'Hugging Face',
          },
          {
            title: 'Datasets Documentation',
            url: 'https://huggingface.co/docs/datasets/index',
            source: 'Hugging Face',
          },
        ],
      },
      {
        id: 'langchain',
        title: 'LangChain & LLM Development',
        description: 'Build applications powered by large language models.',
        order: 9,
        prerequisite: 'huggingface',
        resources: [
          {
            title: 'LangChain Documentation',
            url: 'https://python.langchain.com/docs/introduction/',
            source: 'LangChain',
          },
          {
            title: 'OpenAI API Reference',
            url: 'https://platform.openai.com/docs/api-reference',
            source: 'OpenAI',
          },
          {
            title: 'Anthropic API Documentation',
            url: 'https://docs.anthropic.com/en/api/getting-started',
            source: 'Anthropic',
          },
        ],
      },
    ],
  },
};
