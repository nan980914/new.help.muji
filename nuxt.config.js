import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#51a0f7'
  },
  i18n: {
    baseUrl: ({ $docus }) => ($docus && $docus.settings && $docus.settings.url) || '',
    locales: [{
      code: 'zh-CN',
      iso: 'zh-CN',
      file: 'zh-CN.js',
      name: '中文'
    }],
    defaultLocale: 'zh-CN',
    parsePages: false,
    lazy: true,
    seo: false
  },
})
