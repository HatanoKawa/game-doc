import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Erste 文档",
  base: "/game-doc",
  description: "关于Project Erste中各系统及指令的操作手册",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '概述',
        link: '/welcome'
      },
      {
        text: '常用参考',
        items: [
          { text: '富文本', link: '/commonly-used/rich-text' },
        ]
      },
      {
        text: '脚本',
        items: [
          { text: '内联脚本', link: '/scripts/inline-scripts' },
          { text: '行级脚本', link: '/scripts/line-scripts' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
