import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'xhooks',
    // logo:'/logo.png',
    logo:'https://s2.loli.net/2023/08/15/sjWXnQ2kC94oIND.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'Hooks', link: '/components/use-boolean' },
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
  favicons: [
    'https://s2.loli.net/2023/08/15/sjWXnQ2kC94oIND.png'
  ],
  base: '/xhooks/',
  publicPath: '/xhooks/',
});
