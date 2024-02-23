import type { VueMessageType } from 'vue-i18n'
import { createI18n, type I18nOptions } from 'vue-i18n'
import en from "@/locales/en.json"
import fr from "@/locales/fr.json"

const commonFormats = {
  currency: {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  decimal: {
    style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
  },
  percent: {
    style: 'percent', useGrouping: false, maximumFractionDigits: 2,
  },
  weight: {
    style: 'unit',
    unit: 'kilogram'
  }
}

const numberFormats = {
  'en': commonFormats,
  'es': commonFormats,
}

const commonDateTimeFormats = {
  date: { dateStyle: "long" },
  datetime: { dateStyle: "long", timeStyle: "medium" },
}

const datetimeFormats = {
  'en': commonDateTimeFormats,
  'es': commonDateTimeFormats,
}

const options: I18nOptions = {
  fallbackLocale: "en",
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    fr: fr,
  },
  modifiers: {
    abbrevation: (str: VueMessageType) => {
      const firstLetters = str
        .split(" ")
        .map((word: string) => word.slice(0, 4))
        .join(". ")
      return firstLetters
    },
    capitalizeFirst: (str: VueMessageType) =>
      str.replace(/(^\w{1})|(\s+\w{1})/g, (l: string) => l.toUpperCase()),
  },
  numberFormats,
  datetimeFormats,
}

const i18n = createI18n<false, typeof options>(options)

export default i18n
