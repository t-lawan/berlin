import moment from "moment"
import 'moment/locale/en-gb';
import 'moment/locale/de';
moment.updateLocale('en', {
  monthsShort : [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ]
});

moment.updateLocale('de', {
  monthsShort : [
      "Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
      "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"
  ]
});
export class DateManager {
  static get = (date, type = "year" | "month" | "date") => {
    return moment(date, "YYYY-MM-DD HH:mm Z").get(type);
  }

  static getNumberOfDaysInMonth = (monthNum, year) => {
    const calendar = this.getCalendar();
    return calendar[year][monthNum].numberOfDays
  }

  static getMonthText = (monthNum, year) => {
    const calendar = this.getCalendar();
    return calendar[year][monthNum].text;
  }

  static createDateClass = (day, month, year) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("YYYY-MM-DD");
  }

  static createMonthDayString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format("MMM / ddd");
  }

  static createShortMonthString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format("MMM");
  }

  static createShortDayString = (day, month, year, language) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').locale(language).format("ddd");
  }

  static createDatetring = (day, month, year) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("D");
  }

  static toDatetring = (date) => {
    return moment(date, 'YYYY-MM-DD').format("DD.MM.YYYY");
  }

  static currentDate = () => {
    return moment().format("YYYY-MM-DD");
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
          numberOfDays: 28,
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
