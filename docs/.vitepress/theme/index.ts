import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
import ExpandLayout from './layout/expendLayout.vue'
import { h } from 'vue'
import { useRoute } from 'vitepress';
import { onMounted, watch, nextTick } from 'vue'

function reloadBusuanzi() {
  const busuanziScriptId = 'busuanzi-script';

  // 移除舊的不蒜子
  const existingScript = document.getElementById(busuanziScriptId);
  if (existingScript) {
      existingScript.remove();
  }

  // 建立新的不蒜子物件
  const script = document.createElement('script');
  script.id = busuanziScriptId;
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;

  document.body.appendChild(script);
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    // 定義佈局
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Comments),
      "footer-after": () =>
        h("div", { class: "busuanzi-stats" }, [
          h("span", { id: "busuanzi_container_site_pv" }, [
            "網站總訪問量：",
            h("span", { id: "busuanzi_value_site_pv" }, "載入中..."),
            " 次",
          ]),
          h("span", { style: "margin-left: 15px" }),
          h("span", { id: "busuanzi_container_page_pv" }, [
            "本頁訪問量：",
            h("span", { id: "busuanzi_value_page_pv" }, "載入中..."),
            " 次",
          ]),
          h("span", { style: "margin-left: 15px" }),
          h("span", { id: "busuanzi_container_site_uv" }, [
            "網站總訪客數：",
            h("span", { id: "busuanzi_value_site_uv" }, "載入中..."),
          ]),
        ]), // 在文件內容後添加留言區
    })
  },
  // 增強應用程序的 setup 函數
  enhanceApp({ app, router }) {
    // 如果需要全局註冊組件可以在這裡做
    app.component('Comments', Comments)
  },
  setup() {
    const route = useRoute()
    
    onMounted(async () => {
      reloadBusuanzi() // 初始化計數器
    })
    
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reloadBusuanzi() // 路由變化時重新加載
        })
      }
    )
  }
}

// export default {

  
//   extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       'doc-after': () => h(Comments) // 在文件內容後顯示留言區
//     })
//   }
// }