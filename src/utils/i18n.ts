// src/i18n.ts
import { createI18n } from 'vue-i18n';
import en from '@/langs/en.json';
import zh from '@/langs/zh.json';

const messages = {
  en,
  zh,
};

const sLang = localStorage.getItem('lang');

const i18n = createI18n({
  locale: sLang ? sLang : 'zh', // 默认语言
  fallbackLocale: sLang ? sLang : 'zh',
  messages,
});

export default i18n;
