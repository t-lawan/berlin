import moment from "moment"
import 'moment/locale/en-gb';
import 'moment/locale/de';
moment.updateLocale('en', {
  monthsShort : [
      "Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ]
});

moment.updateLocale('de', {
  monthsShort : [
      "Jan", "Feb", "März", "Apr", "Mai", "Juni",
      "Juli", "Aug", "Sept", "Okt", "Nov", "Dez"
  ]
});
export class DateManager {
  static get = (date, type = "year" | "month" | "date") => {
    return moment(date, "YYYY-MM-DD HH:mm Z").get(type);
  }

  static getDaysFromCurrentDate = (date) => {
    return moment().diff(moment(date), 'day');
  }

  static getNumberOfDaysInMonth = (monthNum, year) => {
    const calendar = this.getCalendar();
    return calendar[year][monthNum].numberOfDays
  }

  static getMonthText = (monthNum, lang) => {
    return moment().locale(lang).month(monthNum - 1).format('MMMM')
  }

  static createDateClass = (day, month, year) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale('en').format("YYYY-MM-DD");
  }

  static createLongDateString = (date, language) => {
    return moment(date).locale(language).format('dddd, DD.MM.YYYY');
  }

  static createMonthDayString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format("MMM / ddd");
  }

  static createShortMonthString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format("MMM");
  }

  static createShortDayString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format(language == "DE" ? "dd" : "ddd");
  }

  static createDatetring = (day, month, year) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("D");
  }

  static toDatetring = (date) => {
    return moment(date, 'YYYYMMDD').format("DD.MM.YYYY");
  }

  static currentDate = () => {
    return moment().locale('en').format("YYYY-MM-DD");
  }

  static getMonths = () => {
    return {
      8: {
        numberOfDays: 31,
        text: "August",
      },
      9: {
        numberOfDays: 30,
        text: "September",
      },
      10: {
        numberOfDays: 31,
        text: "October",
      },
      11: {
        numberOfDays: 30,
        text: "November",
      },
      12: {
        numberOfDays: 31,
        text: "December",
      },
    }
  }

  static getCalendar = () => {
    return {
      2019 : {
        9: {
          numberOfDays: 30,
          text: "September",
        },
        10: {
          numberOfDays: 31,
          text: "October",
        },
        11: {
          numberOfDays: 30,
          text: "November",
        },
        12: {
          numberOfDays: 31,
          text: "December",
        },
      },
      2020 : {
        1: {
          numberOfDays: 31,
          text: "January",
        },
        2: {
          numberOfDays: 29,
          text: "February",
        },
        3: {
          numberOfDays: 31,
          text: "March",
        },
        4: {
          numberOfDays: 30,
          text: "April",
        },
        5: {
          numberOfDays: 31,
          text: "May",
        },
        6: {
          numberOfDays: 30,
          text: "June",
        },
        7: {
          numberOfDays: 31,
          text: "July",
        },
        8: {
          numberOfDays: 31,
          text: "August",
        },
        9: {
          numberOfDays: 30,
          text: "September",
        },
        10: {
          numberOfDays: 31,
          text: "October",
        },
        11: {
          numberOfDays: 30,
          text: "November",
        },
        12: {
          numberOfDays: 31,
          text: "December",
        },
      }
    }
  }
}
