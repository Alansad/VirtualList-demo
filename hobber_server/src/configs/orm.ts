import { ConnectionOptions } from "typeorm"

export default {
  ormlist: []
} as { ormlist: ConnectionOptions[] };

export const development: {ormlist: ConnectionOptions[]} = {
  ormlist: []
}

export const testing: {ormlist: ConnectionOptions[]} = {
  ormlist: []
}