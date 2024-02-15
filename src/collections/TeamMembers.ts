import { CollectionConfig } from 'payload/dist/exports/types'
import { PluginOptionsTypes, defaultPluginOptions } from '../types'
import deepmerge from '../utils/deepmerge'

export const TeamMembers = (userPluginOptions: PluginOptionsTypes) => {
  const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions)

  return {
    slug: 'team-members',
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'position', 'email'],
      description: {
        en: 'Create your own team members and add them to your website.',
        de: 'Erstellen Sie sich eigene Teammitglieder und fügen Sie diese auf Ihrer Website ein.',
      },
    },
    labels: {
      singular: {
        en: 'Team Member',
        de: 'Teammitglied',
      },
      plural: {
        en: 'Team Members',
        de: 'Teammitglieder',
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
        name: 'name',
        label: {
          en: 'Name',
          de: 'Name',
        },
        type: 'text',
        required: true,
        admin: {
          description: {
            en: 'Please enter the name of the team member.',
            de: 'Bitte geben Sie den Namen des Teammitglieds ein.',
          },
        },
      },
      {
        name: 'position',
        label: {
          en: 'Position',
          de: 'Position',
        },
        type: 'text',
        localized: pluginOptions?.localized,
        admin: {
          description: {
            en: 'Please enter the position of the team member.',
            de: 'Bitte geben Sie die Position des Teammitglieds ein.',
          },
        },
      },
      {
        type: 'relationship',
        relationTo: 'departments',
        name: 'department',
        label: {
          en: 'Department',
          de: 'Abteilung',
        },
        admin: {
          description: {
            en: 'Please select the department of the team member.',
            de: 'Bitte wählen Sie die Abteilung des Teammitglieds aus.',
          },
          allowCreate: true,
        },
        hasMany: false,
      },
      {
        type: 'email',
        name: 'email',
        label: {
          en: 'Email',
          de: 'E-Mail',
        },
        admin: {
          description: {
            en: 'Please enter the email of the team member.',
            de: 'Bitte geben Sie die E-Mail des Teammitglieds ein.',
          },
        },
      },
      {
        type: 'text',
        name: 'phone',
        label: {
          en: 'Phone',
          de: 'Telefon',
        },
        admin: {
          description: {
            en: 'Please enter the phone number of the team member.',
            de: 'Bitte geben Sie die Telefonnummer des Teammitglieds ein.',
          },
        },
      },
      {
        name: 'image',
        label: {
          en: 'Photo',
          de: 'Foto',
        },
        type: 'upload',
        relationTo: pluginOptions?.uploadsCollection,
        admin: {
          description: {
            en: 'Please upload a photo of the team member.',
            de: 'Bitte laden Sie ein Foto des Teammitglieds hoch.',
          },
        },
      },
    ],
  } as CollectionConfig
}
