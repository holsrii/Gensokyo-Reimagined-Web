// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-typed-router',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/partytown',
  ],
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'ja',
        file: 'ja.json',
      },
      {
        code: 'zh',
        file: 'zh.json',
      },
      {
        code: 'es',
        file: 'es.json',
      },
      {
        code: 'fr',
        file: 'fr.json',
      },
      {
        code: 'de',
        file: 'de.json',
      },
      {
        code: 'pl',
        file: 'pl.json',
      },
      {
        code: 'el',
        file: 'el.json',
      },
      {
        code: 'ru',
        file: 'ru.json',
      },
      {
        code: 'tr',
        file: 'tr.json',
      },
      {
        code: 'uk',
        file: 'uk.json',
      },
      {
        code: 'cs',
        file: 'cs.json',
      },
    ],
    langDir: 'lang',
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  extends: ['nuxt-seo-kit'],
  css: ['@/assets/css/main.css'],
  experimental: {
    writeEarlyHints: false,
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://gensokyoreimagined.net',
      siteName: 'Gensokyo Reimagined',
      siteDescription: 'Welcome to Gensokyo!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
})
