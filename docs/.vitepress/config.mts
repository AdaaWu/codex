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
          { text: '3 - 大審判', link: '/figma-illuminati/f1-3.md' },
          { text: '4 - 異變', link: '/figma-illuminati/f1-4.md' },
          { text: '5 - 逆襲', link: '/figma-illuminati/f1-5.md' },
          { text: '6 - 技術奇點 Figma Singularity', link: '/figma-illuminati/f1-6.md' },
          { text: '7 - 飛昇', link: '/figma-illuminati/f1-7.md' },
          { text: '8 - 重生 Figma Rebirth', link: '/figma-illuminati/f1-8.md' },
          { text: '9 - 終焉與重啟 Final Reset', link: '/figma-illuminati/f1-9.md' },
          { text: '10 - 最終革命', link: '/figma-illuminati/f1-10.md' },
          { text: '11 - 技術神話', link: '/figma-illuminati/f1-11.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      },
      {
        text: '技術魔法世界',
        items: [
          { text: '1 - CODEX 之書', link: '/figma-illuminati/f2-1.md' },
          { text: '2 - 世界的動盪', link: '/figma-illuminati/f2-2.md' },
          { text: '3 - Docker 深淵之海', link: '/figma-illuminati/f2-3.md' },
          { text: '4 - 開源者神殿', link: '/figma-illuminati/f2-4.md' },
        ],
      },
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
