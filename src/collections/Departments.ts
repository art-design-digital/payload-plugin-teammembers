import { CollectionConfig } from 'payload/dist/exports/types'
import { translations } from '../translations/departments'
import { PluginOptionsTypes, defaultPluginOptions } from '../types'
import deepmerge from '../utils/deepmerge'

export const Departments = (userPluginOptions: PluginOptionsTypes) => {
  const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions)

  return {
    slug: 'departments',
    admin: {
      group: pluginOptions?.adminGroup || undefined,
      useAsTitle: 'name',
      defaultColumns: ['name'],
      description: translations.admin.description,
    },
    labels: {
      singular: translations.labels.singular,
      plural: translations.labels.plural,
    },
    access: {
      create: () => true,
      read: () => true,
      update: () => true,
      delete: () => true,
    },
    fields: [
      {
        type: 'text',
        name: 'name',
        label: translations.fields.name.label,
        localized: pluginOptions?.localized,
        required: true,
        admin: {
          description: translations.fields.name.admin.description,
        },
      },
    ],
  } as CollectionConfig
}
