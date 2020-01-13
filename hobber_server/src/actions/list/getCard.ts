/**
 *  === action ===
 *  route: /data/getCard
 *  created at: Tue Nov 05 2019 16:58:35 GMT+0800 (China Standard Time)
 */
import { Context } from "@ke/hobber-core/index"

export default {

  // cors 是否允许 异步跨域访问
  cors: '*',
  // cors: true,
  // cors: '+(https|http)://*.lianjia.com', //正则，走的是minimatch规则

  // 是否页面需要登陆 默认需要登陆
  // 具体逻辑在 configs/action 的 beforeHandler 中体现
  // needLogin: false,

  // 如果路由命中则会走这个方法-
  async handler(ctx: Context) {
    const template = {
      avatar: "https://img.ljcdn.com/growth-activity/1567046979333.jpg.480x640.jpg",
      name: "刘蕴德",
      englishName: "Steven",
      introFeature: "为高净值家庭定制全球资产配置",
      businessArea: "负责美国、英国、澳大利亚、日本、泰国",
      reason: "5年工作经验",
      school: "北京城市学院",
      recommendHouse: "名仕公馆",
      recommendReason: "开发商租赁保障，价格低，位置优越",
    };
    const req = ctx.request.query;
    const totalPage = 5
    let page: any = null;
    if (req.page) page = Number(req.page);
    else {
      ctx.response.ajax({
        code: 500,
        data: [],
        message: "参数错误",
      });
    }
    if (page > totalPage) {
      ctx.response.ajax({
        code: 0,
        data: [],
        message: "已无更多内容",
      });
    } else if (typeof page === "number") {
      ctx.response.ajax({
        code: 0,
        message: "加载成功",
        data: Array.from({ length: 10 }).fill(template),
      });
    }
    // ctx 为 集成自koa 的 context 上下文
    // 详见: http://koajs.com/#context

    // ctx.request  为 koa request 对象
    // 详见: http://koajs.com/#request

    // ctx.response 为 koa response 对象
    // 详见: http://koajs.com/#response

    // 使用 ctx.request.query 获取 url query 参数
    // 使用 ctx.request.body 获取通过 x-www-form-urlencoded 方式提交的 body
    // 使用 ctx.request.form 获取 formData 方式提交的 form 表单

    // 使用 ctx.user 获取当前用户信息 (登陆的情况下) 无TS提示，因为ctx上 koa默认能挂载任意属性
    // 使用 ctx.request.user 获取当前用户信息 (登陆的情况下) 有提示

    // 具体使用API 和 内置Model请参考文档
    // import { HobberGlobal } from '{path}/apis/index'
    // const hGlobal: HobberGlobal = global as HobberGlobal
    // 使用 hGlobal.API.xxx, Model.xxx 调用 api model 中声明的 接口 和 类，均有提示

    // 使用 ctx.render 渲染模版 无TS提示
    // 使用 ctx.response.render 渲染模版 有TS提示
    // 默认使用 ejs, 可以在 configs/view 中设置
    // ctx.response.render('index', { title: 'hobber' })

    // 页面未找到
    // ctx.response.notFound()

    // 页面无权限
    // ctx.response.forbidden()

    // 页面跳转
    // ctx.response.redirect('http://lianjia.com')

    // 页面跳转(使用js方式)
    // ctx.response.redirect('http://lianjia.com', {viaJavascript: true})

    // 系统错误，并且报错
    // ctx.serverError(new Error('server error'))

    // ajax 返回
    // ctx.response.ajax({greeting: 'hello world'})

    // ajax 返回异常
    // ctx.response.ajax(null, {error: true, message: '加载失败'})
  },

  // 如果 handler 代码出错，可以在 catchError 中捕获处理错误
  // 如果没有 catchError, 则会自动抛 500 错误，并返回错误内容
  // async catchError (ctx: Context, error) { },
}
