import url from 'url'
import { Context } from '@ke/hobber-core/index'

// 系统错误页面通用返回
// ctx.response.serverError(new Error(''系统出错了...''))

export default (ctx: Context, config) => (error) => {

  const referrer = ctx.request.get('referrer') || ''
  if (
    url.parse(referrer).host === ctx.request.host &&
    ctx.request.headers['x-requested-with'] === 'XMLHttpRequest'
  ) {
    ctx.response.ajax(null, {error: 'SERVER_ERROR', message: error})
    return
  }
  ctx.response.status = 200
  ctx.response.render('500', { error })
}