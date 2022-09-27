import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://www.thomasxiao.com/",

  author: {
    name: "Mr.11.爱宠人",
    url: "https://www.thomasxiao.com",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3676226_okygp7ghiol.css",

  logo: "/logo.jpeg",

  repo: "Ohlalala1021/Ohlalala1021.github.io",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    name: "Mr.爱宠人",
    description: "hi,大家好！我是个狗狗爱好者，平时喜欢看书和看电影，也喜欢羽毛球；最讨厌有人在公共场合大声“狗叫”。",
    intro: "/aboutme.md",
    medias: {
      Baidu: "https://example.com",
      Dingding: "https://example.com",
      //Discord: "https://example.com",
      Email: "https://example.com",
      //Evernote: "https://example.com",
     // Facebook: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://github.com/Ohlalala1021",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
     // Linkedin: "https://example.com",
      //Twitter: "https://example.com",
      Wechat: "https://example.com",
      //Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      [encodeURI("/小随笔/")]:"060721",
      [encodeURI("/小笔记/")]:"060721",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscuss
       */


      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://comments.thomasxiao.com/",
    },

    mdEnhance: {
      tex: true,
      // enableAll: true,
      attrs: true,
      tabs: true,
      // vpre: true,
      codetabs: true,
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      align: true, // 自定义对齐
      footnote: true,
      // this is the default option, so you can use it directly
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});