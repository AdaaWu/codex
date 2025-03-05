<template>
    <Layout :class="[frontmatter.class]">
        <template #doc-before>
            <div class="info-box">
                <span class="info">✍️ {{ frontmatter.author || 'Opsehll' }}</span>
                <div v-if="lastUpdated !== '' || frontmatter.createdAt" class="date-box">
                    📆
                    <span v-if="lastUpdated !== ''">Last Updated：{{ lastUpdated }}</span>
                    <span v-if="frontmatter.createdAt">Created：{{ frontmatter.createdAt }}</span>
                </div>

                <div class="read">
                    👀 已被閱讀：
                    <span id="busuanzi_value_page_pv">Loading</span>
                    <span id="busuanzi_value_site_pv" class="number">Loading</span>
                    <span id="busuanzi_value_site_uv" class="number">Loading</span>
                    次
                </div>

                <div v-if="frontmatter.tags" class="tag-box">
                    🏷️
                    <a v-for="tag in frontmatter.tags" :key="tag" class="tag-info"
                        :href="`/tags-list.html?tag=${tag}&page=1`">{{ tag }}</a>
                </div>
            </div>
        </template>

        <template #aside-ads-before>
            <div class="busuanzi-box">
                Opshell 的 Blog
                <div class="busuanzi">
                    已有： <span id="busuanzi_value_site_pv" class="number">Loading</span> 次觀看
                </div>
                <div class="busuanzi">
                    已有： <span id="busuanzi_value_site_uv" class="number">Loading</span> 個人來過
                </div>
            </div>
        </template>
    </Layout>
</template>