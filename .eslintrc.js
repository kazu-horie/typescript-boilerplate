module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
