# Team members plugin for PayloadCMS

This plugin gives you the ability to create and manage team members in the backend of a PayloadCMS for your business, company, team, organization, etc.

To use the plugin it is better to have

* An understanding of the basic Payload concepts
* And some JavaScript/Typescript experience

## Background

The plugin installs two new collections to your PayloadCMS: TeamMembers and Departments. Every TeamMember is related to one Department.

### How to install the plugin

To install te plugin first download it from npm via

```terminal
npm install @art-design-digital/payload-plugin-teammembers
```

or

```terminal
yarn add @art-design-digital/payload-plugin-teammembers
```

To use the plugin simple add it to your payload.config.ts

```ts
export const config = buildConfig({
  plugins: [
    teamMemberPlugin(
      {
        enabled: true,
        localized: true,
        uploadsCollection: 'media',
        adminGroup: {
          en: 'Company data',
          de: 'Firmendaten',
        },
      }
    )
  ]
});
```

## PluginOption Properties
There are some properties you can use to modify the behavior of the plugin.

| **Name** 	| **Description** 	| **Type** 	| **Default** 	|
|---	|---	|---	|---	|
| enabled 	| Switches the whole plugin on or off 	| boolean 	| `false` 	|
| localized 	| Decides if the plugin has localization features or not. This only effects the field _position_ because all other data is language independent.<sup>*</sup> 	| boolean 	| `false` 	|
| uploadsCollection 	| Tell the plugin which collection shall be used for uploading a photo for a team member. 	| string 	| `'media'` 	|
|adminGroup|  Put the collections that come with this plugin into a custom existing or new groups in your admin UI.| string \|\| {\[key: string\]: string}| `undefined`|

<em>\* Please be sure the have the localization feature enabled in your payload instance. The plugin won't break but there is no sense in enabling a localized plugin with no localization.</em>

## Available team member fields
The fields that can be used inside a team member are

| **Field** 	| **Usage** 	| **Type** 	|
|---	|---	|---	|
| name 	| The name of your team member. 	| text 	|
| position 	| Position of the member. E.g. Key account manager. 	| text 	|
| department 	| Which department the members belongs to. 	| relationship 	|
| email 	| The e-mail address of the member. 	| email 	|
| phone 	| The phone or mobile number. No specific format. It is on you to format is when fetching via API. 	| text 	|
| photo 	| A photo of the team member. 	| upload 	|

## Available department fields
The fields that can be used inside a department are

| **Field** 	| **Usage** 	| **Type** 	|
|---	|---	|---	|
| name 	| The name of your department. 	| text 	|

## Language support
The plugin supports different languages when you use it in your PayloadCMS AdminUI. Please notice that all translations are done by machine from german as the starting point. Please contact us if there are any mistakes in a translation.

Supported languages at this point are:

| **Language** | **Code** |
|--- |--- |
| English | en |
| German | de |
| French | fr |
| Spanish | es |
| Portuguese | pt |
| Italian | it |
| Dutch | nl |
| Russian | ru |
| Japanese | ja |
| Chinese | zh |
| Polish | pl |
| Swedish | sv |
| Czech | cs |
| Turkish | tr |

# Questions
Please contact [art&design digital](mailto:info@ad-digital.de) with any questions about using this plugin.
