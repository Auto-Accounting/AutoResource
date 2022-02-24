import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/ankio/Documents/Documents/Project/自动记账/AutoResource/vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/ankio/Documents/Documents/Project/自动记账/AutoResource/vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
