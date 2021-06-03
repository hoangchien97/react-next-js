/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  i18n: {
    lng: 'en',
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localePath: path.resolve('./public/locales'),
    partialBundledLanguages: true,
    localeDetection: false
  }
};
