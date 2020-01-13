/**
 *  === rewrite config ===
 *  页面内容 url 匹配设置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

export default [

  // rewrite 规则
  // 动态改变 url 让其走到对应的路由
  // 是 app 内部逻辑
  // 规则从上到下，如果匹配则不会再往下走了

  // from 可以是 正则，字符串
  // 当url 被 正则匹配 或 字符串匹配 minimatch
  // 则会走到对应的 to
  // to 可以是字符串
  // 字符串是否匹配的布尔值

  // 这个例子是改写 页面图标 的路由
  // { from: '/favicon.ico', to: '/public/favicon.ico', break: true },
  // { from: /^\/github\/search\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\/?$/, to: '/github/search?language=$1&word=$2', break: true }
]