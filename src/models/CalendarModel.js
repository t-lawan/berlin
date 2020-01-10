import { DateManager } from "../utility/date"

export class CalendarModel {
  monthsConfig = {
    1: 31,
    2: 29,
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
    const dates = DateManager.getCalendar();
    const years = Object.keys(dates);
    years.forEach(year => {
      const months = Object.keys(dates[year]);
      months.map(month => {
        for (let i = 0; i < DateManager.getNumberOfDaysInMonth(month, year); i++) {
          const filteredCalendarItems = calendarItemsArray.filter(calendarItem => {
            return isCurrentDate(calendarItem, i, month, year);
          });
          calendar = {
            ...calendar,
            [`${year}-${month}`]: {
              ...calendar[`${year}-${month}`],
              [i + 1]: filteredCalendarItems,
            },
          }
        }
      })
    })
    return calendar
  }

}

const isCurrentDate = (calendarItem, date, month, year) => {
  return (DateManager.get(calendarItem.start_date, "date") == date + 1) 
  && (DateManager.get(calendarItem.start_date, "month") + 1 == month)
  && (DateManager.get(calendarItem.start_date, "year") == year)
}

