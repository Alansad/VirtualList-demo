/**
 *  === action ===
 *  route: /
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */
import { Context } from "@ke/hobber-core/index";

export default {

  // 是否页面需要登陆
  needLogin: false,

  async handler (ctx: Context) {

    return ctx;
  }
}
