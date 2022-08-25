import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import CodeTabs from "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import Presentation from "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/thomas/happydoggy/Ohlalala1021.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});