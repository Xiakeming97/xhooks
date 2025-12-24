import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'dist',
    ignores: ['**/*demo{0..100}.tsx'],
  },
  cjs: {
    output: 'dist',
    ignores: ['**/*demo{0..100}.tsx'],
  },
  // 禁用 source map 以减小体积
  sourcemap: false,
});