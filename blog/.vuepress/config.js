const path = require("path");
module.exports = (options, context, api) => {
  return {
    title: "PENG BlOG",
    description: "Web development, WebGL, JavaScript",
    theme: "@vuepress/blog",
    plugins: [
      [
        "@vuepress/back-to-top",
        "@vuepress/google-analytics",
        {
          ga: process.env.GA,
        },
      ],
    ],
    themeConfig: {
      directories: [
        {
          id: "blog",
          dirname: "_posts",
          title: "貼文",
          path: "/blog/",
          // itemPermalink: "/blog /:year/:month/:day/:slug"
        },
      ],
      sitemap: {
        hostname: "https://myron-blog.netlify.app",
      },
      comment: {
        service: "vssue",
        autoCreateIssue: false,
        prefix: "[Post]",
        owner: "myronyang",
        repo: "blog",
        clientId: "9fadcba1f59dfb8f17b7",
        clientSecret: "dbcb5aae3c3b6e9e88332b06ae2230d6629d25fa",
      },
      nextLinks: true,
      prevLinks: true,
      nav: [
        {
          text: "About",
          link: "/",
        },
        {
          text: "博客",
          link: "/blog/",
        },
        {
          text: "标签",
          link: "/tag/",
        },
        {
          text: "Github",
          link: "https://github.com/myronyang",
        },
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/myronyang",
          },
          {
            type: "mail",
            link: "821253835@qq.com",
          },
          {
            type: "web",
            link: "https://tjui.netlify.app/#/",
          },
        ],
        copyright: [
          {
            text: "Myron Yang © 2020-2021",
            link: "",
          },
        ],
      },
    },
    alias: {
      "@assets": path.resolve(__dirname, "../assets"),
      "@aliyun": "http://gxzn-free.oss-cn-zhangjiakou.aliyuncs.com/Web-private-resource/Blog"
    },
  };
};
