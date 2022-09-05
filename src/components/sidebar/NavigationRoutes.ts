export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'medium-editor',
      displayName: 'menu.mediumEditor',
      meta: {
        icon: 'vuestic-iconset-forms',
      },
    },

    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },

    {
      name: 'markup',
      displayName: 'menu.markupTables',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
    },

  ] as INavigationRoute[],
}
