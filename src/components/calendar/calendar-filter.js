import React from "react"
import { connect } from "react-redux"
import {
  CalendarFilterWrapper,
  CalendarFilterButton,
  CalendarFilterDates,
  CalendarFilterMonthsWrapper,
  SmallCalendarDates,
  CalendarFilter,
  CalendarFilterMonth,
  SmallCalendarWrapper,
} from "./calendar.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import { DateManager } from "../../utility/date"
import scrollIntoView from "scroll-into-view-if-needed"

class CalendarFilterDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilter: false,
      year: 2020,
      month: 5,
    }
  }

  toggleFilterDates = () => {
    this.setState({
      showFilter: !this.state.showFilter,
    })
  }

  setDate = () => {
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1

    this.setState({
      month: month,
      year: year,
    })
  }

  changeMonth = month => {
    this.setState({
      month: month,
    })
  }

  isCurrentMonth = month => {
    return this.state.month === month
  }

  isCurrentDate = day => {
    let d = new Date()
    return d.getDate() === day && d.getMonth() + 1 === this.state.month
  }

  isValid = (day) => {
    // Check if it is start or end month
    if (
      this.state.month !== this.props.startDate.month &&
      this.state.month !== this.props.endDate.month
    ) {
      return true
    }

    day = day < 10 ? `0${day}` : day
    let month = this.state.month < 10 ? `0${this.state.month}` : this.state.month
    let dateChosen = `${this.state.year}-${month}-${day}`
    let is = false;
    if (this.state.month === this.props.startDate.month) {
      let startDate = this.props.startDate
      let startDay = startDate.day < 10 ? `0${startDate.day}` : startDate.day
      let startMonth =
        startDate.month < 10 ? `0${startDate.month}` : startDate.month
      startDate = `${startDate.year}-${startMonth}-${startDay}`
      is = DateManager.isFirstGreaterThanSecond(dateChosen, startDate)
    }

    if(this.state.month === this.props.endDate.month) {
        let endDate = this.props.endDate
        let endDay = endDate.day < 10 ? `0${endDate.day}` : endDate.day
        let endMonth =
            endDate.month < 10 ? `0${endDate.month}` : endDate.month
        endDate = `${endDate.year}-${endMonth}-${endDay}`
        is = DateManager.isFirstGreaterThanSecond(endDate, dateChosen)
    }

    return is
  }

  moveToCalendar = day => {
    if(this.isValid(day)) {
        day = day < 10 ? `0${day}` : day
        let month =
          this.state.month < 10 ? `0${this.state.month}` : this.state.month
        let dateChosen = `${this.state.year}-${month}-${day}`
        const element = document.getElementById(`date-${dateChosen}`)
        const parent = document.getElementById(`column-one`)
        if (element) {
          scrollIntoView(element, {
            scrollMode: "if-needed",
            block: "start",
            inline: "nearest",
            behavior: "smooth",
            boundary: parent,
            skipOverflowHiddenElements: true,
          })
        }
    }
  }

  componentDidMount() {
    this.setDate()
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <CalendarFilterWrapper>
        <CalendarFilter>
          <CalendarFilterButton onClick={() => this.toggleFilterDates()}>
            {" "}
            filter by date{" "}
          </CalendarFilterButton>
        </CalendarFilter>
        <CalendarFilterDates show={this.state.showFilter}>
          <CalendarFilterMonthsWrapper>
            {this.props.months.map((mon, index) => (
              <CalendarFilterMonth
                key={index}
                onClick={() => this.changeMonth(parseInt(mon.split("-")[1]))}
                isMonth={this.isCurrentMonth(parseInt(mon.split("-")[1]))}
              >
                {DateManager.getFilter(mon, this.language.toLowerCase())}
              </CalendarFilterMonth>
            ))}
          </CalendarFilterMonthsWrapper>
          <SmallCalendarWrapper>
            {DateManager.getArrayOfDays(this.state.month, this.state.year).map(
              (date, index) => (
                <SmallCalendarDates
                  onClick={() => this.moveToCalendar(date)}
                  key={index}
                  isDate={this.isCurrentDate(date)}
                  isValid={this.isValid(date)}
                >
                  {" "}
                  {date}
                </SmallCalendarDates>
              )
            )}
          </SmallCalendarWrapper>
        </CalendarFilterDates>
      </CalendarFilterWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(CalendarFilterDropDown)
