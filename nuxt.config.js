
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/base.pcss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [{src: '~plugins/global-components.js', mode: 'client'}],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 build: {
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      // Disable a plugin by passing false as value
      'postcss-url': false,
      'postcss-nested': {},
      'postcss-preset-env': {},
    },
    preset: {
      // Change the postcss-preset-env settings
      autoprefixer: {
        grid: true
      }
    }
  }
}
}
