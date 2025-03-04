<script setup lang="ts">
import { useData } from 'vitepress'
const { title } = useData() // 獲取頁面標題，確保切換頁面時刷新留言
</script>

<template>
  <div :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="AdaaWu/codex"
        data-repo-id="R_kgDOOB9OhA"
     
        data-mapping="pathname"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-TW"
        data-loading="lazy"
        crossorigin="anonymous"
    />
  </div>
</template>

<style>
.giscus {
  margin-top: 2rem;
}
</style>