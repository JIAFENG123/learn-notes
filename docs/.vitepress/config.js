import { defineConfig } from "vitepress";

export default defineConfig({
  // ...

  title: "XGG学习笔记",
  titleTemplate: "XGG",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '前端', link: '/menu/introduction', activeMatch: '/menu/' },
    ],
    sidebar: {
      '/menu/': siderbarfrontend()
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present XGG'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JIAFENG123/learn-notes' }
    ],
  },
});

function siderbarfrontend(){
  return  [
    {
      text: '设计模式',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/menu/introduction' },
        { text: '单例模式', link: '/menu/singleTon' },
        { text: '策略模式', link: '/menu/strategy' },
        { text: '代理模式', link: '/menu/proxy' },
        { text: '迭代器模式', link: '/menu/iterator' },
        { text: '发布订阅模式', link: '/menu/publish_Subscription' },
        // ...
      ]
    }
  ]
}