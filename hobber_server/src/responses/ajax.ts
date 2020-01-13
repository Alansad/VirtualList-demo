import { _i_object_any } from "@ke/hobber-core/interface/interface_base.impl"
import { Context } from "@ke/hobber-core/index"
// ajax 通用返回方法
// ctx.response.ajax(data)
// ctx.response.ajax(data, {error: true, message: '加载失败'})
// 成功， 失败的返回值在 config/response.js 中定义

export default (ctx: Context, config: _i_object_any) => (data: _i_object_any, errorReason: { error?: any, message?: string}) => {

  let {error='', message=''} = errorReason || {}
  let code = config.code.SUCCESS

  if (error) {
    code = config.code[error] || config.code.ERROR
  }

  ctx.response.status = 200
  ctx.response.json({ code, data, msg: message })
}