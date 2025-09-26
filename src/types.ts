import type { Access } from 'payload/config'

/**
 * Default plugin options
 * @type {PluginOptionsTypes}
 * @property {boolean} enabled - Enable or disable plugin
 * @property {string} uploadsCollection - Collection name for uploads
 * @property {boolean} localized - Enable localization
 * @property {string || {}} adminGroup - Admin group name
 * @property {Partial<Access>} teamMembersAccess - Access control for team members collection
 * @property {Partial<Access>} departmentsAccess - Access control for departments collection
 */
export const defaultPluginOptions: PluginOptionsTypes = {
  enabled: false,
  uploadsCollection: 'media',
  localized: false,
  adminGroup: undefined,
  teamMembersAccess: undefined,
  departmentsAccess: undefined,
}

export interface PluginOptionsTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean

  /**
   * Collection name for uploads
   * @default 'media'
   */
  uploadsCollection?: string

  /**
   * Enable localization
   * @default false
   */
  localized?: boolean

  /**
   * Admin group name
   * @default ''
   */
  adminGroup?: string | { [key: string]: string }

  /**
   * Access control for team members collection
   * @default { create: () => true, read: () => true, update: () => true, delete: () => true }
   */
  teamMembersAccess?: Partial<Access>

  /**
   * Access control for departments collection
   * @default { create: () => true, read: () => true, update: () => true, delete: () => true }
   */
  departmentsAccess?: Partial<Access>
}

export interface TeamMembersTypes {}

export interface DepartmentsTypes {}
