module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'vue/no-setup-props-destructure': 'off',
    'vue/require-prop-types': 'off'
  },
  globals: {
    uni: true,
    wx: true
  }
}
