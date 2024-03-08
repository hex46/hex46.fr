import { ui, defaultLang } from '@i18n/ui.ts';

export function useTranslations() {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[defaultLang][key];
  }
}