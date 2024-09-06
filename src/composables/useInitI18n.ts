import { useI18n } from 'vue-i18n'
import { useLocalStorage } from '@vueuse/core'
import { computed, watch } from 'vue'
import { matchLanguages } from '@/utils/lang'

export type ColorMode = 'light' | 'dark' | 'system'

export interface LocaleSettings {
  language: string
}

export function getDefaultLanguage(languages: string[]) {
  return matchLanguages(languages, navigator.languages) || 'en-US'
}

export function useLocale() {
  const i18n = useI18n()
  const supportLanguages = i18n.availableLocales
  const lang = useLocalStorage<string>('json-baker-locale', () => getDefaultLanguage(supportLanguages))
  return lang
}

export function useInitI18n() {
  const lang = useLocale()
  const i18n = useI18n()

  watch(lang, (val) => {
    if (val !== i18n.locale.value) {
      i18n.locale.value = val
    }
  }, { immediate: true })
}
