import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Erste 文档",
  base: "/game-doc",
  description: "关于Project Erste中各系统及指令的操作手册",
  cleanUrls: true,
  themeConfig: {

    search: {
      provider: 'local',
    },
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
          { text: '行级脚本【通用】', link: '/scripts/line-scripts' },
          { text: '行级脚本【角色】', link: '/scripts/line-scripts-character' },
          { text: '角色动画', link: '/scripts/animation' },
          { text: '内联脚本（已废弃）', link: '/scripts/inline-scripts' },
        ]
      },
      {
        text: '表格相关',
        items: [
          { text: '条件判断', link: '/tables/conditional-judgement' },
          { text: 'StoryPerformData 故事对话', link: '/tables/story-dialogue' }
        ]
      },
      {
        text: '系统说明',
        items: [
          { text: '对话节点类型', link: '/system/types-of-dialogue-node' },
          { text: '角色标识', link: '/system/character-key' },
          { text: '角色图层与优先级', link: '/system/character-layer-and-priority' },
          { text: '对话界面图层说明', link: '/system/layer-order' },
          { text: '章节系统说明', link: '/system/chapter-system' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
