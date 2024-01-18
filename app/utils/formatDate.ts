import { Locale, format, parseISO } from "date-fns"
import I18n from "i18n-js"

import ar from "date-fns/locale/ar-SA"
import ko from "date-fns/locale/ko"
import en from "date-fns/locale/en-US"

type Options = Parameters<typeof format>[2]

const getLocale = (): Locale => {
  const locale = I18n.currentLocale().split("-")[0]
  return locale === "ar" ? ar : locale === "ko" ? ko : en
}

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = getLocale()
  const dateOptions = {
    ...options,
    locale,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}

export const covertDayofWeek = (fullDay) => {
   switch (fullDay) {
    case 'Monday':
      return 'T2';
    case 'Tuesday':
      return 'T3';
    case 'Wednesday':
      return 'T4';
    case 'Thursday':
      return 'T5';
    case 'Friday':
      return 'T6';
    case 'Saturday':
      return 'T7';
    case 'Sunday':
      return 'CN';
    default:
      return '';
  }
}

export const customArrayWeek = () => {
    const currentDate = new Date();

    // Tạo mảng chứa 5 ngày xung quanh ngày hiện tại
    const dateArray = [];

    for (let i = -2; i <= 2; i++) {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);
        dateArray.push(newDate.toISOString().slice(0, 10)); // Lấy phần YYYY-MM-DD
    }

  // console.log(dateArray);
  return dateArray
 }
 