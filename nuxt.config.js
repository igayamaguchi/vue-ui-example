import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  mode: 'universal',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // css: [],
  css: ['~assets/css/colors.css'],
  // css: [
  //   {
  //     src: '~assets/css/colors.css'
  //   }
  // ],
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
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
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
    extend(config, ctx) {
      // config.devtool = 'eval'
    },
    postcss: {
      // browsers: ['IE 11'],
      plugins: [
        // postcssImport(),
        // postcssPresetEnv({
        //   stage: 0,
        //   browsers: 'cover 90%, last 2 major versions',
        //   preserve: false,
        // }),
        // require('postcss-custom-properties')({
        //   preserve: false,
        //   importFrom: './assets/css/colors.css'
        // })
      ]
    }
  },
  sourceMap: false
}
