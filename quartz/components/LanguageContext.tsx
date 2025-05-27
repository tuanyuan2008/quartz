import { languages, Language } from "../i18n/languages"

export const LanguageContext = {
  currentLanguage: "en" as Language,
  
  setLanguage(lang: Language) {
    this.currentLanguage = lang
    document.documentElement.lang = lang
    // Store the language preference
    localStorage.setItem("preferredLanguage", lang)
  },

  getLanguage() {
    return this.currentLanguage
  },

  getTranslation(key: string) {
    const lang = languages[this.currentLanguage]
    return key.split('.').reduce((obj, k) => obj?.[k], lang) || key
  },

  init() {
    // Load saved language preference or use browser default
    const savedLang = localStorage.getItem("preferredLanguage") as Language
    const browserLang = navigator.language.split('-')[0] as Language
    const defaultLang = savedLang || (browserLang in languages ? browserLang : 'en')
    this.setLanguage(defaultLang)
  }
} 