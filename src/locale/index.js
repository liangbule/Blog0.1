import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';

import appZH_CN from './models/zhCN';
import appEN_US from './models/enUS';

export const ZH_CN = 'zh_CN';
export const EN_US = 'en_US';
export const antd = (type) => {

  if (type === ZH_CN) {
    return zhCN;
  } else if (type === EN_US) {
    return enUS;
  }

  return zhCN;
}

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next) // 嗅探浏览器当前语言
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // 资源列表
    resources: {
      [ZH_CN]: { translation: appZH_CN },
      [EN_US]: { translation: appEN_US }
    },
    lng: localStorage.getItem('language'), // 默认
    fallbackLng: ZH_CN, // 回退语言
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;