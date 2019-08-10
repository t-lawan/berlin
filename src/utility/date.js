import moment from "moment"

export class DateManager {
  static get = (unixDate, type = "year" | "month" | "date") => {
    return moment(unixDate).get(type)
  }

  static getNumberOfDaysInMonth = monthNum => {
    const months = this.getMonths()
    return months[monthNum].numberOfDays
  }

  static getMonthText = monthNum => {
    const months = this.getMonths()
    return months[monthNum].text
  }

  static getMonths = () => {
    return {
      7: {
        numberOfDays: 31,
        text: "August",
      },
      8: {
        numberOfDays: 30,
        text: "September",
      },
      9: {
        numberOfDays: 31,
        text: "October",
      },
      10: {
        numberOfDays: 30,
        text: "November",
      },
      11: {
        numberOfDays: 31,
        text: "December",
      },
    }
  }
}
