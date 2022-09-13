import { navbar } from "vuepress-theme-hope";

export default navbar([
 {
  text: "使命必达",
  icon: "strong",
  children: [
    {
      text:"使命必达",
      children: [
        { text: "五上小目标", icon: "strong", link: "/小目标/5thgradeterm1"},
        { text: "22年暑假目标", icon: "strong", link: "/小目标/summerholiday2022"},
      ],
    }
  ],
},
{
  text: "书山有路勤为径",
  icon: "any",
  children: [
    {
      text:"书山有路勤为径",
      children: [
        { text: "朝代兴衰与民信", icon: "any", link: "/小导图/thedynastyandtrustofthepeople"},
      ],
    }
  ],
},
{
  text: "学而时习之",
  icon: "write",
  children: [
    {
      text:"学而时习之",
      children: [
        { text: "网站搭建笔记1-5", icon: "write", link: "/小笔记/f-note"},
        { text: "网站搭建笔记6-10", icon: "write", link: "/小笔记/s-note"},
      ],
    }
  ],
},
 {
  text: "书写美好",
  icon: "alias",
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
{
  text: "谈天说地",
  icon: "change",
  children: [
    {
      text:"谈天说地",
      children: [
        { text: "论朝代兴衰与民信之关系", icon: "change", link: "/小论文/thedynastyandtrustofthepeople"},
      ],
    }
  ],
},
{
  text: "随心而记",
  icon: "autumn",
  children: [
    {
      text:"随心而记",
      children: [
        { text: "新同学", icon: "autumn", link: "/小随笔/8-31"},
        { text: "小助教", icon: "autumn", link: "/小随笔/9-1"},
        { text: "Afriendyday", icon: "autumn", link: "/小随笔/9-2"},
        { text: "傅国涌见面会", icon: "autumn", link: "/小随笔/9-6"},
        { text: "朋友日", icon: "autumn", link: "/小随笔/9-9"},
        { text: "Happymoonfestival", icon: "autumn", link: "/小随笔/9-11"},
      ],
    }
  ],
},
])