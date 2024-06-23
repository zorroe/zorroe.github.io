import antfu from '@antfu/eslint-config'
import format from 'eslint-plugin-format'

export default antfu({
  files: ['**/*.vue', '**/*.js', '**/*.ts'],
  ignores: ['*.md'],
  rules: {
    'unused-imports/no-unused-vars': 0,
    'node/prefer-global/process': 0,
    'no-console': 0,
    'vue/no-mutating-props': 0,
    'ts/ban-ts-comment': 0,
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
    plugins: {
      format,
    },
  },
})
