import { setLocale } from "yup"
import i18n from "./i18n"

const { t } = i18n.global

export default setLocale({
  array: {
    length: ({ label, length }) => t("yup.array.length", { label, length }),
    max: ({ label, max }) => t("yup.array.max", { label, max }),
    min: ({ label, min }) => t("yup.array.min", { label, min }),
  },
  boolean: {
    isValue: ({ label, value }) => t("yup.boolean.isValue", { label, value }),
  },
  date: {
    max: ({ label, max }) => t("yup.date.max", { label, max }),
    min: ({ label, min }) => t("yup.date.min", { label, min }),
  },
  mixed: {
    default: ({ label }) => t("yup.mixed.default", { label }),
    defined: ({ label }) => t("yup.mixed.defined", { label }),
    // notNull: () => t('yup.mixed.notNull'), TODO
    notOneOf: ({ label, values }) => t("yup.mixed.notOneOf", { label, values }),
    notType: ({ label, type }) => t('yup.mixed.notType', { label, type }),
    oneOf: ({ label, values }) => t("yup.mixed.oneOf", { label, values }),
    required: ({ label }) => t("yup.mixed.required", { label }),
  },
  number: {
    integer: ({ label }) => t("yup.number.integer", { label }),
    lessThan: ({ label, less }) => t("yup.number.lessThan", { label, less }),
    max: ({ label, max }) => t("yup.number.max", { label, max }),
    min: ({ label, min }) => t("yup.number.min", { label, min }),
    moreThan: ({ label, more }) => t("yup.number.moreThan", { label, more }),
    negative: ({ label }) => t("yup.number.negative", { label }),
    positive: ({ label }) => t("yup.number.positive", { label }),
  },
  object: {
    noUnknown: ({ label }) => t("yup.number.lessThan", { label }), // TODO
  },
  string: {
    email: ({ label }) => t("yup.string.email", { label }),
    length: ({ label, length }) => t("yup.string.length", { label, length }),
    lowercase: ({ label }) => t("yup.string.lowercase", { label }),
    matches: ({ label, regex }) => t("yup.string.matches", { label, regex }),
    max: ({ label, max }) => t("yup.string.max", { label, max }),
    min: ({ label, min }) => t("yup.string.min", { label, min }),
    trim: ({ label }) => t("yup.string.trim", { label }),
    uppercase: ({ label }) => t("yup.string.uppercase", { label }),
    url: ({ label }) => t("yup.string.url", { label }),
    uuid: ({ label }) => t("yup.string.uuid", { label }),
  }
})
