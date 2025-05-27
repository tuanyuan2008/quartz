export const languages = {
  en: {
    name: "English",
    ui: {
      welcome: "Welcome to Quartz",
      documentation: "See the documentation for how to get started.",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      search: "Search",
      menu: "Menu",
      footer: "Built with Quartz",
    }
  },
  zh: {
    name: "中文",
    ui: {
      welcome: "欢迎使用 Quartz",
      documentation: "查看文档了解如何开始使用。",
      darkMode: "深色模式",
      lightMode: "浅色模式",
      search: "搜索",
      menu: "菜单",
      footer: "使用 Quartz 构建",
    }
  }
}

export type Language = keyof typeof languages 