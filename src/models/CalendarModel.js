import { DateManager } from "../utility/date"

export class CalendarModel {
  monthsConfig = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }

  static createCalendar = calendarItemsArray => {
    let calendar = {};
    const months = Object.keys(DateManager.getMonths());
    months.map(month => {
      for (let i = 0; i < DateManager.getNumberOfDaysInMonth(month); i++) {
        const filteredCalendarItems = calendarItemsArray.filter(calendarItem => {
          return (DateManager.get(calendarItem.start_date, "month") == month) && (DateManager.get(calendarItem.start_date, "date") == i + 1)
        });
        calendar = {
          ...calendar,
          [month]: {
            ...calendar[month],
            [i + 1]: filteredCalendarItems,
          },
        }
      }
    })

    return calendar
  }
}

