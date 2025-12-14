import type { SearchEntry } from './types';

export const rustEntries: SearchEntry[] = [
  // Getting Started
  { id: 'rust-book', title: 'The Rust Book', description: 'Official Rust programming language book', url: 'https://doc.rust-lang.org/book/', category: 'Rust', source: 'Rust Docs', keywords: ['rust', 'book', 'learn', 'tutorial'], aliases: ['rust tutorial', 'learn rust'], priority: 100 },
  { id: 'rust-by-example', title: 'Rust by Example', description: 'Learn Rust through examples', url: 'https://doc.rust-lang.org/rust-by-example/', category: 'Rust', source: 'Rust Docs', keywords: ['rust', 'examples', 'learn'], priority: 95 },
  { id: 'rustlings', title: 'Rustlings', description: 'Small exercises to learn Rust', url: 'https://github.com/rust-lang/rustlings', category: 'Rust', source: 'GitHub', keywords: ['rust', 'exercises', 'practice'], priority: 90 },
  
  // Ownership & Borrowing
  { id: 'rust-ownership', title: 'Ownership', description: 'Understanding Rust ownership system', url: 'https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html', category: 'Rust', source: 'Rust Docs', keywords: ['ownership', 'memory', 'move'], aliases: ['rust ownership', 'move semantics'], priority: 95 },
  { id: 'rust-borrowing', title: 'References & Borrowing', description: 'Borrowing and references in Rust', url: 'https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html', category: 'Rust', source: 'Rust Docs', keywords: ['borrow', 'reference', '&', 'mut'], aliases: ['rust borrow', 'rust references'], priority: 95 },
  { id: 'rust-lifetimes', title: 'Lifetimes', description: 'Validating references with lifetimes', url: 'https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html', category: 'Rust', source: 'Rust Docs', keywords: ['lifetime', 'lifetime annotation', "'a"], aliases: ['rust lifetimes'], priority: 90 },
  
  // Types & Traits
  { id: 'rust-structs', title: 'Structs', description: 'Defining and instantiating structs', url: 'https://doc.rust-lang.org/book/ch05-00-structs.html', category: 'Rust', source: 'Rust Docs', keywords: ['struct', 'data', 'type'], priority: 85 },
  { id: 'rust-enums', title: 'Enums & Pattern Matching', description: 'Enums and match expressions', url: 'https://doc.rust-lang.org/book/ch06-00-enums.html', category: 'Rust', source: 'Rust Docs', keywords: ['enum', 'match', 'pattern', 'Option', 'Result'], aliases: ['rust enum', 'rust match'], priority: 90 },
  { id: 'rust-traits', title: 'Traits', description: 'Defining shared behavior', url: 'https://doc.rust-lang.org/book/ch10-02-traits.html', category: 'Rust', source: 'Rust Docs', keywords: ['trait', 'impl', 'interface'], aliases: ['rust traits', 'rust impl'], priority: 90 },
  { id: 'rust-generics', title: 'Generics', description: 'Generic types, traits, and lifetimes', url: 'https://doc.rust-lang.org/book/ch10-00-generics.html', category: 'Rust', source: 'Rust Docs', keywords: ['generic', 'type parameter', '<T>'], priority: 85 },
  
  // Error Handling
  { id: 'rust-error-handling', title: 'Error Handling', description: 'Result, Option, and error handling', url: 'https://doc.rust-lang.org/book/ch09-00-error-handling.html', category: 'Rust', source: 'Rust Docs', keywords: ['error', 'Result', 'Option', 'panic', '?'], aliases: ['rust errors', 'rust Result'], priority: 90 },
  { id: 'rust-result', title: 'Result Type', description: 'Recoverable errors with Result', url: 'https://doc.rust-lang.org/std/result/', category: 'Rust', source: 'Rust Docs', keywords: ['Result', 'Ok', 'Err', 'unwrap'], priority: 85 },
  { id: 'rust-option', title: 'Option Type', description: 'Optional values with Option', url: 'https://doc.rust-lang.org/std/option/', category: 'Rust', source: 'Rust Docs', keywords: ['Option', 'Some', 'None', 'unwrap'], priority: 85 },
  
  // Concurrency
  { id: 'rust-concurrency', title: 'Concurrency', description: 'Fearless concurrency in Rust', url: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html', category: 'Rust', source: 'Rust Docs', keywords: ['concurrency', 'thread', 'async', 'parallel'], priority: 85 },
  { id: 'rust-async', title: 'Async/Await', description: 'Asynchronous programming in Rust', url: 'https://rust-lang.github.io/async-book/', category: 'Rust', source: 'Rust Docs', keywords: ['async', 'await', 'future', 'tokio'], aliases: ['rust async'], priority: 90 },
  
  // Cargo & Modules
  { id: 'rust-cargo', title: 'Cargo', description: 'Rust package manager and build tool', url: 'https://doc.rust-lang.org/cargo/', category: 'Rust', source: 'Rust Docs', keywords: ['cargo', 'build', 'package', 'crate'], priority: 90 },
  { id: 'rust-modules', title: 'Modules', description: 'Organizing code with modules', url: 'https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html', category: 'Rust', source: 'Rust Docs', keywords: ['module', 'mod', 'use', 'pub'], priority: 80 },
  { id: 'crates-io', title: 'crates.io', description: 'Rust package registry', url: 'https://crates.io/', category: 'Rust', source: 'crates.io', keywords: ['crate', 'package', 'registry', 'dependency'], priority: 85 },
  
  // Standard Library
  { id: 'rust-std', title: 'Standard Library', description: 'Rust standard library reference', url: 'https://doc.rust-lang.org/std/', category: 'Rust', source: 'Rust Docs', keywords: ['std', 'standard library'], priority: 90 },
  { id: 'rust-collections', title: 'Collections', description: 'Vec, HashMap, and other collections', url: 'https://doc.rust-lang.org/std/collections/', category: 'Rust', source: 'Rust Docs', keywords: ['Vec', 'HashMap', 'HashSet', 'collection'], priority: 85 },
  { id: 'rust-iterators', title: 'Iterators', description: 'Processing series of elements', url: 'https://doc.rust-lang.org/book/ch13-02-iterators.html', category: 'Rust', source: 'Rust Docs', keywords: ['iterator', 'iter', 'map', 'filter', 'collect'], priority: 85 },
  
  // Advanced
  { id: 'rust-macros', title: 'Macros', description: 'Metaprogramming with macros', url: 'https://doc.rust-lang.org/book/ch19-06-macros.html', category: 'Rust', source: 'Rust Docs', keywords: ['macro', 'macro_rules', 'proc_macro'], priority: 80 },
  { id: 'rust-unsafe', title: 'Unsafe Rust', description: 'Working with unsafe code', url: 'https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html', category: 'Rust', source: 'Rust Docs', keywords: ['unsafe', 'raw pointer', 'ffi'], priority: 75 },
  { id: 'rust-smart-pointers', title: 'Smart Pointers', description: 'Box, Rc, Arc, and RefCell', url: 'https://doc.rust-lang.org/book/ch15-00-smart-pointers.html', category: 'Rust', source: 'Rust Docs', keywords: ['Box', 'Rc', 'Arc', 'RefCell', 'pointer'], priority: 80 },
];

export const goEntries: SearchEntry[] = [
  // Getting Started
  { id: 'go-tour', title: 'A Tour of Go', description: 'Interactive Go tutorial', url: 'https://go.dev/tour/', category: 'Go', source: 'Go Docs', keywords: ['go', 'tour', 'tutorial', 'learn'], aliases: ['go tutorial', 'learn go'], priority: 100 },
  { id: 'go-doc', title: 'Go Documentation', description: 'Official Go documentation', url: 'https://go.dev/doc/', category: 'Go', source: 'Go Docs', keywords: ['go', 'docs', 'documentation'], priority: 95 },
  { id: 'effective-go', title: 'Effective Go', description: 'Writing clear, idiomatic Go', url: 'https://go.dev/doc/effective_go', category: 'Go', source: 'Go Docs', keywords: ['effective', 'idiomatic', 'best practices'], priority: 90 },
  
  // Basics
  { id: 'go-basics', title: 'Go Basics', description: 'Basic Go syntax and types', url: 'https://go.dev/tour/basics/1', category: 'Go', source: 'Go Docs', keywords: ['basics', 'syntax', 'variables'], priority: 90 },
  { id: 'go-types', title: 'Go Types', description: 'Basic types in Go', url: 'https://go.dev/tour/basics/11', category: 'Go', source: 'Go Docs', keywords: ['types', 'int', 'string', 'bool', 'float'], priority: 85 },
  { id: 'go-functions', title: 'Functions', description: 'Defining and calling functions', url: 'https://go.dev/tour/basics/4', category: 'Go', source: 'Go Docs', keywords: ['function', 'func', 'return'], priority: 85 },
  { id: 'go-structs', title: 'Structs', description: 'Defining struct types', url: 'https://go.dev/tour/moretypes/2', category: 'Go', source: 'Go Docs', keywords: ['struct', 'type', 'field'], priority: 90 },
  { id: 'go-interfaces', title: 'Interfaces', description: 'Interface types and methods', url: 'https://go.dev/tour/methods/9', category: 'Go', source: 'Go Docs', keywords: ['interface', 'method', 'impl'], aliases: ['go interface'], priority: 90 },
  
  // Concurrency
  { id: 'go-goroutines', title: 'Goroutines', description: 'Lightweight threads in Go', url: 'https://go.dev/tour/concurrency/1', category: 'Go', source: 'Go Docs', keywords: ['goroutine', 'go', 'concurrent', 'thread'], aliases: ['go routines'], priority: 95 },
  { id: 'go-channels', title: 'Channels', description: 'Communication between goroutines', url: 'https://go.dev/tour/concurrency/2', category: 'Go', source: 'Go Docs', keywords: ['channel', 'chan', 'send', 'receive'], aliases: ['go channels'], priority: 95 },
  { id: 'go-select', title: 'Select', description: 'Waiting on multiple channels', url: 'https://go.dev/tour/concurrency/5', category: 'Go', source: 'Go Docs', keywords: ['select', 'channel', 'case'], priority: 85 },
  { id: 'go-sync', title: 'Sync Package', description: 'Synchronization primitives', url: 'https://pkg.go.dev/sync', category: 'Go', source: 'Go Docs', keywords: ['sync', 'mutex', 'waitgroup', 'lock'], priority: 85 },
  
  // Error Handling
  { id: 'go-errors', title: 'Error Handling', description: 'Working with errors in Go', url: 'https://go.dev/blog/error-handling-and-go', category: 'Go', source: 'Go Blog', keywords: ['error', 'err', 'nil', 'handle'], aliases: ['go errors'], priority: 90 },
  { id: 'go-errors-pkg', title: 'errors Package', description: 'Creating and wrapping errors', url: 'https://pkg.go.dev/errors', category: 'Go', source: 'Go Docs', keywords: ['errors', 'wrap', 'unwrap', 'Is', 'As'], priority: 85 },
  
  // Standard Library
  { id: 'go-stdlib', title: 'Standard Library', description: 'Go standard library packages', url: 'https://pkg.go.dev/std', category: 'Go', source: 'Go Docs', keywords: ['std', 'stdlib', 'packages'], priority: 90 },
  { id: 'go-fmt', title: 'fmt Package', description: 'Formatted I/O', url: 'https://pkg.go.dev/fmt', category: 'Go', source: 'Go Docs', keywords: ['fmt', 'print', 'sprintf', 'format'], priority: 85 },
  { id: 'go-http', title: 'net/http', description: 'HTTP client and server', url: 'https://pkg.go.dev/net/http', category: 'Go', source: 'Go Docs', keywords: ['http', 'server', 'client', 'handler'], priority: 90 },
  { id: 'go-json', title: 'encoding/json', description: 'JSON encoding and decoding', url: 'https://pkg.go.dev/encoding/json', category: 'Go', source: 'Go Docs', keywords: ['json', 'marshal', 'unmarshal', 'encode', 'decode'], priority: 90 },
  { id: 'go-io', title: 'io Package', description: 'Basic I/O interfaces', url: 'https://pkg.go.dev/io', category: 'Go', source: 'Go Docs', keywords: ['io', 'reader', 'writer', 'copy'], priority: 80 },
  { id: 'go-context', title: 'context Package', description: 'Request-scoped values and cancellation', url: 'https://pkg.go.dev/context', category: 'Go', source: 'Go Docs', keywords: ['context', 'cancel', 'timeout', 'deadline'], priority: 90 },
  
  // Modules & Tools
  { id: 'go-modules', title: 'Go Modules', description: 'Dependency management', url: 'https://go.dev/doc/modules/gomod-ref', category: 'Go', source: 'Go Docs', keywords: ['module', 'mod', 'go.mod', 'dependency'], aliases: ['go mod'], priority: 90 },
  { id: 'go-testing', title: 'Testing', description: 'Writing tests in Go', url: 'https://pkg.go.dev/testing', category: 'Go', source: 'Go Docs', keywords: ['test', 'testing', 'benchmark'], aliases: ['go test'], priority: 85 },
  { id: 'go-generics', title: 'Generics', description: 'Type parameters in Go', url: 'https://go.dev/doc/tutorial/generics', category: 'Go', source: 'Go Docs', keywords: ['generics', 'type parameter', 'any', 'comparable'], priority: 85 },
];

export const kotlinEntries: SearchEntry[] = [
  // Getting Started
  { id: 'kotlin-docs', title: 'Kotlin Documentation', description: 'Official Kotlin documentation', url: 'https://kotlinlang.org/docs/home.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['kotlin', 'docs', 'documentation'], priority: 100 },
  { id: 'kotlin-tour', title: 'Kotlin Tour', description: 'Interactive Kotlin tutorial', url: 'https://kotlinlang.org/docs/kotlin-tour-welcome.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['kotlin', 'tour', 'tutorial', 'learn'], aliases: ['learn kotlin'], priority: 95 },
  { id: 'kotlin-playground', title: 'Kotlin Playground', description: 'Run Kotlin in browser', url: 'https://play.kotlinlang.org/', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['playground', 'online', 'run'], priority: 85 },
  
  // Basics
  { id: 'kotlin-basics', title: 'Basic Syntax', description: 'Kotlin basic syntax', url: 'https://kotlinlang.org/docs/basic-syntax.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['syntax', 'basics', 'variables'], priority: 90 },
  { id: 'kotlin-types', title: 'Basic Types', description: 'Kotlin type system basics', url: 'https://kotlinlang.org/docs/basic-types.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['types', 'int', 'string', 'boolean'], priority: 85 },
  { id: 'kotlin-null-safety', title: 'Null Safety', description: 'Handling nullable types', url: 'https://kotlinlang.org/docs/null-safety.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['null', 'nullable', '?', '!!', 'safe call'], aliases: ['kotlin null', 'kotlin nullable'], priority: 95 },
  { id: 'kotlin-functions', title: 'Functions', description: 'Defining functions in Kotlin', url: 'https://kotlinlang.org/docs/functions.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['function', 'fun', 'lambda'], priority: 85 },
  
  // Classes & Objects
  { id: 'kotlin-classes', title: 'Classes', description: 'Defining classes in Kotlin', url: 'https://kotlinlang.org/docs/classes.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['class', 'constructor', 'init'], priority: 90 },
  { id: 'kotlin-data-classes', title: 'Data Classes', description: 'Classes for holding data', url: 'https://kotlinlang.org/docs/data-classes.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['data class', 'copy', 'equals', 'hashCode'], aliases: ['kotlin data class'], priority: 90 },
  { id: 'kotlin-sealed-classes', title: 'Sealed Classes', description: 'Restricted class hierarchies', url: 'https://kotlinlang.org/docs/sealed-classes.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['sealed', 'when', 'exhaustive'], priority: 85 },
  { id: 'kotlin-objects', title: 'Objects', description: 'Object declarations and expressions', url: 'https://kotlinlang.org/docs/object-declarations.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['object', 'singleton', 'companion'], priority: 85 },
  
  // Collections & Functional
  { id: 'kotlin-collections', title: 'Collections', description: 'Lists, Sets, and Maps', url: 'https://kotlinlang.org/docs/collections-overview.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['collection', 'list', 'set', 'map', 'mutable'], priority: 90 },
  { id: 'kotlin-lambdas', title: 'Lambdas', description: 'Lambda expressions and higher-order functions', url: 'https://kotlinlang.org/docs/lambdas.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['lambda', 'higher-order', 'it', 'closure'], priority: 90 },
  { id: 'kotlin-scope-functions', title: 'Scope Functions', description: 'let, run, with, apply, also', url: 'https://kotlinlang.org/docs/scope-functions.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['let', 'run', 'with', 'apply', 'also', 'scope'], priority: 90 },
  { id: 'kotlin-sequences', title: 'Sequences', description: 'Lazy collections', url: 'https://kotlinlang.org/docs/sequences.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['sequence', 'lazy', 'yield'], priority: 80 },
  
  // Coroutines
  { id: 'kotlin-coroutines', title: 'Coroutines', description: 'Asynchronous programming', url: 'https://kotlinlang.org/docs/coroutines-overview.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['coroutine', 'async', 'suspend', 'launch'], aliases: ['kotlin async'], priority: 95 },
  { id: 'kotlin-flow', title: 'Flow', description: 'Asynchronous data streams', url: 'https://kotlinlang.org/docs/flow.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['flow', 'stream', 'collect', 'emit'], priority: 90 },
  
  // Multiplatform
  { id: 'kotlin-multiplatform', title: 'Kotlin Multiplatform', description: 'Share code across platforms', url: 'https://kotlinlang.org/docs/multiplatform.html', category: 'Kotlin', source: 'Kotlin Docs', keywords: ['multiplatform', 'kmp', 'common', 'expect', 'actual'], aliases: ['kmp', 'kotlin multiplatform'], priority: 85 },
  { id: 'kotlin-android', title: 'Kotlin for Android', description: 'Android development with Kotlin', url: 'https://developer.android.com/kotlin', category: 'Kotlin', source: 'Android Docs', keywords: ['android', 'mobile', 'app'], priority: 90 },
];

export const swiftEntries: SearchEntry[] = [
  // Getting Started
  { id: 'swift-docs', title: 'Swift Documentation', description: 'Official Swift documentation', url: 'https://www.swift.org/documentation/', category: 'Swift', source: 'Swift Docs', keywords: ['swift', 'docs', 'documentation'], priority: 100 },
  { id: 'swift-book', title: 'The Swift Programming Language', description: 'Comprehensive Swift guide', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/', category: 'Swift', source: 'Swift Docs', keywords: ['swift', 'book', 'guide', 'learn'], aliases: ['swift book', 'learn swift'], priority: 95 },
  { id: 'swift-tour', title: 'Swift Tour', description: 'Quick introduction to Swift', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/', category: 'Swift', source: 'Swift Docs', keywords: ['tour', 'intro', 'tutorial'], priority: 90 },
  
  // Basics
  { id: 'swift-basics', title: 'Swift Basics', description: 'Variables, constants, and types', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/', category: 'Swift', source: 'Swift Docs', keywords: ['basics', 'var', 'let', 'types'], priority: 90 },
  { id: 'swift-optionals', title: 'Optionals', description: 'Handling absence of value', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals', category: 'Swift', source: 'Swift Docs', keywords: ['optional', 'nil', '?', '!', 'unwrap'], aliases: ['swift optional', 'swift nil'], priority: 95 },
  { id: 'swift-functions', title: 'Functions', description: 'Defining and calling functions', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/functions/', category: 'Swift', source: 'Swift Docs', keywords: ['function', 'func', 'parameter', 'return'], priority: 85 },
  { id: 'swift-closures', title: 'Closures', description: 'Self-contained blocks of code', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/', category: 'Swift', source: 'Swift Docs', keywords: ['closure', 'lambda', 'trailing', 'capture'], priority: 90 },
  
  // Types
  { id: 'swift-structs', title: 'Structures', description: 'Value types in Swift', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/', category: 'Swift', source: 'Swift Docs', keywords: ['struct', 'structure', 'value type'], priority: 90 },
  { id: 'swift-classes', title: 'Classes', description: 'Reference types in Swift', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/', category: 'Swift', source: 'Swift Docs', keywords: ['class', 'reference', 'inheritance'], priority: 90 },
  { id: 'swift-enums', title: 'Enumerations', description: 'Defining enum types', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/enumerations/', category: 'Swift', source: 'Swift Docs', keywords: ['enum', 'case', 'associated value'], priority: 85 },
  { id: 'swift-protocols', title: 'Protocols', description: 'Defining interfaces', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/', category: 'Swift', source: 'Swift Docs', keywords: ['protocol', 'conformance', 'delegate'], aliases: ['swift protocol'], priority: 90 },
  
  // Collections
  { id: 'swift-collections', title: 'Collections', description: 'Arrays, Sets, and Dictionaries', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/', category: 'Swift', source: 'Swift Docs', keywords: ['array', 'set', 'dictionary', 'collection'], priority: 85 },
  
  // Concurrency
  { id: 'swift-concurrency', title: 'Concurrency', description: 'Async/await in Swift', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/', category: 'Swift', source: 'Swift Docs', keywords: ['async', 'await', 'task', 'actor', 'concurrent'], aliases: ['swift async'], priority: 95 },
  { id: 'swift-actors', title: 'Actors', description: 'Safe concurrent state', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/#Actors', category: 'Swift', source: 'Swift Docs', keywords: ['actor', 'isolated', 'concurrent'], priority: 85 },
  
  // Memory & Advanced
  { id: 'swift-arc', title: 'ARC', description: 'Automatic Reference Counting', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/automaticreferencecounting/', category: 'Swift', source: 'Swift Docs', keywords: ['arc', 'memory', 'strong', 'weak', 'unowned'], aliases: ['swift memory'], priority: 85 },
  { id: 'swift-generics', title: 'Generics', description: 'Type-safe generic code', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/', category: 'Swift', source: 'Swift Docs', keywords: ['generic', 'type parameter', 'where'], priority: 85 },
  { id: 'swift-error-handling', title: 'Error Handling', description: 'Throwing and catching errors', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/errorhandling/', category: 'Swift', source: 'Swift Docs', keywords: ['error', 'throw', 'catch', 'try', 'do'], priority: 85 },
  
  // SwiftUI & iOS
  { id: 'swiftui-docs', title: 'SwiftUI', description: 'Declarative UI framework', url: 'https://developer.apple.com/documentation/swiftui/', category: 'Swift', source: 'Apple Docs', keywords: ['swiftui', 'ui', 'view', 'state'], aliases: ['swift ui'], priority: 95 },
  { id: 'swiftui-tutorials', title: 'SwiftUI Tutorials', description: 'Learn SwiftUI with tutorials', url: 'https://developer.apple.com/tutorials/swiftui', category: 'Swift', source: 'Apple Docs', keywords: ['swiftui', 'tutorial', 'learn'], priority: 90 },
];

export const cppEntries: SearchEntry[] = [
  // Getting Started
  { id: 'cpp-reference', title: 'C++ Reference', description: 'Comprehensive C++ reference', url: 'https://en.cppreference.com/w/', category: 'C++', source: 'cppreference', keywords: ['c++', 'cpp', 'reference'], priority: 100 },
  { id: 'cpp-core-guidelines', title: 'C++ Core Guidelines', description: 'Best practices for C++', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines', category: 'C++', source: 'ISO C++', keywords: ['guidelines', 'best practices', 'style'], priority: 90 },
  { id: 'learncpp', title: 'Learn C++', description: 'C++ tutorial website', url: 'https://www.learncpp.com/', category: 'C++', source: 'LearnCpp', keywords: ['learn', 'tutorial', 'beginner'], aliases: ['learn c++'], priority: 95 },
  
  // Language Features
  { id: 'cpp-classes', title: 'Classes', description: 'Class definitions and members', url: 'https://en.cppreference.com/w/cpp/language/classes', category: 'C++', source: 'cppreference', keywords: ['class', 'struct', 'member', 'constructor'], priority: 90 },
  { id: 'cpp-templates', title: 'Templates', description: 'Generic programming with templates', url: 'https://en.cppreference.com/w/cpp/language/templates', category: 'C++', source: 'cppreference', keywords: ['template', 'generic', 'typename'], aliases: ['c++ templates'], priority: 90 },
  { id: 'cpp-inheritance', title: 'Inheritance', description: 'Class inheritance and polymorphism', url: 'https://en.cppreference.com/w/cpp/language/derived_class', category: 'C++', source: 'cppreference', keywords: ['inheritance', 'derived', 'virtual', 'override'], priority: 85 },
  { id: 'cpp-lambdas', title: 'Lambda Expressions', description: 'Anonymous functions in C++', url: 'https://en.cppreference.com/w/cpp/language/lambda', category: 'C++', source: 'cppreference', keywords: ['lambda', 'closure', 'capture'], priority: 85 },
  
  // Memory Management
  { id: 'cpp-smart-pointers', title: 'Smart Pointers', description: 'unique_ptr, shared_ptr, weak_ptr', url: 'https://en.cppreference.com/w/cpp/memory', category: 'C++', source: 'cppreference', keywords: ['smart pointer', 'unique_ptr', 'shared_ptr', 'weak_ptr'], aliases: ['c++ smart pointers'], priority: 90 },
  { id: 'cpp-raii', title: 'RAII', description: 'Resource Acquisition Is Initialization', url: 'https://en.cppreference.com/w/cpp/language/raii', category: 'C++', source: 'cppreference', keywords: ['raii', 'resource', 'scope'], priority: 85 },
  { id: 'cpp-move-semantics', title: 'Move Semantics', description: 'Move constructors and assignment', url: 'https://en.cppreference.com/w/cpp/language/move_constructor', category: 'C++', source: 'cppreference', keywords: ['move', 'rvalue', 'std::move'], priority: 85 },
  
  // Standard Library
  { id: 'cpp-stl', title: 'STL Containers', description: 'Standard Template Library containers', url: 'https://en.cppreference.com/w/cpp/container', category: 'C++', source: 'cppreference', keywords: ['stl', 'container', 'vector', 'map', 'set'], aliases: ['c++ stl'], priority: 90 },
  { id: 'cpp-algorithms', title: 'Algorithms', description: 'Standard algorithms library', url: 'https://en.cppreference.com/w/cpp/algorithm', category: 'C++', source: 'cppreference', keywords: ['algorithm', 'sort', 'find', 'transform'], priority: 85 },
  { id: 'cpp-iterators', title: 'Iterators', description: 'Iterator concepts and usage', url: 'https://en.cppreference.com/w/cpp/iterator', category: 'C++', source: 'cppreference', keywords: ['iterator', 'begin', 'end'], priority: 80 },
  { id: 'cpp-strings', title: 'Strings', description: 'std::string and string_view', url: 'https://en.cppreference.com/w/cpp/string', category: 'C++', source: 'cppreference', keywords: ['string', 'string_view', 'char'], priority: 85 },
  
  // Modern C++
  { id: 'cpp-auto', title: 'Auto Type Deduction', description: 'Type inference with auto', url: 'https://en.cppreference.com/w/cpp/language/auto', category: 'C++', source: 'cppreference', keywords: ['auto', 'type deduction', 'decltype'], priority: 85 },
  { id: 'cpp-ranges', title: 'Ranges (C++20)', description: 'Ranges library', url: 'https://en.cppreference.com/w/cpp/ranges', category: 'C++', source: 'cppreference', keywords: ['ranges', 'views', 'c++20'], priority: 80 },
  { id: 'cpp-concepts', title: 'Concepts (C++20)', description: 'Template constraints', url: 'https://en.cppreference.com/w/cpp/language/constraints', category: 'C++', source: 'cppreference', keywords: ['concepts', 'constraints', 'requires', 'c++20'], priority: 80 },
  { id: 'cpp-coroutines', title: 'Coroutines (C++20)', description: 'Coroutine support', url: 'https://en.cppreference.com/w/cpp/language/coroutines', category: 'C++', source: 'cppreference', keywords: ['coroutine', 'co_await', 'co_yield', 'c++20'], priority: 80 },
  
  // Concurrency
  { id: 'cpp-threads', title: 'Threads', description: 'std::thread and multithreading', url: 'https://en.cppreference.com/w/cpp/thread', category: 'C++', source: 'cppreference', keywords: ['thread', 'mutex', 'lock', 'concurrent'], priority: 85 },
  { id: 'cpp-async', title: 'Async', description: 'std::async and futures', url: 'https://en.cppreference.com/w/cpp/thread/async', category: 'C++', source: 'cppreference', keywords: ['async', 'future', 'promise'], priority: 80 },
];

export const languageEntries: SearchEntry[] = [
  ...rustEntries,
  ...goEntries,
  ...kotlinEntries,
  ...swiftEntries,
  ...cppEntries,
];
