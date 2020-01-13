/**
 *  === system config ===
 *  线上环境会有 op 的配置，所有资源需要读取配置
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

import fs from 'fs'
import path from 'path'
import ini from 'ini'

interface _i_object_any {
  [propsNme: string]: any
}
interface _i_config_base {
  PORT: number,
  MATRIX_PRIVDATA_DIR: string,
  MATRIX_APPLOGS_DIR: string
}
interface _i_config {
  redis: _i_object_any;
  base: _i_config_base;
  mysql: _i_object_any;
}

let config: _i_config = { base: {}, mysql: {}, redis: {} } as _i_config;

// 获取 op 的配置项
function getSystemDir (parentPath) {
  while (parentPath != '/') {
    const systemPath = path.join(parentPath, 'system')
    if ( fs.existsSync(systemPath) ) return systemPath
    parentPath = path.dirname(parentPath)
  }
  return '/'
}

const filePath = path.join(getSystemDir(__dirname), 'MATRIX_ENV_CONF')

if (fs.existsSync(filePath)) {
  Object.assign( config, ini.parse(fs.readFileSync(filePath, 'utf-8')) )
}

// Object.assign(global, { System: Object.assign(global.System || {}, config) })

export const system = config