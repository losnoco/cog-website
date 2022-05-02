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
      { hid: 'description', name: 'description', content: 'A free and open source audio player for macOS.'},
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
      },
      {
        "property": "og:url",
        "content": "https://cog.losno.co/"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:title",
        "content": "Cog"
      },
      {
        "property": "og:description",
        "content": "A free and open source audio player for macOS."
      },
      {
        "property": "og:image",
        "content": "https://cog.losno.co/hero.png"
      },
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "property": "twitter:domain",
        "content": "cog.losno.co"
      },
      {
        "property": "twitter:url",
        "content": "https://cog.losno.co/"
      },
      {
        "name": "twitter:title",
        "content": "Cog"
      },
      {
        "name": "twitter:description",
        "content": "A free and open source audio player for macOS."
      },
      {
        "name": "twitter:image",
        "content": "https://cog.losno.co/hero.png"
      }
    ],
    "link": [
      {
         "rel": "apple-touch-icon",
         "sizes": "180x180",
         "href": "/apple-touch-icon.png"
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
         "sizes": "16x16",
         "href": "/favicon-16x16.png"
      },
      {
         "rel": "manifest",
         "href": "/site.webmanifest"
      }
   ],
    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'cog.losno.co',
        src: 'https://pl.lopez-snowhill.net/essential.js'
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
    babel: {
      compact: true,
    },
  },

  render: {
    http2: {
      push: true
    }
  },

  target: 'static'


}
