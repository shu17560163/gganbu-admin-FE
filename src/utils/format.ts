import dayjs from "dayjs"

export const amountFormmat = (value: number | string) => `${value?.toString()}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const dateFormat = (value: string | Date) => (value && dayjs(value).format("DD/MM/YYYY")) || ""
export const timeFormat = (value: string | Date) => (value && dayjs(value).format("YYYY/MM/DD HH:mm:ss")) || ""
