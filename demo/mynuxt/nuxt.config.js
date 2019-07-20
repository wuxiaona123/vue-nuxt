
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css' },
    ],
    // script:[
    //   {src:"http://webapi.amap.com/maps?v=1.4.4&key=cbf58b7cf40a5f08e681c613bf0604a5"},
    // ]
    // script: [
    //   { src: 'https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js' },
    //   { src: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js' },
    // ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // 但是 npm run build 就尴尬了 样式丢失了 这里ssr要true
    // { src: '~/plugins/MintUI', ssr: true },
    '~/plugins/MintUI',
    '~/plugins/vue-map',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  
  },
  // vendor:['element-ui']   //防止element-ui被打包多次
}
