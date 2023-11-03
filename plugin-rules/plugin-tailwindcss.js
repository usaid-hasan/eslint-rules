/**
 * Rules for 'eslint-plugin-tailwindcss'
 */

export default {
  // Enforces a consistent order of the Tailwind CSS classnames and its variants
  'tailwindcss/classnames-order': 'warn',

  // Warns about "-" prefixed classnames using arbitrary values
  'tailwindcss/enforces-negative-arbitrary-values': 'warn',

  // Replaces multiple Tailwind CSS classnames by their shorthand
  'tailwindcss/enforces-shorthand': 'warn',

  // Detect obsolete classnames when upgrading to Tailwind CSS v3
  'tailwindcss/migration-from-tailwind-2': 'warn',

  // Forbid using arbitrary values in classnames
  'tailwindcss/no-arbitrary-value': 'off',

  // Avoid contradicting Tailwind CSS classnames
  'tailwindcss/no-contradicting-classname': 'warn',

  // Detect classnames which do not belong to Tailwind CSS
  'tailwindcss/no-custom-classname': 'warn',
}
