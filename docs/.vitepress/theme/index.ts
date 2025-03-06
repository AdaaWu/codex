import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
import { h } from 'vue'
import type { Theme } from 'vitepress'


export default {
  extends: DefaultTheme,
  Layout: () => {
    
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => [h(Comments), h('div', { class: 'page-stats' }, [
        ' 總瀏覽量：',
        h('span', { id: 'busuanzi_value_site_pv' }),
      ]),
      ],
      // 在文件內容後顯示留言區
      // 'doc-bottom': () =>
      //   h('div', { class: 'busuanzi-stats' }, [
      //     '總訪客數：',
      //     h('span', { id: 'busuanzi_value_site_uv' }),
      //     ' | 總瀏覽量：',
      //     h('span', { id: 'busuanzi_value_site_pv' }),
      //   ]),
    })
  }
} satisfies Theme