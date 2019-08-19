import moment from "moment"

export class DateManager {
  static get = (date, type = "year" | "month" | "date") => {
    return moment(date, "YYYY-MM-DD HH:mm Z").get(type)
  }

  static getNumberOfDaysInMonth = monthNum => {
    const months = this.getMonths()
    return months[monthNum].numberOfDays
  }

  static getMonthText = monthNum => {
    const months = this.getMonths()
    return months[monthNum].text
  }

  static createDateClass = (day, month) => {
    const year = 2019;
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("YYYY-MM-DD");
  }

  static createMonthDayString = (day, month) => {
    const year = 2019;
    return moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format("MMM / ddd");
  }

  static createDatetring = (day, month) => {
    const year = 2019;
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
}
