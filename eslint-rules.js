export default {
  /* Possible Problems */

  // Enforce return statements in callbacks of array methods
  'array-callback-return': ['error', { allowImplicit: true }],
  // Require `super()` calls in constructors
  'constructor-super': 'error',
  // Enforce `for` loop update clause moving the counter in the right direction
  'for-direction': 'error',
  // Enforce `return` statements in getters
  'getter-return': ['error', { allowImplicit: true }],
  // Disallow using an async function as a Promise executor
  'no-async-promise-executor': 'error',
  // Disallow `await` inside of loops
  'no-await-in-loop': 'error',
  // Disallow reassigning class members
  'no-class-assign': 'error',
  // Disallow comparisons to negative zero
  'no-compare-neg-zero': 'error',
  // Disallow assignment operators in conditional expressions
  'no-cond-assign': ['error', 'always'],
  // Disallow reassigning `const` variables
  'no-const-assign': 'error',
  // Disallow expressions where the operation doesn't affect the value
  'no-constant-binary-expression': 'error',
  // Disallow constant expressions in conditions
  'no-constant-condition': 'warn',
  // Disallow returning value from constructor
  'no-constructor-return': 'error',
  // Disallow control characters in regular expressions
  'no-control-regex': 'error',
  // Disallow use of `debugger`
  'no-debugger': 'warn',
  // Disallow duplicate arguments in functions
  'no-dupe-args': 'error',
  // Disallow duplicate class members
  'no-dupe-class-members': 'error',
  // Disallow duplicate conditions in if-else-if chains
  'no-dupe-else-if': 'error',
  // Disallow duplicate keys in object literals
  'no-dupe-keys': 'error',
  // Disallow duplicate case label
  'no-duplicate-case': 'error',
  // Disallow importing from the same path more than once (replaced by import/no-duplicates plugin-import)
  'no-duplicate-imports': 'off',
  // Disallow empty character classes in regular expressions
  'no-empty-character-class': 'error',
  // Disallow empty destructuring patterns
  'no-empty-pattern': 'error',
  // Disallow reassigning exceptions in `catch` clauses
  'no-ex-assign': 'error',
  // Disallow fallthrough of `case` statements
  'no-fallthrough': 'error',
  // Disallow reassigning `function` declarations
  'no-func-assign': 'error',
  // Disallow assigning to imported bindings
  'no-import-assign': 'error',
  // Disallow variable or `function` declarations in nested block
  'no-inner-declarations': 'error',
  // Disallow invalid regular expression strings in the `RegExp` constructor
  'no-invalid-regexp': 'error',
  // Disallow irregular whitespace
  'no-irregular-whitespace': 'error',
  // Disallow literal numbers that lose precision
  'no-loss-of-precision': 'error',
  // Disallow characters which are made with multiple code points in character class syntax
  'no-misleading-character-class': 'error',
  // Disallow `new` operators with global non-constructor functions
  'no-new-native-nonconstructor': 'error',
  // Disallow `new` operators with the `Symbol` object
  'no-new-symbol': 'error',
  // Disallow calling global object properties as functions
  'no-obj-calls': 'error',
  // Disallow returning values from Promise executor functions
  'no-promise-executor-return': 'error',
  // Disallow calling some `Object.prototype` methods directly on objects
  'no-prototype-builtins': 'error',
  // Disallow assignments where both sides are exactly the same
  'no-self-assign': ['error', { props: true }],
  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 'error',
  // Disallow returning values from setters
  'no-setter-return': 'error',
  // Disallow sparse arrays
  'no-sparse-arrays': 'error',
  // Disallow template literal placeholder syntax in regular strings
  'no-template-curly-in-string': 'error',
  // Disallow `this`/`super` before calling `super()` in constructors
  'no-this-before-super': 'error',
  // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
  'no-undef': 'error',
  // Disallow confusing multiline expressions
  'no-unexpected-multiline': 'error',
  // Disallow unmodified loop conditions
  'no-unmodified-loop-condition': 'error',
  // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  'no-unreachable': 'error',
  // Disallow loops with a body that allows only one iteration
  'no-unreachable-loop': ['error', { ignore: [/*WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement*/] }],
  // Disallow control flow statements in `finally` blocks
  'no-unsafe-finally': 'error',
  // Disallow negating the left operand of relational operators
  'no-unsafe-negation': 'error',
  // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
  // Disallow unused private class members
  'no-unused-private-class-members': 'error',
  // Disallow unused variables
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  // Disallow use of variables before they are defined
  'no-use-before-define': ['error', 'nofunc'],
  // Disallow useless backreferences in regular expressions
  'no-useless-backreference': 'error',
  // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
  'require-atomic-updates': 'error',
  // Require calls to `isNaN()` when checking for `NaN`
  'use-isnan': 'error',
  // Enforce comparing `typeof` expressions against valid strings
  'valid-typeof': ['error', { requireStringLiterals: true }],

  /* Suggestions */

  // Enforce getter and setter pairs in objects and classes
  'accessor-pairs': 'warn',
  // Require braces around arrow function bodies
  'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
  // Enforce the use of variables within the scope they are defined
  'block-scoped-var': 'warn',
  // Enforce camelcase naming convention
  'camelcase': 'warn',
  // Enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': ['warn', 'always', {
    line: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
    block: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  }],
  // Enforce that class methods utilize `this`
  'class-methods-use-this': 'warn',
  // Enforce a maximum cyclomatic complexity allowed in a program
  'complexity': ['warn', 20],
  // Require `return` statements to either always or never specify values
  'consistent-return': 'error',
  // Enforce consistent naming when capturing the current execution context
  'consistent-this': ['error', 'that'],
  // Enforce consistent brace style for all control statements
  'curly': ['warn', 'multi-line', 'consistent'],
  // Require `default` cases in `switch` statements
  'default-case': 'error',
  // Enforce default clauses in switch statements to be last
  'default-case-last': 'error',
  // Enforce default parameters to be last
  'default-param-last': 'error',
  // Enforce dot notation whenever possible
  'dot-notation': ['warn', { allowKeywords: true }],
  // Require the use of `===` and `!==`
  'eqeqeq': ['error', 'always', { null: 'always' }],
  // Require function names to match the name of the variable or property to which they are assigned
  'func-name-matching': ['warn', 'always', {
    includeCommonJSModuleExports: false,
    considerPropertyDescriptor: true,
  }],
  // Require or disallow named `function` expressions
  'func-names': ['warn', 'as-needed'],
  // Enforce the consistent use of either `function` declarations or expressions
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
  // Require grouped accessor pairs in object literals and classes
  'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
  // Require `for-in` loops to include an `if` statement
  'guard-for-in': 'error',
  // Disallow specified identifiers
  'id-denylist': 'off',
  // Enforce minimum and maximum identifier lengths
  'id-length': ['off', {
    min: 2,
    max: 25,
    properties: 'never',
    exceptions: ['e']
  }],
  // Require identifiers to match a specified regular expression
  'id-match': ['off', '^[a-z]+([A-Z][a-z]+)*$', {
    properties: false,
    classFields: true,
    onlyDeclarations: true,
    ignoreDestructuring: false
  }],
  // Require or disallow initialization in variable declarations
  'init-declarations': 'off',
  // Require or disallow logical assignment operator shorthand
  'logical-assignment-operators': ['warn', 'always', { enforceForIfStatements: true }],
  // Enforce a maximum number of classes per file
  'max-classes-per-file': ['warn', 1],
  // Enforce a maximum depth that blocks can be nested
  'max-depth': ['warn', 4],
  // Enforce a maximum number of lines per file
  'max-lines': ['off', {
    max: 300,
    skipBlankLines: true,
    skipComments: true
  }],
  // Enforce a maximum number of lines of code in a function
  'max-lines-per-function': ['off', {
    max: 100,
    skipBlankLines: true,
    skipComments: true,
    IIFEs: true,
  }],
  // Enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': ['warn', 5],
  // Enforce a maximum number of parameters in function definitions
  'max-params': ['warn', 5],
  // Enforce a maximum number of statements allowed in function blocks
  'max-statements': ['off', 30],
  // Enforce a particular style for multiline comments
  'multiline-comment-style': ['warn', 'bare-block'],
  // Require constructor names to begin with a capital letter
  'new-cap': ['warn', { newIsCap: true, capIsNew: true, properties: true }],
  // Disallow the use of `alert`, `confirm`, and `prompt`
  'no-alert': 'warn',
  // Disallow `Array` constructors
  'no-array-constructor': 'error',
  // Disallow bitwise operators
  'no-bitwise': 'error',
  // Disallow the use of `arguments.caller` or `arguments.callee`
  'no-caller': 'error',
  // Disallow lexical declarations in case clauses
  'no-case-declarations': 'error',
  // Disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': ['warn', { allowParens: true, onlyOneSimpleParam: true }],
  // Disallow the use of `console`
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  // Disallow `continue` statements
  'no-continue': 'warn',
  // Disallow deleting variables
  'no-delete-var': 'error',
  // Disallow equal signs explicitly at the beginning of regular expressions
  'no-div-regex': 'warn',
  // Disallow `else` blocks after `return` statements in `if` statements
  'no-else-return': ['warn', { allowElseIf: false }],
  // Disallow empty block statements
  'no-empty': 'warn',
  // Disallow empty functions
  'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
  // Disallow empty static blocks
  'no-empty-static-block': 'warn',
  // Disallow `null` comparisons without type-checking operators
  'no-eq-null': 'error',
  // Disallow the use of `eval()`
  'no-eval': 'error',
  // Disallow extending native types
  'no-extend-native': 'error',
  // Disallow unnecessary calls to `.bind()`
  'no-extra-bind': 'error',
  // Disallow unnecessary boolean casts
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
  // Disallow unnecessary labels
  'no-extra-label': 'error',
  // Disallow unnecessary semicolons
  'no-extra-semi': 'warn',
  // Disallow leading or trailing decimal points in numeric literals
  'no-floating-decimal': 'warn',
  // Disallow assignments to native objects or read-only global variables
  'no-global-assign': ['error', { exceptions: [] }],
  // Disallow shorthand type conversions
  'no-implicit-coercion': ['warn', {
    boolean: false,
    number: true,
    string: true,
    disallowTemplateShorthand: true,
    allow: [],
  }],
  // Disallow declarations in the global scope
  'no-implicit-globals': 'warn',
  // Disallow the use of `eval()`-like methods
  'no-implied-eval': 'error',
  // Disallow inline comments after code
  'no-inline-comments': 'warn',
  // Disallow use of `this` in contexts where the value of `this` is `undefined`
  'no-invalid-this': 'warn',
  // Disallow the use of the `__iterator__` property
  'no-iterator': 'error',
  // Disallow labels that share a name with a variable
  'no-label-var': 'error',
  // Disallow labeled statements
  'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
  // Disallow unnecessary nested blocks
  'no-lone-blocks': 'warn',
  // Disallow `if` statements as the only statement in `else` blocks
  'no-lonely-if': 'warn',
  // Disallow function declarations that contain unsafe references inside loop statements
  'no-loop-func': 'error',
  // Disallow magic numbers
  'no-magic-numbers': ['warn', {
    ignore: [0, 1, -1],
    ignoreArrayIndexes: true,
    ignoreDefaultValues: true,
    ignoreClassFieldInitialValues: false,
    enforceConst: true,
    detectObjects: false,
  }],
  // Disallow mixed binary operators
  'no-mixed-operators': ['error', { allowSamePrecedence: false }],
  // Disallow use of chained assignment expressions
  'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
  // Disallow multiline strings
  'no-multi-str': 'error',
  // Disallow negated conditions
  'no-negated-condition': 'error',
  // Disallow nested ternary expressions
  'no-nested-ternary': 'error',
  // Disallow `new` operators outside of assignments or comparisons
  'no-new': 'warn',
  // Disallow `new` operators with the `Function` object
  'no-new-func': 'error',
  // Disallow `Object` constructors
  'no-new-object': 'warn',
  // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  'no-new-wrappers': 'warn',
  // Disallow `\8` and `\9` escape sequences in string literals
  'no-nonoctal-decimal-escape': 'error',
  // Disallow octal literals
  'no-octal': 'error',
  // Disallow octal escape sequences in string literals
  'no-octal-escape': 'error',
  // Disallow reassigning `function` parameters
  'no-param-reassign': ['error', {
    props: true,
    ignorePropertyModificationsForRegex: ['[rR]ef$'], // for *Ref.current
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'e', // for e.returnvalue
      'ctx', // for Koa routing
      'context', // for Koa routing
      'req', // for Express requests
      'request', // for Express requests
      'res', // for Express responses
      'response', // for Express responses
    ]
  }],
  // Disallow the unary operators `++` and `--`
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  // Disallow the use of the `__proto__` property
  'no-proto': 'error',
  // Disallow variable redeclaration
  'no-redeclare': ['error', { builtinGlobals: true }],
  // Disallow multiple spaces in regular expressions
  'no-regex-spaces': 'error',
  // Disallow specified names in exports (plugin-import)
  'no-restricted-exports': ['error', {
    restrictedNamedExports: [
      'default', // use `export default` to provide a default export
      'then',    // will cause confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
    ],
  }],
  // Disallow specified global variables
  'no-restricted-globals': ['error', 'event'],
  // Disallow specified modules when loaded by `import` (plugin-import)
  'no-restricted-imports': ['off', { paths: [], patterns: [] }],
  // Disallow certain properties on certain objects
  'no-restricted-properties': ['error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }
  ],
  // Disallow specified syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  // Disallow assignment operators in `return` statements
  'no-return-assign': ['error', 'always'],
  // Disallow `javascript:` urls
  'no-script-url': 'error',
  // Disallow comma operators
  'no-sequences': ['error', { allowInParentheses: true }],
  // Disallow variable declarations from shadowing variables declared in the outer scope
  'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', ignoreOnInitialization: true }],
  // Disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 'error',
  // Disallow ternary operators
  'no-ternary': 'off',
  // Disallow throwing literals as exceptions
  'no-throw-literal': 'error',
  // Disallow initializing variables to `undefined`
  'no-undef-init': 'error',
  // Disallow the use of `undefined` as an identifier
  'no-undefined': 'error',
  // Disallow dangling underscores in identifiers
  'no-underscore-dangle': ['error', {
    allowAfterThis: false,
    allowAfterSuper: false,
    allowAfterThisConstructor: false,
    enforceInMethodNames: true,
    enforceInClassFields: true,
    allowInArrayDestructuring: true,
    allowInObjectDestructuring: true,
    allowFunctionParams: true,
  }],
  // Disallow ternary operators when simpler alternatives exist (also, prefer `a || b` over `a ? a : b`)
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  // Disallow unused expressions
  'no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTernary: false,
    allowTaggedTemplates: false,
    enforceForJSX: true
  }],
  // Disallow unused labels
  'no-unused-labels': 'error',
  // Disallow unnecessary calls to `.call()` and `.apply()`
  'no-useless-call': 'error',
  // Disallow unnecessary `catch` clauses
  'no-useless-catch': 'error',
  // Disallow unnecessary computed property keys in objects and classes
  'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
  // Disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 'error',
  // Disallow unnecessary constructors
  'no-useless-constructor': 'error',
  // Disallow unnecessary escape characters
  'no-useless-escape': 'error',
  // Disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': ['error', {
    ignoreDestructuring: false,
    ignoreImport: false,
    ignoreExport: false,
  }],
  // Disallow redundant return statements
  'no-useless-return': 'error',
  // Require `let` or `const` instead of `var`
  'no-var': 'error',
  // Disallow `void` operators
  'no-void': ['error', { allowAsStatement: false }],
  // Disallow specified warning terms in comments
  'no-warning-comments': 'error',
  // Disallow `with` statements
  'no-with': 'error',
  // Require or disallow method and property shorthand syntax for object literals
  'object-shorthand': ['error', 'always', {
    avoidQuotes: true,
    avoidExplicitReturnArrows: false,
    ignoreConstructors: false,
  }],
  // Enforce variables to be declared either together or separately in functions
  'one-var': ['off', 'consecutive'],
  // Require or disallow newlines around variable declarations
  'one-var-declaration-per-line': ['error', 'initializations'],
  // Require or disallow assignment operator shorthand where possible
  'operator-assignment': ['error', 'always'],
  // Require using arrow functions for callbacks
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: true,
    allowUnboundThis: true,
  }],
  // Require `const` declarations for variables that are never reassigned after declared
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: true,
  }],
  // Require destructuring from arrays and/or objects
  'prefer-destructuring': ['error', {
    VariableDeclarator: { array: false, object: true },
    AssignmentExpression: { array: true, object: false },
  }, { enforceForRenamedProperties: true }],
  // Disallow the use of `Math.pow` in favor of the `**` operator
  'prefer-exponentiation-operator': 'error',
  // Enforce using named capture group in regular expression
  'prefer-named-capture-group': 'error',
  // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
  'prefer-numeric-literals': 'error',
  // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
  'prefer-object-has-own': 'error',
  // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
  'prefer-object-spread': 'error',
  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  // Disallow use of the `RegExp` constructor in favor of regular expression literals
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  // Require rest parameters instead of `arguments`
  'prefer-rest-params': 'error',
  // Require spread operators instead of `.apply()`
  'prefer-spread': 'error',
  // Require template literals instead of string concatenation
  'prefer-template': 'error',
  // Require quotes around object literal property names
  'quote-props': ['error', 'consistent-as-needed', { keywords: false }],
  // Enforce the consistent use of the radix argument when using `parseInt()`
  'radix': 'error',
  // Disallow async functions which have no `await` expression
  'require-await': 'error',
  // Enforce the use of `u` or `v` flag on RegExp
  'require-unicode-regexp': 'off',
  // Require generator functions to contain `yield`
  'require-yield': 'error',
  // Enforce sorted import declarations within modules
  'sort-imports': ['off', {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    allowSeparatedGroups: true
  }],
  // Require object keys to be sorted
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: false, allowLineSeparatedGroups: false }],
  // Require variables within the same declaration block to be sorted
  'sort-vars': ['off', { ignoreCase: true }],
  // Enforce consistent spacing after the `//` or `/*` in a comment
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['*', '-'],
      markers: ['/'],
    },
    block: {
      exceptions: ['*', '-'],
      markers: [],
      balanced: true,
    }
  }],
  // Require or disallow strict mode directives
  'strict': ['error', 'never'],
  // Require symbol descriptions
  'symbol-description': 'error',
  // Require `var` declarations be placed at the top of their containing scope
  'vars-on-top': 'error',
  // Require or disallow "Yoda" conditions
  'yoda': ['error', 'never', { exceptRange: true }],

  /* Layout and Formatting */

  // Enforce linebreaks after opening and before closing array brackets
  'array-bracket-newline': ['error', 'consistent'],
  // Enforce consistent spacing inside array brackets
  'array-bracket-spacing': ['error', 'never'],
  // Enforce line breaks after each array element
  'array-element-newline': ['error', 'consistent'],
  // Require parentheses around arrow function arguments
  'arrow-parens': ['error', 'always'],
  // Enforce consistent spacing before and after the arrow in arrow functions
  'arrow-spacing': ['error', { before: true, after: true }],
  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  'block-spacing': ['error', 'always'],
  // Enforce consistent brace style for blocks
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  // Require or disallow trailing commas
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],
  // Enforce consistent spacing before and after commas
  'comma-spacing': ['error', { before: false, after: true }],
  // Enforce consistent comma style
  'comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    }
  }],
  // Enforce consistent spacing inside computed property brackets
  'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  // Enforce consistent newlines before and after dots
  'dot-location': ['error', 'property'],
  // Require or disallow newline at the end of files
  'eol-last': ['error', 'always'],
  // Require or disallow spacing between function identifiers and their invocations
  'func-call-spacing': ['error', 'never'],
  // Enforce line breaks between arguments of a function call
  'function-call-argument-newline': ['error', 'consistent'],
  // Enforce consistent line breaks inside function parentheses
  'function-paren-newline': ['error', 'multiline-arguments'],
  // Enforce consistent spacing around `*` operators in generator functions
  'generator-star-spacing': ['error', 'after'],
  // Enforce the location of arrow function bodies
  'implicit-arrow-linebreak': ['error', 'beside'],
  // Enforce consistent indentation
  'indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 'first',
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 'first', body: 1 },
    FunctionExpression: { parameters: 'first', body: 1 },
    StaticBlock: { body: 1 },
    CallExpression: { arguments: 'first' },
    ArrayExpression: 'first',
    ObjectExpression: 'first',
    ImportDeclaration: 'first',
    flatTernaryExpressions: false,
    offsetTernaryExpressions: false,
    ignoreComments: false,
    // TODO: list derived from https://github.com/benjamn/ast-types/blob/6e4d91213c27b6ba76a747c45200aa0e8498b176/src/def/jsx.ts
    ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
  }],
  // Enforce the consistent use of either double or single quotes in JSX attributes
  'jsx-quotes': ['error', 'prefer-double'],
  // Enforce consistent spacing between keys and values in object literal properties
  'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  // Enforce consistent spacing before and after keywords
  'keyword-spacing': ['error', { before: true, after: true }],
  // Enforce position of line comments
  'line-comment-position': ['error', {
    position: 'above',
    ignorePattern: '',
    applyDefaultPatterns: true,
  }],
  // Enforce consistent linebreak style
  'linebreak-style': ['error', 'unix'],
  // Require empty lines around comments
  'lines-around-comment': ['error', { afterHashbangComment: true, beforeBlockComment: true, allowBlockStart: true }],
  // Require or disallow an empty line between class members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  // Enforce a maximum line length
  'max-len': ['error', {
    code: 120,
    tabWidth: 2,
    comments: 120,
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  // Enforce a maximum number of statements allowed per line
  'max-statements-per-line': ['error', { max: 2 }],
  // Enforce newlines between operands of ternary expressions
  'multiline-ternary': ['error', 'always-multiline'],
  // Enforce or disallow parentheses when invoking a constructor with no arguments
  'new-parens': 'error',
  // Require a newline after each call in a method chain
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],
  // Disallow unnecessary parentheses
  'no-extra-parens': ['error', 'all', {
    returnAssign: false,
    conditionalAssign: false,
    nestedBinaryExpressions: false,
    enforceForArrowConditionals: false,
    enforceForSequenceExpressions: false,
    enforceForNewInMemberExpressions: false,
    enforceForFunctionPrototypeMethods: false,
    ternaryOperandBinaryExpressions: false,
    ignoreJSX: 'all', // delegate to eslint-plugin-react
  }],
  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'error',
  // Disallow multiple spaces
  'no-multi-spaces': ['error', { ignoreEOLComments: false }],
  // Disallow multiple empty lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  // Disallow all tabs
  'no-tabs': 'error',
  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
  // Disallow whitespace before properties
  'no-whitespace-before-property': 'error',
  // Enforce the location of single-line statements
  'nonblock-statement-body-position': ['error', 'beside'],
  // Enforce consistent line breaks after opening and before closing braces
  'object-curly-newline': ['off', {
    ObjectPattern: { minProperties: 8, multiline: true, consistent: true },
    ObjectExpression: { minProperties: 8, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
  }],
  // Enforce consistent spacing inside braces
  'object-curly-spacing': ['error', 'always'],
  // Enforce placing object properties on separate lines
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  // Enforce consistent linebreak style for operators
  'operator-linebreak': ['error', 'before', { overrides: { '?': 'after', ':': 'ignore', '&&': 'ignore', '||': 'ignore' } }],
  // Require or disallow padding within blocks
  'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }, { allowSingleLineBlocks: true }],
  // Require or disallow padding lines between statements
  'padding-line-between-statements': 'off',
  // Enforce the consistent use of either backticks, double, or single quotes
  'quotes': ['error', 'single', { avoidEscape: true }],
  // Enforce spacing between rest and spread operators and their expressions
  'rest-spread-spacing': ['error', 'never'],
  // Require or disallow semicolons instead of ASI
  'semi': ['error', 'always'],
  // Enforce consistent spacing before and after semicolons
  'semi-spacing': ['error', { before: false, after: true }],
  // Enforce location of semicolons
  'semi-style': ['error', 'last'],
  // Enforce consistent spacing before blocks
  'space-before-blocks': ['error', 'always'],
  // Enforce consistent spacing before `function` definition opening parenthesis
  'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  // Enforce consistent spacing inside parentheses
  'space-in-parens': ['error', 'never'],
  // Require spacing around infix operators
  'space-infix-ops': 'error',
  // Enforce consistent spacing before or after unary operators
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  // Enforce spacing around colons of switch statements
  'switch-colon-spacing': ['error', { after: true, before: false }],
  // Require or disallow spacing around embedded expressions of template strings
  'template-curly-spacing': ['error', 'never'],
  // Require or disallow spacing between template tags and their literals
  'template-tag-spacing': ['error', 'never'],
  // Require or disallow Unicode byte order mark (BOM)
  'unicode-bom': ['error', 'never'],
  // Require parentheses around immediate `function` invocations
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
  // Require parenthesis around regex literals
  'wrap-regex': 'error',
  // Require or disallow spacing around the `*` in `yield*` expressions
  'yield-star-spacing': ['error', 'after'],
};
