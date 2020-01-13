/**
 *  === app config ===
 *  项目应用的配置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */
import { system } from "../system";

export default {

  name: 'hobber 项目模板',

  // 项目监听的端口
  port: system.base.PORT,

  // 是否前端有代理
  // 如果你的server 前面还有 nginx 等的代理则选择 true
  proxy: true,
  // proxy: {
  //   'x-forwarded-proto': 'x-ssl-header',
  //   'x-forwarded-for': 'x-real-ip'
  // }
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  port: 8081,
  proxy: false
}
// 测试环境配置
export const testing = {
}
