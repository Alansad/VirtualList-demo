/**
 *  === homework ===
 *
 *  created at: Mon Nov 04 2019 20:44:43 GMT+0800 (China Standard Time)
 */

`
   _   _  _ ___ _  _     _     _____  _ __
  | |_| || | - | || |--.| |--.| | -  || --|
  |  _| || |   | || -  || -  || |--- ||  \\
  |_| |_||_|_-_|_||____||____||_|_-_ ||   \\

  with ♥︎ by ke-fe
`

import path from 'path'
import "babel-polyfill"
import Hobber from '@ke/hobber-core'

const appPath = path.resolve(__dirname)
const app = Hobber({ appPath: appPath })
app.then((hobber)=>{ hobber.lift() })
