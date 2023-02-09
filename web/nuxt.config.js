import colors from 'vuetify/lib/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~assets/css/styles.scss'
    },
    {
      src: 'material-design-icons-iconfont/dist/material-design-icons.css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  vuetify: {
    defaultAssets: false,
    icons: {
      iconfont: 'md'
    },
    treeShake: true,
    customVariables: ['~/assets/css/vuetify.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          // change color
          primary: colors.indigo,
          secondary: colors.cyan
        },
        dark: {
          // change color
          primary: colors.indigo,
          secondary: colors.cyan
        }
      }
    }
  },
  router: {
    base: '/wedding-profile-sample/web/',
    middleware: ['trailingslash'],
    trailingSlash: true
  },
  generate: {
    dir: 'docs'
  }
}
