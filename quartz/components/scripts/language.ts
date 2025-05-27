import { LanguageContext } from "../LanguageContext"

export function initLanguage() {
  LanguageContext.init()
}

export function getTranslation(key: string) {
  return LanguageContext.getTranslation(key)
} 