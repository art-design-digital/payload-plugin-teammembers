/**
 * Default plugin options
 * @type {PluginOptionsTypes}
 * @property {boolean} enabled - Enable or disable plugin
 * @property {string} uploadsCollection - Collection name for uploads
 * @property {boolean} localized - Enable localization
 */
export const defaultPluginOptions: PluginOptionsTypes = {
  enabled: false,
  uploadsCollection: 'media',
  localized: false,
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
}

export interface TeamMembersTypes {}

export interface DepartmentsTypes {}
