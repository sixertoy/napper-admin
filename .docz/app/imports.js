export const imports = {
  'components/smart-layout/SmartLayout.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-smart-layout-smart-layout" */ 'components/smart-layout/SmartLayout.mdx'
    ),
}
