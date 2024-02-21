import { CollectionConfig } from 'payload/dist/exports/types'
import { teamMemberTranslations } from '../translations'
import { PluginOptionsTypes, defaultPluginOptions } from '../types'
import deepmerge from '../utils/deepmerge'

export const TeamMembers = (userPluginOptions: PluginOptionsTypes) => {
  const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions)

  return {
    slug: 'team-members',
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'position', 'email'],
      description: teamMemberTranslations.admin.description,
    },
    labels: {
      singular: teamMemberTranslations.labels.singular,
      plural: teamMemberTranslations.labels.plural,
    },
    access: {
      create: () => true,
      read: () => true,
      update: () => true,
      delete: () => true,
    },
    fields: [
      {
        name: 'name',
        label: teamMemberTranslations.fields.name.label,
        type: 'text',
        required: true,
        admin: {
          description: teamMemberTranslations.fields.name.admin.description,
        },
      },
      {
        name: 'position',
        label: teamMemberTranslations.fields.position.label,
        type: 'text',
        localized: pluginOptions?.localized,
        admin: {
          description: teamMemberTranslations.fields.position.admin.description,
        },
      },
      {
        type: 'relationship',
        relationTo: 'departments',
        name: 'department',
        label: teamMemberTranslations.fields.department.label,
        admin: {
          description: teamMemberTranslations.fields.department.admin.description,
          allowCreate: true,
        },
        hasMany: false,
      },
      {
        type: 'email',
        name: 'email',
        label: teamMemberTranslations.fields.email.label,
        admin: {
          description: teamMemberTranslations.fields.email.admin.description,
        },
      },
      {
        type: 'text',
        name: 'phone',
        label: teamMemberTranslations.fields.phone.label,
        admin: {
          description: teamMemberTranslations.fields.phone.admin.description,
        },
      },
      {
        name: 'image',
        label: teamMemberTranslations.fields.image.label,
        type: 'upload',
        relationTo: pluginOptions?.uploadsCollection,
        admin: {
          description: teamMemberTranslations.fields.image.admin.description,
        },
      },
    ],
  } as CollectionConfig
}
