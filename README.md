# Team members plugin for PayloadCMS

This plugin gives you the ability to create and manage team members in the backend of a PayloadCMS for your business, company, team, organization, etc.

To use the plugin it is better to have

* An understanding of the basic Payload concepts
* And some JavaScript/Typescript experience

## Background

The plugin installs two new collections to your PayloadCMS: TeamMembers and Departments. Every TeamMember is related to one Department.

### How to install a plugin

To install te plugin first download it from npm via

```terminal
npm install @artdesigndigital/payload-plugin-teammembers
```

or

```terminal
yarn add @artdesigndigital/payload-plugin-teammembers
```

To use the plugin simple add it to your payload.config.ts

```ts
import teamMemberPlugin from '@artdesigndigital/payload-plugin-teammembers'

export const config = buildConfig({
  plugins: [
    teamMemberPlugin(
      {
        enabled: true,
        localized: true,
        uploadsCollection: 'media'
      }
    )
  ]
});
```

# Questions
Please contact [art&design digital](mailto:info@ad-digital.de) with any questions about using this plugin.
