import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/Users/huangjiabao/GitHub/WebSite/Ohlalala1021.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
