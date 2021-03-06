
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control' : 'off',
    'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'no-console': ["error", { allow: ["warn", "error"] }],
    'react/static-property-placement': 'off',
    'no-underscore-dangle': 'off',
  },
};
