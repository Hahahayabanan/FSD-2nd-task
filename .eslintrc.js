module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["eslint-plugin-prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style':'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'class-methods-use-this': 'off',
    'no-new': 'off',
    'no-underscore-dangle': 'off',
    "comma-dangle": ["error", "always"],
  }
};
