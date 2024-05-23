module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-import', 'eslint-plugin-react', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', 'craco.config.ts'],
  rules: {
    // '@typescript-eslint/indent': 'off', /* TBD */
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unused-vars': [
      //  FIXME: change to error
      // 'error',
      'warn',
      {
        vars: 'local',
        ignoreRestSiblings: true,
        varsIgnorePattern: '_',
      },
    ],

    eqeqeq: ['error', 'smart'],
    // "id-match": "error", /* TBD */
    'id-blacklist': 'off' /* TBD */,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-array-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-underscore-dangle': 'error',
    'no-var': 'error',
    'no-else-return': 'error',
    'no-new-func': 'error',
    'no-plusplus': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    // 'prefer-template': 'error', /* TBD */
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: ['error', 'as-needed'],

    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'error',
    'react/display-name': 'off' /* TBD */,
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    // "import/prefer-default-export": "off",   /* TBD */
    /* TBD */
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
};
