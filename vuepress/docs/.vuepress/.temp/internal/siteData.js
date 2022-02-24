export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "自动记账",
  "description": "Just playing around",
  "head": [],
  "locales": {
    "/en-US": {
      "lang": "en-US",
      "title": "自动记账",
      "description": "Vue-powered Static Site Generator"
    },
    "/": {
      "lang": "zh-CN",
      "title": "自动记账",
      "description": "Vue 驱动的静态网站生成器"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
