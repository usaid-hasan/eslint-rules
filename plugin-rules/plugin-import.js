/**
 * Rules for 'eslint-plugin-import'
 */

export default {
  /* Static analysis */

  // Ensure imports point to files/modules that can be resolved
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // Ensure named imports coupled with named exports
  'import/named': 'error',

  // Ensure default import coupled with default export
  'import/default': 'off',

  // Ensure names exist at the time they are dereferenced, when imported as a full namespace
  'import/namespace': 'off',

  /* Helpful warnings */

  // Disallow invalid exports, e.g. multiple defaults
  'import/export': 'error',

  // Do not allow a default import name to match a named export
  'import/no-named-as-default': 'error',

  // Warn on accessing default export property names that are also named exports
  'import/no-named-as-default-member': 'error',

  // Disallow use of jsdoc-marked-deprecated imports
  'import/no-deprecated': 'off',

  // Forbid the use of extraneous packages. Paths are treated both as absolute paths,
  // and relative to process.cwd()
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: [
      'test/**',
      'tests/**',
      'spec/**',
      '**/__tests__/**',
      '**/__mocks__/**',
      '**/mocks/**',
      '**/tests/**',
      'test.{js,jsx}',
      'test-*.{js,jsx}',
      '**/*{.,_}{test,spec}.{js,jsx}',
      '**/*.config.js',
    ],
    optionalDependencies: false,
  }],

  // Forbid mutable exports
  'import/no-mutable-exports': 'error',

  /* Module systems */

  // Disallow require()
  'import/no-commonjs': 'off',

  // Disallow AMD require/define
  'import/no-amd': 'error',

  // No Node.js builtin modules
  'import/no-nodejs-modules': 'off',

  /* Style guide */

  // Disallow non-import statements appearing before import statements
  'import/first': 'error',

  // Disallow duplicate imports
  'import/no-duplicates': 'error',

  // Disallow namespace imports
  'import/no-namespace': 'off',

  // Ensure consistent use of file extension within the import path
  'import/extensions': ['error', 'ignorePackages', { js: 'never', mjs: 'never', jsx: 'never' }],

  // Ensure absolute imports are above relative imports and that unassigned imports are ignored
  'import/order': ['error', {
    groups: [['builtin', 'external', 'internal', 'parent', 'sibling', 'index']],
    warnOnUnassignedImports: true,
  }],

  // Require a newline after the last import/require in a group
  'import/newline-after-import': 'error',

  // Require modules with a single export to use a default export
  'import/prefer-default-export': 'error',

  // Restrict which files can be imported in a given folder
  'import/no-restricted-paths': 'off',

  // Forbid modules to have too many dependencies
  'import/max-dependencies': ['off', { max: 10 }],

  // Forbid import of modules using absolute paths
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions
  'import/no-dynamic-require': 'error',

  // Prevent importing the submodules of other modules
  'import/no-internal-modules': 'off',

  // Warn if a module could be mistakenly parsed as a script by a consumer leveraging 
  // Unambiguous JavaScript Grammar
  'import/unambiguous': 'off',

  // Forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 'error',

  // Prevent unassigned imports
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named
  'import/no-named-default': 'error',

  // Reports if a module's default export is unnamed
  'import/no-anonymous-default-export': ['off', {
    allowArray: false,
    allowArrowFunction: false,
    allowAnonymousClass: false,
    allowAnonymousFunction: false,
    allowLiteral: false,
    allowObject: false,
  }],

  // This rule enforces that all exports are declared at the bottom of the file
  'import/exports-last': 'off',

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present in a single file
  'import/group-exports': 'off',

  // Forbid default exports. this is a terrible rule, do not use it
  'import/no-default-export': 'off',

  // Prohibit named exports. this is a terrible rule, do not use it
  'import/no-named-export': 'off',

  // Forbid a module from importing itself
  'import/no-self-import': 'error',

  // Forbid cyclical dependencies between modules
  'import/no-cycle': ['error', { maxDepth: '∞' }],

  // Ensures that there are no useless path segments
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  // Dynamic imports require a leading comment with a webpackChunkName
  'import/dynamic-import-chunkname': ['off', {
    importFunctions: [],
    webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
  }],

  // Use this rule to prevent imports to folders in relative parent paths
  'import/no-relative-parent-imports': 'off',

  // Reports modules without any exports, or with unused exports
  'import/no-unused-modules': ['off', { ignoreExports: [], missingExports: true, unusedExports: true }],

  // Reports the use of import declarations with CommonJS exports in any module except for the main module
  'import/no-import-module-exports': 'error',

  // Use this rule to prevent importing packages through relative paths
  'import/no-relative-packages': 'error',
};
