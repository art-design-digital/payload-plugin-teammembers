/**
 * Default plugin options
 * @type {PluginOptionsTypes}
 * @property {boolean} enabled - Enable or disable plugin
 * @property {string} uploadsCollection - Collection name for uploads
 * @property {boolean} localized - Enable localization
 * @property {string || {}} adminGroup - Admin group name
 */
export const defaultPluginOptions: PluginOptionsTypes = {
  enabled: false,
  uploadsCollection: 'media',
  localized: false,
  adminGroup: undefined,
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
}

export interface TeamMembersTypes {}

export interface DepartmentsTypes {}
