/**
 * Rules for 'eslint-plugin-vitest'
 */

export default {
  // Forbidden ".spec" test file pattern
  'vitest/consistent-test-filename': 'warn',

  // Prefer test or it but not both
  'vitest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'test' }],

  // Enforce having expectation in test body
  'vitest/expect-expect': 'warn',

  // Enforce a maximum number of expect per test
  'vitest/max-expects': 'off',

  // Nested describe block should be less than set max value or default value
  'vitest/max-nested-describe': 'warn',

  // Disallow alias methods
  'vitest/no-alias-methods': 'warn',

  // Disallow commented out tests
  'vitest/no-commented-out-tests': 'warn',

  // Disallow conditional expects
  'vitest/no-conditional-expect': 'warn',

  // Disallow conditional tests
  'vitest/no-conditional-in-test': 'warn',

  // Disallow conditional tests
  'vitest/no-conditional-tests': 'warn',

  // Disallow disabled tests
  'vitest/no-disabled-tests': 'warn',

  // Disallow using a callback in asynchronous tests and hooks
  'vitest/no-done-callback': 'warn',

  // Disallow duplicate hooks and teardown hooks
  'vitest/no-duplicate-hooks': 'warn',

  // Disallow focused tests
  'vitest/no-focused-tests': 'warn',

  // Disallow setup and teardown hooks
  'vitest/no-hooks': 'off',

  // Disallow identical titles
  'vitest/no-identical-title': 'warn',

  // Disallow string interpolation in snapshots
  'vitest/no-interpolation-in-snapshots': 'warn',

  // Disallow large snapshots
  'vitest/no-large-snapshots': 'warn',

  // Disallow importing from mocks directory
  'vitest/no-mocks-import': 'warn',

  // Disallow the use of certain matchers
  'vitest/no-restricted-matchers': 'warn',

  // Disallow specific vi. methods
  'vitest/no-restricted-vi-methods': 'warn',

  // Disallow using expect outside of it or test blocks
  'vitest/no-standalone-expect': 'warn',

  // Disallow using test as a prefix
  'vitest/no-test-prefixes': 'warn',

  // Disallow return statements in tests
  'vitest/no-test-return-statement': 'warn',

  // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
  'vitest/prefer-called-with': 'warn',

  // Suggest using the built-in comparison matchers
  'vitest/prefer-comparison-matcher': 'warn',

  // Prefer each rather than manual loops
  'vitest/prefer-each': 'warn',

  // Suggest using the built-in quality matchers
  'vitest/prefer-equality-matcher': 'warn',

  // Suggest using expect().resolves over expect(await ...) syntax
  'vitest/prefer-expect-resolves': 'warn',

  // Prefer having hooks in consistent order
  'vitest/prefer-hooks-in-order': 'warn',

  // Suggest having hooks before any test cases
  'vitest/prefer-hooks-on-top': 'warn',

  // Enforce lowercase titles
  'vitest/prefer-lowercase-title': 'warn',

  // Prefer mock resolved/rejected shorthands for promises
  'vitest/prefer-mock-promise-shorthand': 'warn',

  // Prefer including a hint with external snapshots
  'vitest/prefer-snapshot-hint': 'warn',

  // Suggest using vi.spyOn
  'vitest/prefer-spy-on': 'warn',

  // Prefer strict equal over equal
  'vitest/prefer-strict-equal': 'warn',

  // Suggest using toBe()
  'vitest/prefer-to-be': 'warn',

  // Suggest using toBeFalsy()
  'vitest/prefer-to-be-falsy': 'warn',

  // Prefer toBeObject()
  'vitest/prefer-to-be-object': 'warn',

  // Suggest using toBeTruthy
  'vitest/prefer-to-be-truthy': 'warn',

  // Prefer using toContain()
  'vitest/prefer-to-contain': 'warn',

  // Suggest using toHaveLength()
  'vitest/prefer-to-have-length': 'warn',

  // Suggest using test.todo
  'vitest/prefer-todo': 'warn',

  // Require setup and teardown to be within a hook
  'vitest/require-hook': 'warn',

  // Require toThrow() to be called with an error message
  'vitest/require-to-throw-message': 'warn',

  // Enforce that all tests are in a top-level describe
  'vitest/require-top-level-describe': 'warn',

  // Enforce valid describe callback
  'vitest/valid-describe-callback': 'warn',

  // Enforce valid expect() usage
  'vitest/valid-expect': 'warn',

  // Enforce valid titles
  'vitest/valid-title': 'warn',
};
