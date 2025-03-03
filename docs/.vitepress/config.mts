import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/codex/',
  title: "Sunny's CodeX",
  description: "Figma 聖戰：異端的 CODEX 之書",
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
          { text: '他用 Figma', link: '/figma-illuminati/f1-1.md' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
     // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
