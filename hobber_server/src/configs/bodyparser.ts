/**
 *  === bodyparser config ===
 *  将body中的数据尝试转化为json/form/text
 *  https://www.npmjs.com/package/koa-bodyparser
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

export default {
  // 如果 post 的数据过大，请更改这个数值
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
}

// 开发环境配置
export const development = {
}
// 测试环境配置
export const testing = {
}