/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Github\\blog\\node_modules\\_@vuepress_theme-blog@2.3.3@@vuepress\\theme-blog\\layouts\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-27d9570d",
    path: "/2018/10/27/javascript-async/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-27d9570d").then(next)
    },
  },
  {
    path: "/2018/10/27/javascript-async/index.html",
    redirect: "/2018/10/27/javascript-async/"
  },
  {
    path: "/_posts/2018-10-27-javascript-async.html",
    redirect: "/2018/10/27/javascript-async/"
  },
  {
    name: "v-2cf116e1",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2cf116e1").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-7113c9e7",
    path: "/2018/09/06/business-standard/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-7113c9e7").then(next)
    },
  },
  {
    path: "/2018/09/06/business-standard/index.html",
    redirect: "/2018/09/06/business-standard/"
  },
  {
    path: "/_posts/2018-9-6-business-standard.html",
    redirect: "/2018/09/06/business-standard/"
  },
  {
    name: "v-bddd1db2",
    path: "/2018/09/25/javascript-closure/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-bddd1db2").then(next)
    },
  },
  {
    path: "/2018/09/25/javascript-closure/index.html",
    redirect: "/2018/09/25/javascript-closure/"
  },
  {
    path: "/_posts/2018-9-25-javascript-closure.html",
    redirect: "/2018/09/25/javascript-closure/"
  },
  {
    name: "v-9100e232",
    path: "/2019/05/29/utils-func/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-9100e232").then(next)
    },
  },
  {
    path: "/2019/05/29/utils-func/index.html",
    redirect: "/2019/05/29/utils-func/"
  },
  {
    path: "/_posts/2019-5-29-utils-func.html",
    redirect: "/2019/05/29/utils-func/"
  },
  {
    name: "v-0d450c87",
    path: "/2019/04/05/javascript-design/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-0d450c87").then(next)
    },
  },
  {
    path: "/2019/04/05/javascript-design/index.html",
    redirect: "/2019/04/05/javascript-design/"
  },
  {
    path: "/_posts/2019-4-5-javascript-design.html",
    redirect: "/2019/04/05/javascript-design/"
  },
  {
    name: "v-971aa872",
    path: "/2019/05/28/webpack-init/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-971aa872").then(next)
    },
  },
  {
    path: "/2019/05/28/webpack-init/index.html",
    redirect: "/2019/05/28/webpack-init/"
  },
  {
    path: "/_posts/2019-5-28-webpack-init.html",
    redirect: "/2019/05/28/webpack-init/"
  },
  {
    name: "v-103129dd",
    path: "/2019/05/28/javascript-prototype/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-103129dd").then(next)
    },
  },
  {
    path: "/2019/05/28/javascript-prototype/index.html",
    redirect: "/2019/05/28/javascript-prototype/"
  },
  {
    path: "/_posts/2018-9-5-javascript-prototype.html",
    redirect: "/2019/05/28/javascript-prototype/"
  },
  {
    name: "v-424df898",
    path: "/blog/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-424df898").then(next)
    },
    meta: {"pid":"blog","id":"blog"}
  },
  {
    path: "/blog/index.html",
    redirect: "/blog/"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-b1564aac").then(next)
    },
    meta: {"pid":"tag","id":"tag"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-5f97b358",
    path: "/tag/Javascript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-5f97b358").then(next)
    },
    meta: {"pid":"tag","id":"Javascript"}
  },
  {
    path: "/tag/Javascript/index.html",
    redirect: "/tag/Javascript/"
  },
  {
    name: "v-038768cf",
    path: "/tag/业务/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-038768cf").then(next)
    },
    meta: {"pid":"tag","id":"业务"}
  },
  {
    path: "/tag/业务/index.html",
    redirect: "/tag/业务/"
  },
  {
    name: "v-97019ce8",
    path: "/tag/工具/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-97019ce8").then(next)
    },
    meta: {"pid":"tag","id":"工具"}
  },
  {
    path: "/tag/工具/index.html",
    redirect: "/tag/工具/"
  },
  {
    name: "v-ae3001b6",
    path: "/tag/设计模式/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-ae3001b6").then(next)
    },
    meta: {"pid":"tag","id":"设计模式"}
  },
  {
    path: "/tag/设计模式/index.html",
    redirect: "/tag/设计模式/"
  },
  {
    name: "v-ad8a01a8",
    path: "/tag/Webpack/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-ad8a01a8").then(next)
    },
    meta: {"pid":"tag","id":"Webpack"}
  },
  {
    path: "/tag/Webpack/index.html",
    redirect: "/tag/Webpack/"
  },
  {
    name: "v-c3507bb6",
    path: "/blog/page/2/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c3507bb6").then(next)
    },
    meta: {"pid":"blog","id":"blog"}
  },
  {
    path: "/blog/page/2/index.html",
    redirect: "/blog/page/2/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]