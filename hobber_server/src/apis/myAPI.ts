/**
 *  === api ===
 *  api: myAPI
 *  created at: Thu Nov 07 2019 19:40:06 GMT+0800 (中国标准时间)
 */
import { _i_object_any } from "@ke/hobber-core/interface/interface_base.impl";
import { _i_api, _i_api_fn_config } from '@ke/hobber-core/interface/hobber_hooks/interface_api'
import { Context } from '@ke/hobber-core/index' //外层 index.d.ts

export default (api: _i_api) => {

  api.config = {
    // 接口超时时间
    timeout: 10000,

    // 默认的返回值简单约定， {code: , data:, msg:} 的形式返回
    // 如果是这种返回形式的话，那么通过下面参数，做接口检查
    codeKey: 'code',
    dataKey: 'data',
    messageKey: 'msg',

    // 可以使用以下方法 处理 api 请求前的数据
    // requestHandler (req: _i_api_fn_config, ctx: Context) {}

    // 可以使用以下方法 处理 api 返回的数据
    // responseHandler (res: any, ctx: Context): _i_object_any | undefined {}

    // 当 [codeKey] === [successCode] 是认为请求成功
    successCode: 100000,

    // 接口的协议，域名，端口
    base: 'http://<domain>:[port]',

    // 上行格式 可以是:
    // application/x-www-form-urlencoded
    // multipart/form-data
    // application/json
    // 等等
    contentType: 'application/x-www-form-urlencoded'
  }

  // 定义接口 这边的设置是在 config 基础上的
  // 内部的没有点的值复用 config 中的
  api('__api_name__', {

    // 接口 path, 可以使用 {xxx} 的方法动态修改 uri
    // 在请求的 uriReplacer 参数设置
    uri: 'i/{am}/a/path',

    // 接口访问方式 get | post | delete | put ...
    method: 'get',

    // 接口参数检查
    parameters: {
      // string: api.type.string.required,
      // number: api.type.number.required
    }
  })

  // api(....) 继续定义下一个接口
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = api => {

}

// 测试环境配置
export const testing = api => {}
