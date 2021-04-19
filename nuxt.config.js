export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cog',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['h-100']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        "name": "msapplication-TileColor",
        "content": "#ffffff"
      },
      {
        "name": "msapplication-TileImage",
        "content": "/ms-icon-144x144.png"
      },
      {
        "name": "theme-color",
        "content": "#ffffff"
      }
    ],
    link: [
      {
        "rel": "apple-touch-icon",
        "sizes": "57x57",
        "href": "/apple-icon-57x57.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "60x60",
        "href": "/apple-icon-60x60.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "72x72",
        "href": "/apple-icon-72x72.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "76x76",
        "href": "/apple-icon-76x76.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "114x114",
        "href": "/apple-icon-114x114.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "120x120",
        "href": "/apple-icon-120x120.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "144x144",
        "href": "/apple-icon-144x144.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "152x152",
        "href": "/apple-icon-152x152.png"
      },
      {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "/apple-icon-180x180.png"
      },
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "192x192",
        "href": "/android-icon-192x192.png"
      },
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/favicon-32x32.png"
      },
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "96x96",
        "href": "/favicon-96x96.png"
      },
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/favicon-16x16.png"
      },
      {
        "rel": "manifest",
        "href": "/manifest.json"
      }
    ],
    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'cog.losno.co',
        src: 'https://pl.lopez-snowhill.net/js/plausible.js'
      },
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': JSON.stringify({"token": "74378e08f7cf45dc8a82f3d989f8e6ba"})
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/prettyBytes.js',
    '~/plugins/qrcode.js'
  ],


  loading: {
    color: '#FF8F00',
    height: '15px'
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icons: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  render: {
    http2: {
      push: true
    }
  },

  target: 'static'


}
