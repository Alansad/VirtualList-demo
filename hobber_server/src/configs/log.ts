/**
 *  === log config ===
 *  日志配置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

 import { system } from "../system";
import path from 'path'

export default {

  // log 文件的保存位置
  logPath: system.base.MATRIX_APPLOGS_DIR,

  // api 记录你通过 API 方式调用的记录
  api: {
    filename: 'api.log',
    // loggingResponseBody: false,
    // loggingRequestBody: false,
  },

  // api 记录项目中所有的代码错误
  access: {
    filename: 'access.log',
    ignore: ['/public/**/*', '/favicon.ico']
  },

  // api 记录项目中所有的代码错误
  error: {
    filename: 'error.log'
  },

  // api 记录需要通过 Logger 主动记录
  // 用于记录跟踪数据
  application: {
    filename: 'application.log'
  }
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  logPath: path.resolve(__dirname, '../../log'),
}
// 测试环境配置
export const testing = {
}