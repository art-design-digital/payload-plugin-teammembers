import type { Config, Plugin } from 'payload/config'

import { defaultPluginOptions, type PluginOptionsTypes } from './types'
import { TeamMembers } from './collections/TeamMembers'
import { Departments } from './collections/Departments'
import deepmerge from './utils/deepmerge'

type PluginType = (userPluginOptions: PluginOptionsTypes) => Plugin

export const teamMemberPlugin =
  (userPluginOptions?: PluginOptionsTypes): Plugin =>
  incomingConfig => {
    const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions || {})

    let config = { ...incomingConfig }

    if (pluginOptions.enabled === false) {
      return config
    }

    config.collections = [
      ...(config.collections || []),
      Departments(pluginOptions),
      TeamMembers(pluginOptions),
    ]

    return config
  }
