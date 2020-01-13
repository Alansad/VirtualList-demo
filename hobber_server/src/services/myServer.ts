/**
 *  === service ===
 *  name: myServer
 *  created at: Thu Nov 07 2019 19:40:28 GMT+0800 (中国标准时间)
 */

import { Context } from "@ke/hobber-core/index"

// 执行当前 myServer 的前置services，实例为
// export const dependencies = ['before']

export default config => {
  // config 会读取在 services/ 下的同名文件

  return async (ctx: Context, next) => {

    // 这边是一个 koa 中间件的编写

    // ctx 为 hobber的继承自koa 的 context 上下文
    // 详见: http://koajs.com/#context

    // ctx.request  为 koa request 对象
    // 详见: http://koajs.com/#request

    // ctx.response 为 koa response 对象
    // 详见: http://koajs.com/#response

    return next()
  }
}