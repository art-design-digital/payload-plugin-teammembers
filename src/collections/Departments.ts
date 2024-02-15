import { CollectionConfig } from 'payload/dist/exports/types'
import { PluginOptionsTypes, defaultPluginOptions } from '../types'
import deepmerge from '../utils/deepmerge'

export const Departments = (userPluginOptions: PluginOptionsTypes) => {
  const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions)

  return {
    slug: 'departments',
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name'],
      description: {
        en: 'Create your own departments and group team members.',
        de: 'Erstellen Sie sich eigene Abteilungen und gruppieren Sie Teammitglieder.',
      },
    },
    labels: {
      singular: {
        en: 'Department',
        de: 'Abteilung',
      },
      plural: {
        en: 'Departments',
        de: 'Abteilungen',
      },
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
        label: {
          en: 'Name',
          de: 'Name',
        },
        localized: pluginOptions?.localized,
        required: true,
        admin: {
          description: {
            en: 'Please enter the name of the department.',
            de: 'Bitte geben Sie den Namen der Abteilung ein.',
          },
        },
      },
    ],
  } as CollectionConfig
}
