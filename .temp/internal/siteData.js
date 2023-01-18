/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "PENG BlOG",
  "description": "Web development, WebGL, JavaScript",
  "base": "/",
  "headTags": [],
  "pages": [
    {
      "title": "About",
      "frontmatter": {
        "title": "About",
        "description": " Hi, I'm Peng Yang\n<!--\nAs you can tell from my posts, I'm a software engineer. Currently, I work and live in [Wuhan](https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89/10 ..."
      },
      "regularPath": "/",
      "relativePath": "Readme.md",
      "key": "v-2e4a6e1f",
      "path": "/",
      "summary": " Hi, I'm Peng Yang\n<!--\nAs you can tell from my posts, I'm a software engineer. Currently, I work and live in [Wuhan](https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89/10 ...",
      "lastUpdated": "6/9/2021, 3:31:12 PM",
      "lastUpdatedTimestamp": 1623223872000
    },
    {
      "title": "JS异步",
      "frontmatter": {
        "title": "JS异步",
        "date": "2018-10-27T00:00:00.000Z",
        "tags": [
          "Javascript"
        ],
        "description": "JS 为何会有异步\nJS 是单线程的语言，所谓“单线程”就是一根筋，对于拿到的程序，一行一行的执行，上面的没执行为完，那就等着。\n`js\nvar i,\n\tt = Date.now()\nfor (i = 0; i < 100000000; i++) {\n\t// ...\n}\nconsole.log(Date.now() - t) // 250\n` ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2018-10-27-javascript-async.html",
      "relativePath": "_posts/Javascript/2018-10-27-javascript-async.md",
      "key": "v-00ddcb3c",
      "path": "/2018/10/27/javascript-async/",
      "headers": [
        {
          "level": 2,
          "title": "何为异步",
          "slug": "何为异步"
        },
        {
          "level": 2,
          "title": "jQuery异步",
          "slug": "jquery异步"
        },
        {
          "level": 2,
          "title": "ES6的Promise",
          "slug": "es6的promise"
        },
        {
          "level": 3,
          "title": "传统的异步操作",
          "slug": "传统的异步操作"
        },
        {
          "level": 3,
          "title": "Promise基本应用",
          "slug": "promise基本应用"
        },
        {
          "level": 3,
          "title": "串联多个异步操作",
          "slug": "串联多个异步操作"
        },
        {
          "level": 3,
          "title": "Promise.all和Promise.race的应用",
          "slug": "promise-all和promise-race的应用"
        },
        {
          "level": 3,
          "title": "Promise/A+ 规范",
          "slug": "promise-a-规范"
        },
        {
          "level": 2,
          "title": "ES6的Generator",
          "slug": "es6的generator"
        },
        {
          "level": 3,
          "title": "Generator简介",
          "slug": "generator简介"
        },
        {
          "level": 3,
          "title": "Iterator遍历器",
          "slug": "iterator遍历器"
        }
      ],
      "summary": "JS 为何会有异步\nJS 是单线程的语言，所谓“单线程”就是一根筋，对于拿到的程序，一行一行的执行，上面的没执行为完，那就等着。\n`js\nvar i,\n\tt = Date.now()\nfor (i = 0; i < 100000000; i++) {\n\t// ...\n}\nconsole.log(Date.now() - t) // 250\n` ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "JS闭包",
      "frontmatter": {
        "title": "JS闭包",
        "date": "2018-9-25",
        "tags": [
          "Javascript"
        ],
        "description": "\n什么是“执行上下文”(也叫做“执行上下文环境”）？我们先不定义，先看以下几种情况。\n第一种情况，变量声明，默认赋值为undefined\n首先我们在浏览器控制台来调试一段代码。\n`js\nconsole.log(a) // Uncaught ReferenceError: a is not defined\nconsole.log(a) // undefined\nv ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2018-9-25-javascript-closure.html",
      "relativePath": "_posts/Javascript/2018-9-25-javascript-closure.md",
      "key": "v-3ee8e8a8",
      "path": "/2018/09/25/javascript-closure/",
      "headers": [
        {
          "level": 2,
          "title": "执行上下文",
          "slug": "执行上下文"
        },
        {
          "level": 2,
          "title": "this",
          "slug": "this"
        },
        {
          "level": 2,
          "title": "执行上下文栈",
          "slug": "执行上下文栈"
        },
        {
          "level": 2,
          "title": "作用域",
          "slug": "作用域"
        },
        {
          "level": 2,
          "title": "自由变量到作用域链",
          "slug": "自由变量到作用域链"
        },
        {
          "level": 2,
          "title": "闭包",
          "slug": "闭包"
        }
      ],
      "summary": "\n什么是“执行上下文”(也叫做“执行上下文环境”）？我们先不定义，先看以下几种情况。\n第一种情况，变量声明，默认赋值为undefined\n首先我们在浏览器控制台来调试一段代码。\n`js\nconsole.log(a) // Uncaught ReferenceError: a is not defined\nconsole.log(a) // undefined\nv ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "JS原型",
      "frontmatter": {
        "title": "JS原型",
        "date": "2018-9-5",
        "tags": [
          "Javascript"
        ],
        "description": "\njs有六种数据类型Number、String、Boolean、Undefined、Null（ECMAScript 2015新增了一种基本数据类型：symbol）\n我们可以用typeof检测数据类型\n`js\ntypeof 123  // Number\ntypeof 'abc' // String\ntypeof true  // Boolean\ntypeof undefin ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2018-9-5-javascript-prototype.html",
      "relativePath": "_posts/Javascript/2018-9-5-javascript-prototype.md",
      "key": "v-48e6157c",
      "path": "/2018/09/05/javascript-prototype/",
      "headers": [
        {
          "level": 2,
          "title": "数据类型",
          "slug": "数据类型"
        },
        {
          "level": 2,
          "title": "函数和对象",
          "slug": "函数和对象"
        },
        {
          "level": 2,
          "title": "prototype原型",
          "slug": "prototype原型"
        },
        {
          "level": 2,
          "title": "隐式原型",
          "slug": "隐式原型"
        },
        {
          "level": 2,
          "title": "instanceof",
          "slug": "instanceof"
        },
        {
          "level": 2,
          "title": "继承",
          "slug": "继承"
        },
        {
          "level": 2,
          "title": "灵活性",
          "slug": "灵活性"
        },
        {
          "level": 2,
          "title": "es6中class",
          "slug": "es6中class"
        }
      ],
      "summary": "\njs有六种数据类型Number、String、Boolean、Undefined、Null（ECMAScript 2015新增了一种基本数据类型：symbol）\n我们可以用typeof检测数据类型\n`js\ntypeof 123  // Number\ntypeof 'abc' // String\ntypeof true  // Boolean\ntypeof undefin ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "开发规范",
      "frontmatter": {
        "title": "开发规范",
        "date": "2018-9-6",
        "tags": [
          "业务"
        ],
        "description": "BEM思想\nBEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。这种巧妙的命名方法让你的CSS类对其他开发者来说更加透明而且更有意义。BEM命名约定更加严格，而且包含更多的信息，它们用于一个团队开发一个耗时的大项目。\n命名约定的模式如下：\n` css{3}\n.block{} ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2018-9-6-business-standard.html",
      "relativePath": "_posts/Javascript/2018-9-6-business-standard.md",
      "key": "v-2b18b14c",
      "path": "/2018/09/06/business-standard/",
      "headers": [
        {
          "level": 2,
          "title": "CSS命名规范",
          "slug": "css命名规范"
        },
        {
          "level": 3,
          "title": "BEM思想",
          "slug": "bem思想"
        },
        {
          "level": 3,
          "title": "样式文件划分",
          "slug": "样式文件划分"
        },
        {
          "level": 2,
          "title": "JS命名规范",
          "slug": "js命名规范"
        },
        {
          "level": 3,
          "title": "变量",
          "slug": "变量"
        },
        {
          "level": 3,
          "title": "常量",
          "slug": "常量"
        },
        {
          "level": 3,
          "title": "函数",
          "slug": "函数"
        },
        {
          "level": 3,
          "title": "类 & 构造函数",
          "slug": "类-构造函数"
        },
        {
          "level": 3,
          "title": "类的成员",
          "slug": "类的成员"
        },
        {
          "level": 3,
          "title": "vue命名规范",
          "slug": "vue命名规范"
        },
        {
          "level": 2,
          "title": "Git提交规范",
          "slug": "git提交规范"
        },
        {
          "level": 2,
          "title": "Vue开发规范",
          "slug": "vue开发规范"
        },
        {
          "level": 3,
          "title": "目录结构",
          "slug": "目录结构"
        },
        {
          "level": 3,
          "title": "组件命名规范、组件结构规范",
          "slug": "组件命名规范、组件结构规范"
        },
        {
          "level": 3,
          "title": "组件样式",
          "slug": "组件样式"
        },
        {
          "level": 3,
          "title": "Template模板文件",
          "slug": "template模板文件"
        },
        {
          "level": 3,
          "title": "Script模块",
          "slug": "script模块"
        }
      ],
      "summary": "BEM思想\nBEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。这种巧妙的命名方法让你的CSS类对其他开发者来说更加透明而且更有意义。BEM命名约定更加严格，而且包含更多的信息，它们用于一个团队开发一个耗时的大项目。\n命名约定的模式如下：\n` css{3}\n.block{} ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "JS设计模式",
      "frontmatter": {
        "title": "JS设计模式",
        "date": "2019-4-5",
        "tags": [
          "Javascript",
          "设计模式"
        ],
        "description": "何为设计\n即按照一种思路或者标准来实现功能\n功能相同，可以由不同设计方案来实现\n伴随需求的增加，设计的作用才能体现出来\nUNIX/LINUX设计思想\n参考文献 《UNIX/LINUX设计思想》\n准则1: 小即是美 ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2019-4-5-javascript-design.html",
      "relativePath": "_posts/Javascript/2019-4-5-javascript-design.md",
      "key": "v-5fbca62e",
      "path": "/2019/04/05/javascript-design/",
      "headers": [
        {
          "level": 2,
          "title": "设计原则",
          "slug": "设计原则"
        },
        {
          "level": 3,
          "title": "何为设计",
          "slug": "何为设计"
        },
        {
          "level": 3,
          "title": "UNIX/LINUX设计思想",
          "slug": "unix-linux设计思想"
        },
        {
          "level": 2,
          "title": "SOLID五大设计原则",
          "slug": "solid五大设计原则"
        },
        {
          "level": 2,
          "title": "设计模式",
          "slug": "设计模式"
        },
        {
          "level": 3,
          "title": "工厂模式",
          "slug": "工厂模式"
        },
        {
          "level": 3,
          "title": "单例模式",
          "slug": "单例模式"
        },
        {
          "level": 3,
          "title": "适配器模式",
          "slug": "适配器模式"
        },
        {
          "level": 3,
          "title": "装饰器模式",
          "slug": "装饰器模式"
        }
      ],
      "summary": "何为设计\n即按照一种思路或者标准来实现功能\n功能相同，可以由不同设计方案来实现\n伴随需求的增加，设计的作用才能体现出来\nUNIX/LINUX设计思想\n参考文献 《UNIX/LINUX设计思想》\n准则1: 小即是美 ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "常用函数",
      "frontmatter": {
        "title": "常用函数",
        "date": "2019-5-29",
        "tags": [
          "Javascript",
          "工具"
        ],
        "description": "\n` js\n/**\n 存储Storage\n */\nexport const Storage = {\n  set (name, content) {\n    if (!name) return\n    if (typeof content !== 'string') {\n      content = JSON.stringify(content)\n    } ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2019-5-29-utils-func.html",
      "relativePath": "_posts/Javascript/2019-5-29-utils-func.md",
      "key": "v-0831abac",
      "path": "/2019/05/29/utils-func/",
      "headers": [
        {
          "level": 3,
          "title": "localStorage操作",
          "slug": "localstorage操作"
        },
        {
          "level": 3,
          "title": "Cookie操作",
          "slug": "cookie操作"
        },
        {
          "level": 3,
          "title": "获取url参数",
          "slug": "获取url参数"
        },
        {
          "level": 3,
          "title": "时间戳转换",
          "slug": "时间戳转换"
        },
        {
          "level": 3,
          "title": "返回顶部",
          "slug": "返回顶部"
        },
        {
          "level": 3,
          "title": "函数防抖",
          "slug": "函数防抖"
        },
        {
          "level": 3,
          "title": "函数节流",
          "slug": "函数节流"
        },
        {
          "level": 3,
          "title": "获取指定范围随机数",
          "slug": "获取指定范围随机数"
        },
        {
          "level": 3,
          "title": "获取文件后缀",
          "slug": "获取文件后缀"
        }
      ],
      "summary": "\n` js\n/**\n 存储Storage\n */\nexport const Storage = {\n  set (name, content) {\n    if (!name) return\n    if (typeof content !== 'string') {\n      content = JSON.stringify(content)\n    } ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "Webpack 初始化",
      "frontmatter": {
        "title": "Webpack 初始化",
        "date": "2019-5-28",
        "tags": [
          "Webpack",
          "工具"
        ],
        "description": "详细配置参考 webpack中文文档\n创建项目目录  cd project\n在命令行工具中运行 yarn init\n安装webpack包 yarn install webpack webpack-cli --dev\n安装webpack插件 `yarn install we ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/Javascript/2019-5-28-webpack-init.html",
      "relativePath": "_posts/Javascript/2019-5-28-webpack-init.md",
      "key": "v-689ea80a",
      "path": "/2019/05/28/webpack-init/",
      "headers": [
        {
          "level": 2,
          "title": "webpack 初始化",
          "slug": "webpack-初始化"
        }
      ],
      "summary": "详细配置参考 webpack中文文档\n创建项目目录  cd project\n在命令行工具中运行 yarn init\n安装webpack包 yarn install webpack webpack-cli --dev\n安装webpack插件 `yarn install we ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "向量的相关计算",
      "frontmatter": {
        "title": "向量的相关计算",
        "date": "2022-7-29",
        "tags": [
          "3D图形"
        ],
        "description": "\n要得到任意维度向量的负向量,只需要简单地将向量地每一个分量变负即可.数学表达式如下.\n`\n-[a1,a2,...,an-1,an] = [-a1,-a2,...,-an-1,-an]\n`\n几何意义： 向量变负，得到跟当前向量大小相等，方向相反的向量. ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/WebGL/2022-7-28-vector.html",
      "relativePath": "_posts/WebGL/2022-7-28-vector.md",
      "key": "v-92bbf354",
      "path": "/2022/07/29/vector/",
      "headers": [
        {
          "level": 3,
          "title": "负向量",
          "slug": "负向量"
        }
      ],
      "summary": "\n要得到任意维度向量的负向量,只需要简单地将向量地每一个分量变负即可.数学表达式如下.\n`\n-[a1,a2,...,an-1,an] = [-a1,-a2,...,-an-1,-an]\n`\n几何意义： 向量变负，得到跟当前向量大小相等，方向相反的向量. ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "title": "世界坐标和本地坐标",
      "frontmatter": {
        "title": "世界坐标和本地坐标",
        "date": "2022-11-23T00:00:00.000Z",
        "tags": [
          "3D图形"
        ],
        "description": "\n[[toc]]\n::: danger STOP\n危险区域，禁止通行\n:::\n::: details 点击查看代码\n`js\nconsole.log('你好，VuePress！')\n`\n::: ...",
        "layout": "Post",
        "permalink": "/:year/:month/:day/:slug"
      },
      "regularPath": "/_posts/WebGL/2022-11-23-basics.html",
      "relativePath": "_posts/WebGL/2022-11-23-basics.md",
      "key": "v-17d2a884",
      "path": "/2022/11/23/basics/",
      "headers": [
        {
          "level": 3,
          "title": "世界坐标和本地坐标",
          "slug": "世界坐标和本地坐标"
        }
      ],
      "summary": "\n[[toc]]\n::: danger STOP\n危险区域，禁止通行\n:::\n::: details 点击查看代码\n`js\nconsole.log('你好，VuePress！')\n`\n::: ...",
      "id": "blog",
      "pid": "blog"
    },
    {
      "frontmatter": {
        "layout": "Layout",
        "title": "貼文"
      },
      "regularPath": "/blog/",
      "key": "v-424df898",
      "path": "/blog/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterKey",
        "title": "Tag"
      },
      "regularPath": "/tag/",
      "key": "v-b1564aac",
      "path": "/tag/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "Javascript Tag"
      },
      "regularPath": "/tag/Javascript/",
      "key": "v-5f97b358",
      "path": "/tag/Javascript/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "业务 Tag"
      },
      "regularPath": "/tag/%E4%B8%9A%E5%8A%A1/",
      "key": "v-038768cf",
      "path": "/tag/业务/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "设计模式 Tag"
      },
      "regularPath": "/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/",
      "key": "v-ae3001b6",
      "path": "/tag/设计模式/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "工具 Tag"
      },
      "regularPath": "/tag/%E5%B7%A5%E5%85%B7/",
      "key": "v-97019ce8",
      "path": "/tag/工具/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "Webpack Tag"
      },
      "regularPath": "/tag/Webpack/",
      "key": "v-ad8a01a8",
      "path": "/tag/Webpack/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterPagination",
        "title": "3D图形 Tag"
      },
      "regularPath": "/tag/3D%E5%9B%BE%E5%BD%A2/",
      "key": "v-2b4aa142",
      "path": "/tag/3D图形/"
    },
    {
      "frontmatter": {
        "layout": "Layout",
        "title": "Page 2 | 貼文"
      },
      "regularPath": "/blog/page/2/",
      "key": "v-c3507bb6",
      "path": "/blog/page/2/"
    }
  ],
  "themeConfig": {
    "directories": [
      {
        "id": "blog",
        "dirname": "_posts",
        "title": "貼文",
        "path": "/blog/"
      }
    ],
    "sitemap": {
      "hostname": "https://myron-blog.netlify.app"
    },
    "comment": {
      "service": "vssue",
      "autoCreateIssue": false,
      "prefix": "[Post]",
      "owner": "myronyang",
      "repo": "blog",
      "clientId": "9fadcba1f59dfb8f17b7",
      "clientSecret": "dbcb5aae3c3b6e9e88332b06ae2230d6629d25fa"
    },
    "nextLinks": true,
    "prevLinks": true,
    "nav": [
      {
        "text": "About",
        "link": "/"
      },
      {
        "text": "博客",
        "link": "/blog/"
      },
      {
        "text": "标签",
        "link": "/tag/"
      },
      {
        "text": "Github",
        "link": "https://github.com/myronyang"
      }
    ],
    "footer": {
      "contact": [
        {
          "type": "github",
          "link": "https://github.com/myronyang"
        },
        {
          "type": "mail",
          "link": "821253835@qq.com"
        },
        {
          "type": "web",
          "link": "https://tjui.netlify.app/#/"
        }
      ],
      "copyright": [
        {
          "text": "Myron Yang © 2020-2021",
          "link": ""
        }
      ]
    },
    "summary": true,
    "summaryLength": 200,
    "pwa": false
  }
}