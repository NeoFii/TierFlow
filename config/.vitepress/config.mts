import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/mindrouter/',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'MindRouter',
      description: 'AI 模型智能路由平台，统一 API 接入，成本直降 60%',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '入门',
              items: [
                { text: '什么是 MindRouter？', link: '/guide/introduction' },
                { text: '快速开始', link: '/guide/getting-started' }
              ]
            },
            {
              text: '进阶',
              items: [
                { text: '路由策略详解', link: '/guide/routing-strategy' },
                { text: '模型列表', link: '/guide/models' },
                { text: 'API 参考', link: '/guide/api-reference' }
              ]
            }
          ]
        },
        langMenuLabel: '切换语言',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式',
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'MindRouter',
      description: 'AI Model Intelligent Routing Platform — Unified API, 60% Cost Reduction',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Get Started', link: '/en/guide/getting-started' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'What is MindRouter?', link: '/en/guide/introduction' },
                { text: 'Quick Start', link: '/en/guide/getting-started' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Routing Strategy', link: '/en/guide/routing-strategy' },
                { text: 'Model List', link: '/en/guide/models' },
                { text: 'API Reference', link: '/en/guide/api-reference' }
              ]
            }
          ]
        },
        langMenuLabel: 'Change Language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Dark mode',
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoFii/mindrouter' }
    ],
    search: {
      provider: 'local'
    }
  }
})
