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
        { text: "学而时习之", icon: "edit", link: "/小导图/thedynastyandtrustofthepeople"},
    ],
    }
        ],
      },
])