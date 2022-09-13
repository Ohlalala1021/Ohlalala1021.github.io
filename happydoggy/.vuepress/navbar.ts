import { navbar } from "vuepress-theme-hope";

export default navbar([
"/",
"/home",
 { text: "使命必达",link:"/小目标/5thgradeterm1" },
 { text: "书写美好", icon: "creative", link: "/小美文/cookiemydog"},
 { text: "学而时习之",icon: "edit", link: "/小导图/thedynastyandtrustofthepeople"},
 {
  text: "书写美好",
  icon: "edit",
  children: [
    {
      text:"书写美好",
      children: [
        { text: "我的狗狗", icon: "edit", link: "/小美文/cookiemydog"},
        { text: "四季老和山", icon: "edit", link: "/小美文/hilllaoheshan"},
        { text: "谈彭州山洪", icon: "edit", link: "/小美文/pengzhoulandslide"},
        { text: "那片美丽的风景", icon: "edit", link: "/小美文/thatbuttifulplace"},
        { text: "那一刻我长大了", icon: "edit", link: "/小美文/thatmomentivegrown"},
        { text: "卜算子咏春",icon: "edit", link: "/小美文/thespringsong"},
    ],
    }
        ],
  },
])