/**
 *  === response ===
 *  name: myResponse
 *  created at: Thu Nov 07 2019 19:40:22 GMT+0800 (中国标准时间)
 */
import { Context } from "@ke/hobber-core/index"

// 一个标准返回
export default (ctx: Context, config) => (args) => {

  // ctx 为 继承自koa 的 context 上下文
  // 详见: http://koajs.com/#context

  // ctx.request  为 koa request 对象
  // 详见: http://koajs.com/#request

  // ctx.response 为 koa response 对象
  // 详见: http://koajs.com/#response


  // 返回 404 页面的例子
  // ctx.response.status = 200
  // ctx.response.render('404', {args})
}