import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'
import unusedImports from 'eslint-plugin-unused-imports'
import { globalIgnores } from 'eslint/config'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Vue 框架配置
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // 通用规则配置 (Perfectionist)
  {
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-exports': 'warn',
    },
  },

  // 自定义规则调整
  {
    name: 'app/custom-rules',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // Vue 相关放宽
      'vue/multi-word-component-names': 'off', // 允许单单词组件名
      'vue/require-default-prop': 'warn', // Props 建议设置默认值
      'vue/no-multiple-template-root': 'off', // Vue 3 支持多个根元素

      // TypeScript 相关放宽
      '@typescript-eslint/no-explicit-any': 'warn', // any 类型作为警告
      '@typescript-eslint/no-non-null-assertion': 'warn', // 非空断言作为警告
      '@typescript-eslint/no-unused-vars': 'warn', // 未使用变量警告

      // 通用规则放宽
      'no-console': 'off', // 允许 console 调试
      'no-debugger': 'error', // 禁止 debugger
      'prefer-const': 'error', // 强制使用 const

      // 自动清理未使用的导入
      'unused-imports/no-unused-imports': 'error',
    },
  },

  // 跳过格式化配置(放在最后避免冲突)
  skipFormatting,
)
