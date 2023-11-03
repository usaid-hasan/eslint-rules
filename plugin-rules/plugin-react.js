/**
 * Rules for 'eslint-plugin-react'
 */

export default {
  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': ['error', 'prefer-double'],
  
  // Enforce that class methods utilize `this`
  'class-methods-use-this': ['error', {
    exceptMethods: [
      'render',
      'getInitialState',
      'getDefaultProps',
      'getChildContext',
      'componentWillMount',
      'UNSAFE_componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'UNSAFE_componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'UNSAFE_componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'componentDidCatch',
      'getSnapshotBeforeUpdate'
    ],
  }],

  // Prevent missing displayName in a React component definition
  'react/display-name': 'off',

  // Forbid certain propTypes (any, array, object)
  'react/forbid-prop-types': ['error', {
    forbid: ['any', 'array', 'object'],
    checkContextTypes: true,
    checkChildContextTypes: true,
  }],

  // Forbid certain props on DOM Nodes
  'react/forbid-dom-props': 'off',

  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': ['error', 'never'],

  // Validate closing bracket location in JSX
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // Validate closing tag location in JSX
  'react/jsx-closing-tag-location': 'error',

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': ['off', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
  }],

  // Validate props indentation in JSX
  'react/jsx-indent-props': ['error', 2],

  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': ['error', { checkFragmentShorthand: true, warnOnDuplicates: true }],

  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

  // Prevent usage of .bind() in JSX props
  'react/jsx-no-bind': ['error', {
    ignoreRefs: true,
    allowArrowFunctions: true,
    allowFunctions: false,
    allowBind: false,
    ignoreDOMComponents: true,
  }],

  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 'off',

  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 'error',

  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
  
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 'off',

  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 'off',
  
  // Enforce defaultProps declarations alphabetical sorting
  'react/sort-default-props': 'off',

  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 'off',

  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error',

  // Prevent usage of dangerous JSX properties
  'react/no-danger': 'error',

  // Prevent usage of deprecated methods
  'react/no-deprecated': ['error'],

  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 'off',

  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 'error',

  // Prevent usage of setState in componentWillUpdate
  'react/no-will-update-set-state': 'error',

  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 'off',

  // Prevent usage of isMounted
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  'react/no-multi-comp': 'off',

  // Prevent usage of setState
  'react/no-set-state': 'off',

  // Prevent using string references
  'react/no-string-refs': 'error',

  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 'error',

  // Require ES6 class declarations over React.createClass
  'react/prefer-es6-class': ['error', 'always'],

  // Require stateless functions when not using lifecycle methods, setState or ref
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  'react/prop-types': 'off',

  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 'off',

  // Require render() methods to return something
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 'error',

  // Enforce component methods order
  'react/sort-comp': ['error', {
    order: [
      'static-variables',
      'static-methods',
      'instance-variables',
      'lifecycle',
      '/^handle.+$/',
      '/^on.+$/',
      'getters',
      'setters',
      '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
      'instance-methods',
      'everything-else',
      'rendering',
    ],
    groups: {
      lifecycle: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'getDerivedStateFromProps',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentDidCatch',
        'componentWillUnmount'
      ],
      rendering: [
        '/^render.+$/',
        'render'
      ],
    },
  }],

  // Prevent missing parentheses around multilines JSX
  'react/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'ignore',
    logical: 'ignore',
    prop: 'ignore',
  }],

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce spacing around jsx equals signs
  'react/jsx-equals-spacing': ['error', 'never'],

  // Enforce JSX indentation
  'react/jsx-indent': ['error', 2],

  // Disallow target="_blank" on links
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  // Only .jsx files may have JSX
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

  // Prevent accidental JS comments from being injected into JSX as text
  'react/jsx-no-comment-textnodes': 'error',

  // Disallow using React.render/ReactDOM.render's return value
  'react/no-render-return-value': 'error',

  // Require a shouldComponentUpdate method, or PureRenderMixin
  'react/require-optimization': 'off',

  // Warn against using findDOMNode()
  'react/no-find-dom-node': 'error',

  // Forbid certain props on Components
  'react/forbid-component-props': 'off',

  // Forbid certain elements
  'react/forbid-elements': 'off',

  // Prevent problem with children and props.dangerouslySetInnerHTML
  'react/no-danger-with-children': 'error',

  // Prevent unused propType definitions
  'react/no-unused-prop-types': ['error', { customValidators: [], skipShapeProps: true }],

  // Require style prop value be an object or var
  'react/style-prop-object': 'error',

  // Prevent invalid characters from appearing in markup
  'react/no-unescaped-entities': 'error',

  // Prevent passing of children as props
  'react/no-children-prop': 'error',

  // Validate whitespace in and around the JSX opening and closing brackets
  'react/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],

  // Prevent usage of Array index in keys
  'react/no-array-index-key': 'error',

  // Enforce a defaultProps definition for every prop that is not a required prop
  'react/require-default-props': ['error', { forbidDefaultForRequired: true }],

  // Forbids using non-exported propTypes
  'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

  // Prevent void DOM elements from receiving children
  'react/void-dom-elements-no-children': 'error',

  // Enforce all defaultProps have a corresponding non-required PropType
  'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  'react/no-redundant-should-component-update': 'error',

  // Prevent unused state values
  'react/no-unused-state': 'error',

  // Enforces consistent naming for boolean props
  'react/boolean-prop-naming': ['off', {
    propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
    rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
    message: '',
  }],

  // Prevents common casing typos
  'react/no-typos': 'error',

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

  // One JSX Element Per Line
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

  // Enforce consistent usage of destructuring assignment of props, state, and context
  'react/destructuring-assignment': ['error', 'always'],

  // Prevent using this.state within a this.setState
  'react/no-access-state-in-setstate': 'error',

  // Prevent usage of button elements without an explicit type attribute
  'react/button-has-type': ['error', {
    button: true,
    submit: true,
    reset: false,
  }],

  // Ensures inline tags are not rendered without spaces between them
  'react/jsx-child-element-spacing': 'off',

  // Prevent this from being used in stateless functional components
  'react/no-this-in-sfc': 'error',

  // Validate JSX maximum depth
  'react/jsx-max-depth': 'off',

  // Disallow multiple spaces between inline JSX props
  'react/jsx-props-no-multi-spaces': 'error',

  // Prevent usage of UNSAFE_ methods
  'react/no-unsafe': 'off',

  // Enforce shorthand or standard form for React fragments
  'react/jsx-fragments': ['error', 'syntax'],

  // Enforce linebreaks in curly braces in JSX attributes and expressions
  'react/jsx-curly-newline': ['error', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],

  // Enforce state initialization style
  'react/state-in-constructor': ['error', 'never'],

  // Enforces where React component static properties should be positioned
  'react/static-property-placement': ['error', 'static public field'],

  // Disallow JSX props spreading
  'react/jsx-props-no-spreading': ['error', {
    html: 'enforce',
    custom: 'enforce',
    explicitSpread: 'ignore',
  }],

  // Enforce that props are read-only
  'react/prefer-read-only-props': 'off',

  // Prevent usage of `javascript:` URLs
  'react/jsx-no-script-url': ['error', [
    { name: 'Link', props: ['to'] },
    { name: 'NavLink', props: ['to'] },
  ]],

  // Disallow unnecessary fragments
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

  // Prevent adjacent inline elements not separated by whitespace
  'react/no-adjacent-inline-elements': 'off',

  // Enforce a specific function type for function components
  'react/function-component-definition': ['error', {
    namedComponents: ['function-declaration', 'function-expression'],
    unnamedComponents: 'function-expression',
  }],

  // Enforce a new line after jsx elements and expressions
  'react/jsx-newline': 'off',

  // Prevent react contexts from taking non-stable values
  'react/jsx-no-constructed-context-values': 'error',

  // Prevent creating unstable components inside components
  'react/no-unstable-nested-components': 'error',

  // Enforce that namespaces are not used in React elements
  'react/no-namespace': 'error',

  // Prefer exact proptype definitions
  'react/prefer-exact-props': 'error',

  // Lifecycle methods should be methods on the prototype, not class fields
  'react/no-arrow-function-lifecycle': 'error',

  // Prevent usage of invalid attributes
  'react/no-invalid-html-attribute': 'error',

  // Prevent declaring unused methods of component class
  'react/no-unused-class-component-methods': 'error',
}
