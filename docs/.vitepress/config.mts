import { defineConfig ,type DefaultTheme} from "vitepress";

export default defineConfig({
  // ...
  lang: "zh-CN",
  title: "XGG学习笔记",
  titleTemplate: "XGG",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "前端", link: "/menu/introduction", activeMatch: "/menu/" },
      { text: "算法", link: "/algorithm/math", activeMatch: "/algorithm/" },
      { text: "其他", link: "/other/introduction", activeMatch: "/other/" },
    ],
    sidebar: {
      "/menu/": { base: /menu/, items: siderbarfrontend() },
      "/other/": { base: "/other/", items: siderbarOther() },
      "/algorithm/": { base: "/algorithm/", items: sideralgorithm() },
    } as any,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present XGG",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/JIAFENG123/learn-notes" },
    ],
  },
});

function siderbarfrontend() {
  return [
    {
      text: "设计模式",
      collapsed: true,
      items: [
        { text: "Introduction", link: "/menu/introduction" },
        { text: "单例模式", link: "/menu/singleTon" },
        { text: "策略模式", link: "/menu/strategy" },
        { text: "代理模式", link: "/menu/proxy" },
        { text: "迭代器模式", link: "/menu/iterator" },
        { text: "发布订阅模式", link: "/menu/publish_Subscription" },
        // ...
      ],
    },
  ];
}
function siderbarOther():DefaultTheme.SidebarItem[] {
  return [
    {
      text: "pr",
      collapsed: true,
      items: [
        { text: "Introduction", link: "/other/pr/introduction" },
        // ...
      ],
    },
  ];
}

function sideralgorithm() {
  return [
    {
      text: "数学",
      base: "/algorithm/",
      link: `math`,
    },
    {
      text: "集合",
      base: "/algorithm/",
      link: `gather`,
    },
  ];
}
