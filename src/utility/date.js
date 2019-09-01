import moment from "moment"

export class DateManager {
  static get = (date, type = "year" | "month" | "date") => {
    return moment(date, "YYYY-MM-DD HH:mm Z").get(type)
  }

  static getNumberOfDaysInMonth = (monthNum, year) => {
    const calendar = this.getCalendar();
    return calendar[year][monthNum].numberOfDays
  }

  static getMonthText = (monthNum, year) => {
    const calendar = this.getCalendar();
    return calendar[year][monthNum].text
  }

  static createDateClass = (day, month, year) => {
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("YYYY-MM-DD");
  }

  static createMonthDayString = (day, month) => {
    const year = 2019;
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("MMM / ddd");
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
