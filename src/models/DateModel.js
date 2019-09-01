import { DateManager } from "../utility/date";

export class DateModel {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    createClass = () => {
        return DateManager.createDateClass(this.day, this.month)
    }
}