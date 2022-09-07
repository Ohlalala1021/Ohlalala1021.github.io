import { navbar } from "vuepress-theme-hope";

export default navbar([
 {text: "使命必达",link:"/小目标/5thgradeterm1"},
 
  { text: "书写美好", icon: "creative", link: "/小美文/cookiemydog" },
  {
    text: "学而时习之",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "lala",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "thedynastyandtrustofthepeople" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "随心而配",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
