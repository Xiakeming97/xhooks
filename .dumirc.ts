import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'xhooks',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'hooks', link: '/components' },
    ],
    analytics: {
      // 百度统计的 key
      baidu: 'baidu_tongji_key',
    },
    footer: 'xhooks由xiakeming开发',
    socialLinks: {
      github: 'https://github.com/Xiakeming97/xhooks',
    },
  },
});
