# eslint-rules

Rules for eslint and some of its popular plugins.

## Installation

```sh
npm install --save-dev usaid-hasan/eslint-rules#semver:^0.0.1
```

## Setup

```javascript
/* eslint.config.js */
import reactPlugin from 'eslint-plugin-react';
import * as eslintRules from 'eslint-rules';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist/**/*.js'],
    plugins: {
      'react': reactPlugin,
    },
    rules: {
      ...eslintRules.default,
      ...eslintRules.reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      'react': { version: 'detect' },
    },
  }
];
```
