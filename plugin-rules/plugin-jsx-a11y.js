/**
 * Rules for 'eslint-plugin-jsx-a11y'
 */

export default {
  // Enforce that all elements that require alternative text have meaningful information
  'jsx-a11y/alt-text': ['error', {
    elements: ['img', 'object', 'area', 'input[type="image"]'],
    'img': [],
    'object': [],
    'area': [],
    'input[type="image"]': [],
  }],

  // Enforce that anchors have content
  'jsx-a11y/anchor-has-content': ['error', { components: ['Link', 'NavLink'] }],

  // Ensure <a> tags are valid
  'jsx-a11y/anchor-is-valid': ['error', {
    components: ['Link', 'NavLink'],
    specialLink: ['to'],
    aspects: ['noHref', 'invalidHref', 'preferButton'],
  }],

  // Elements with aria-activedescendant must be tabbable
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

  // Enforce all aria-* props are valid
  'jsx-a11y/aria-props': 'error',

  // Enforce ARIA state and property values are valid
  'jsx-a11y/aria-proptypes': 'error',

  // Require ARIA roles to be valid and non-abstract
  'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],

  // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
  'jsx-a11y/aria-unsupported-elements': 'error',

  // Ensure the autocomplete attribute is correct and suitable for the form field it is used with
  'jsx-a11y/autocomplete-valid': 'error',

  // Require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
  'jsx-a11y/click-events-have-key-events': 'error',

  // Enforce that a control (an interactive element) has a text label
  'jsx-a11y/control-has-associated-label': ['error', {
    labelAttributes: ['label'],
    controlComponents: [],
    ignoreElements: [
      'audio',
      'canvas',
      'embed',
      'input',
      'textarea',
      'tr',
      'video',
    ],
    ignoreRoles: [
      'grid',
      'listbox',
      'menu',
      'menubar',
      'radiogroup',
      'row',
      'tablist',
      'toolbar',
      'tree',
      'treegrid',
    ],
    depth: 5,
  }],

  // Ensure <hX> tags have content and are not aria-hidden
  'jsx-a11y/heading-has-content': 'error',

  // Require HTML elements to have a "lang" prop
  'jsx-a11y/html-has-lang': 'error',

  // Ensure iframe elements have a unique title
  'jsx-a11y/iframe-has-title': 'error',

  // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
  'jsx-a11y/img-redundant-alt': 'error',

  // Elements with an interactive role and interaction handlers must be focusable
  'jsx-a11y/interactive-supports-focus': 'error',

  // Enforce that a label tag has a text label and an associated control
  'jsx-a11y/label-has-associated-control': ['error', {
    labelComponents: [],
    labelAttributes: [],
    controlComponents: [],
    assert: 'either',
    depth: 10,
  }],

  // Require HTML element's lang prop to be valid
  'jsx-a11y/lang': 'error',

  // Media elements must have captions
  'jsx-a11y/media-has-caption': 'error',

  // Require that mouseover/out come with focus/blur, for keyboard-only users
  'jsx-a11y/mouse-events-have-key-events': 'error',

  // Prevent use of `accessKey`
  'jsx-a11y/no-access-key': 'error',

  // Prohibit autoFocus prop
  'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

  // Prevent distracting elements, like <marquee> and <blink>
  'jsx-a11y/no-distracting-elements': ['error', { elements: ['marquee', 'blink'] }],

  // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
  'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', { tr: ['none', 'presentation'] }],

  // A non-interactive element does not support event handlers (mouse and key handlers)
  'jsx-a11y/no-noninteractive-element-interactions': ['error', {
    handlers: [
      'onClick',
      'onMouseDown',
      'onMouseUp',
      'onKeyPress',
      'onKeyDown',
      'onKeyUp',
    ]
  }],

  // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
  'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
    ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
    table: ['grid'],
    td: ['gridcell'],
  }],

  // Tab key navigation should be limited to elements on the page that can be interacted with
  'jsx-a11y/no-noninteractive-tabindex': ['error', {
    tags: [],
    roles: ['tabpanel'],
  }],

  // Ensure HTML elements do not specify redundant ARIA roles
  'jsx-a11y/no-redundant-roles': 'error',

  // Enforce that DOM elements without semantic behavior not have interaction handlers
  'jsx-a11y/no-static-element-interactions': ['error', {
    handlers: [
      'onClick',
      'onMouseDown',
      'onMouseUp',
      'onKeyPress',
      'onKeyDown',
      'onKeyUp',
    ]
  }],

  // Enforce that elements with ARIA roles must have all required attributes for that role
  'jsx-a11y/role-has-required-aria-props': 'error',

  // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
  'jsx-a11y/role-supports-aria-props': 'error',

  // Only allow <th> to have the "scope" attr
  'jsx-a11y/scope': 'error',

  // Enforce tabIndex value is not greater than zero
  'jsx-a11y/tabindex-no-positive': 'error',
};
