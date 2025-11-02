export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,ts,tsx,mts,vue}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },
  ...pluginVue.configs['flat/essential'],
  {
    rules:{
      "vue/multi-word-component-names":0
    }
  },
  ...vueTsEslintConfig(),
  skipFormatting
]
