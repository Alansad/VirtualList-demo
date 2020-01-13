/**
 *  === action ===
 *  route: /about
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */
import { Context } from "@ke/hobber-core/index";

export default {

  // 是否页面需要登陆
  needLogin: true,

  async handler (ctx: Context) {
    //通过 ctx.request.user 获取用户信息
    const user = ctx.request.user

    // 渲染页面吧, about 是对应 view 文件夹下的文件
    ctx.response.render('about', { user })
  }
}