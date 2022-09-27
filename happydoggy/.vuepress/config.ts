import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  lang: "zh-CN",
  title: "oh-la!",
  description: "vuepress-theme-hope 的演示",

  base: "/",
  plugins:[
    searchPlugin({
      locales:{
        "/":{
          placeholder:"搜索",

        },
       },
    }),
   ],
  theme,});