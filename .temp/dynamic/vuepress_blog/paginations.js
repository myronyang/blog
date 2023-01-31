/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "blog",
  id: "blog",
  filter: filters.blog,
  sorter: sorters.blog,
  pages: [{"path":"/blog/","interval":[0,4]},{"path":"/blog/page/2/","interval":[5,9]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "Javascript",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/Javascript/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "Webpack",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/Webpack/","interval":[0,1]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "工具",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/工具/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "设计模式",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/设计模式/","interval":[0,1]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "业务",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/业务/","interval":[0,1]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "3D图形",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/3D图形/","interval":[0,2]}],
  prevText: "Prev",
  nextText: "Next",
}]