import { defineConfig } from 'vitepress'

export default defineConfig({
  // 设置默认语言
  lang: 'zh-CN',
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'MindRouter',
      description: '您的智能路由专家，更低成本',
      themeConfig: {
        // 中文导航栏
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' }
        ],
        // 语言选择器文本
        langMenuLabel: '切换语言',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // 这个很重要！
      title: 'MindRouter',
      description: 'Your intelligent router expert for lower cost',
      themeConfig: {
        // 英文导航栏
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' }
        ],
        // 语言选择器文本
        langMenuLabel: 'Change Language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Dark mode'
      }
    }
  },
  
  themeConfig: {
    // 全局主题配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/mindrouter' }
    ]
  }
})