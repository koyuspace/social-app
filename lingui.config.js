/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: [
    'en',
    'ca',
    'de',
    'en-GB',
    'es',
    'fi',
    'fr',
    'ga',
    'gl',
    'hi',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'pl',
    'pt-BR',
    'ru',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-CN',
    'zh-HK',
    'zh-TW',
  ],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}
