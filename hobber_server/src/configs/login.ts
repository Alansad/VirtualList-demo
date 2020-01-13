/**
 *  === login config ===
 *  登陆组件配置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

export default {

  enable: true,    // 是否使用登录
  type: 'cas', // 选择需要的登录方式

  cas: {

    // 登陆项目的标识 找 alps@ke.com 申请，切忌使用其他项目的source && signature
    // 地址http://wiki.lianjia.com/pages/viewpage.action?pageId=313429179#session%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3-%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F
    source: 'source', //示例无效
    signature: 'signature', //示例无效

    // 对应login的环境 production-lianjia | production-ke | testing-test3
    env: 'production-ke',

    // 需要保存的 cookie 值的 key 名
    tokenName: 'example_token',

    // cookie 保存的超时时间
    maxAge: 31536000,

    // 对应的 登录页面 和 登出页面 的的规则
    loginPath: '/login',
    logoutPath: '/logout',

    // 用户登录认证体系
    // loginAuth: ['employee'],

    // 代客设置
    // valet: { appid: 100 },

    // 是否是 link, 掌链等
    // appWebView: true,
  },

  // 使用 general 方式登陆请使用 lianjia.com 或者 ke.com 或其 子域名 为项目访问域名
  // 不然会被继绝的哦~~
  general: {

    // 登陆项目的表示 找uc注册去 uc@lianjia.com
    source: 'source',
    signature: 'signature',

    // 对应的登陆环境(uc, session 服务)  production | testing-test3
    env: 'production',

    // 需要保存的 cookie 值的 key 名
    tokenName: 'lianjia_token',

    // cookie 保存的超时时间
    // maxAge: 31536000,

    // 对应的 登录页面 和 登出页面 的的规则
    loginPath: '/login',
    logoutPath: '/logout',

    // 是否是 link, 掌链等的 webview 中的登陆，走不同的登陆方式
    // 如果不写会通过 ua 自动匹配
    // appWebView: true,
    // appWebView: ctx => true,
  },

  // 登陆使用楼盘字典登录规则
  hdic: {

    // 对应楼盘字典的环境 production | testing | development
    env: 'production',

    // 对于外网用户还是内网用户 iu: 内网用户, ou: 外网用户
    userType: 'iu',

    // 你的项目的 app code，去楼盘字典注册
    appCode: 'bigData',

    // 需要保存的 cookie 值的 key 名
    sessionName: 'sid',
    authKeyName: 'auth',

    // cookie 保存的超时时间
    // maxAge: 31536000,

    // 对应的 登录页面 和 登出页面 的的规则
    loginPath: '/login',
    logoutPath: '/logout',
  }


}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
export const development = {
  cas: {
    env: 'testing-test3',
    source: 'source', //示例无效
    signature: 'signature', //示例无效
  }
}
// 测试环境配置
export const testing = {
  cas: {
    env: 'testing-test3',
    source: 'source', //示例无效
    signature: 'signature', //示例无效
  }
}