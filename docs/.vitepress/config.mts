import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/codex/',
  title: "Sunny's CodeX",
  description: "Figma 聖戰：異端的 CODEX 之書",
  head: [
    // 加入不蒜子計數器腳本
    ['script', { async: '', src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '異端誕生',
        items: [
          { text: '1 - 他用 Figma', link: '/figma-illuminati/f1-1.md' },
          { text: '2 - 後端的墮落', link: '/figma-illuminati/f1-2.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
