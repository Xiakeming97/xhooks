import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'xhooks',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'hooks', link: '/components' },
    ],
  },
});