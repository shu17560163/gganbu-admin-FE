import i18n from "i18next"
import type { InitOptions } from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en"
import zh from "./zh"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources: InitOptions["resources"] = { en: { translation: en }, zh: { translation: zh } }

export type ILanguage = "en" | "zh"

export const lookupLocalStorage = "i18nextLng"
export const localLanguage: ILanguage = (localStorage.getItem(lookupLocalStorage) === "zh" && "zh") || "en"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
