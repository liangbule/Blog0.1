const isDark = new Date().getHours() > 19 && new Date().getHours() < 7;
const axios = require("axios");
const minifyTheme = require("minify-css-string");

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - front-end",
    title: "front-end",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/common.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/axios.js",
    // './plugins/constant.js',
    "./plugins/icons.js",
    // './plugins/global-components',
    "./plugins/filters.js",
    "./plugins/router.js",
    // './plugins/utils.js',
    { src: "./plugins/dom.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "@nuxtjs/vuetify",
      {
        treeShake: true,
        defaultAssets: {
          icons: false
        },
        theme: {
          options: { minifyTheme: minifyTheme.default },
          themes: {
            light: {
              // primary: "#ffeb3b",
              // secondary: "#ffc107",
              // accent: "#3f51b5",
              // error: "#673ab7",
              // warning: "#9c27b0",
              // info: "#e91e63",
              // success: "#00bcd4"
            }
          },
          // light: true,
          dark: isDark
        }
        // treeShake: true
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: false,
    defaultAssets: {
      // nuxt.config.js
      font: false,
      icons: "mdi"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
