import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  mode: 'universal',

  head: {
    titleTemplate: "Swordroot's portfolio site",
    meta: [
      {
        charset: 'utf-8'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },

  server: {
    port: 2000
  },

  modules: ['@nuxtjs/axios'],
  plugins: [
    {
      src: '~/plugins/ogpGetter.ts',
      mode: 'server'
    }
  ],
  axios: {},
  buildDir: './functions/dist',
  publicPath: '/'
};

export default config;
