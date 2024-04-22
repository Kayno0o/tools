import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu({
  typescript: true,
  vue: true,
  formatters: {
    css: true,
  },
  plugins: {
    tailwindcss,
  },
  rules: {
    'node/prefer-global/process': 'off',

    'vue/max-attributes-per-line': ['error', { singleline: { max: 3 }, multiline: { max: 1 } }],

    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],

    // stylistic
    'ts/adjacent-overload-signatures': 'error',
    'ts/array-type': 'error',
    'ts/ban-tslint-comment': 'error',
    'ts/class-literal-property-style': 'error',
    'ts/consistent-generic-constructors': 'error',
    'ts/consistent-indexed-object-style': 'error',
    'ts/consistent-type-definitions': 'error',
    'ts/no-confusing-non-null-assertion': 'error',
    'no-empty-function': 'off',
    'ts/no-empty-function': 'error',
    'ts/no-empty-interface': 'off',
    'ts/no-inferrable-types': 'error',
    'ts/prefer-for-of': 'error',
    'ts/prefer-function-type': 'error',
    'ts/prefer-namespace-keyword': 'error',

    // tailwind
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
  },
})
