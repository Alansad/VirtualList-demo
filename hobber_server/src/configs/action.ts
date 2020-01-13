/**
 *  === action config ===
 *  业务代码配置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

export default {

  // 这是默认是 action 项目配置

  defaultAction: {

    // 默认 action 项，定义了页面登录等功能
    // 是否 login 是业务配置，如果不需要则 needLogin 为 false 即可
    needLogin: false,

    // 如果 beforeHandler return false 则不会触发 handler
    // 记得在 beforeHandler 中 不要出现停滞的状态 真不行就抛异常
    async beforeHandler (ctx) {
      
      // 如果 needLogin 为 true
      // 则如果登陆则将用户信息附属到 user 变量中
      // 如果没有登陆自动跳转登陆页面
      if (this.needLogin) {
        const user = ctx.request.user = ctx.user =
          await ctx.request.checkLogin()
        if (!user) return false
      }

      // 如果 needLogin 为 false
      // 则不检测登陆状态
    },

    // 在此处处理 所有业务逻辑
    async handler (ctx) {
      ctx.response.notFound('还没有定义action')
    }
  }
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {}
// 测试环境配置
export const testing = {}