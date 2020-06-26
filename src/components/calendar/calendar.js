import React from "react"
import { connect } from "react-redux"
import MonthCards from "./monthcards"
import {
  CalendarWrapper,
  CalendarFilterWrapper,
  CalendarFilter,
  CalendarFilterButton,
  CalendarFilterDates,
  CalendarFilterMonthsWrapper,
  CalendarFilterMonth,
} from "./calendar.styles"
import { DateManager } from "../../utility/date"
import scrollIntoView from "scroll-into-view-if-needed"
import { startTransition, setFreshLoadToTrue } from "../../store/action"
import { getCurrentLanguageString } from "../../utility/helper";

class Calendar extends React.Component {
  calendar
  months
  exhibition
  currentDate
  startDate
  endDate
  calendarRef

  constructor(props) {
    super(props)
    this.state = {
      showFilter: false,
    }
    this.calendarRef = React.createRef()
    this.calendar = this.props.calendar
    this.months = Object.keys(this.calendar)
    this.exhibition = this.props.exhibitions.find(
      item => parseInt(item.experience) === this.props.experience
    )
    if (this.exhibition) {
      this.startDate = {
        day: DateManager.get(this.exhibition.start_date, "date"),
        month: DateManager.get(this.exhibition.start_date, "month") + 1,
        year: DateManager.get(this.exhibition.start_date, "year"),
      }

      this.endDate = {
        day: DateManager.get(this.exhibition.end_date, "date"),
        month: DateManager.get(this.exhibition.end_date, "month") + 1,
        year: DateManager.get(this.exhibition.end_date, "year"),
      }

      this.months = this.months.filter(item => {
        let month = parseInt(item.split("-")[1])
        let year = parseInt(item.split("-")[0])
        // Check year is within boundary of start year and end year
        if (year >= this.startDate.year && year <= this.endDate.year) {
          // Check if they are the same
          if (this.startDate.year === this.endDate.year) {
            // Check month is within boundary of start month and end month
            if (month >= this.startDate.month && month <= this.endDate.month) {
              return true
            } else {
              return false
            }
          } else {
            // Checks if they are greater than start month and year OR less then thad end month an year
            if (
              (month >= this.startDate.month && year >= this.startDate.year) ||
              (month <= this.endDate.month && year <= this.endDate.year)
            ) {
              // Check if year is equal to end year and month is greater than end date month
              if (year === this.endDate.year && month > this.endDate.month) {
                return false
              }
              return true
            } else {
              return false
            }
          }
        } else {
          return false
        }
        // return (
        //   (month >= start_date.month && year === start_date.year) ||
        //   (month <= end_date.month && year === end_date.year)
        // );
      })
    }
  }
  // const calendar = props.calendar
  // let months = Object.keys(calendar)
  // let exhibition = props.exhibitions.find((item) => parseInt(item.experience) === props.experience);
  getElement = () => {
    this.currentDate = DateManager.currentDate()
    const element = document.getElementById(`date-${this.currentDate}`)
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

  toggleFilterDates = () => {
    this.setState({
      showFilter: !this.state.showFilter,
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.getElement()
    }, 200)
  }

  render() {
    console.log("MONTHS", this.months)
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <>
        <CalendarFilterWrapper>
          <CalendarFilter>
            <CalendarFilterButton onClick={() => this.toggleFilterDates()}>
              {" "}
              filter by date{" "}
            </CalendarFilterButton>
          </CalendarFilter>
          <CalendarFilterDates show={this.state.showFilter}>
            <CalendarFilterMonthsWrapper>
              {this.months.map((mon, index) => (
                <CalendarFilterMonth key={index}>{DateManager.getFilter(mon, this.language.toLowerCase())}</CalendarFilterMonth>
              ))}
            </CalendarFilterMonthsWrapper>
          </CalendarFilterDates>
        </CalendarFilterWrapper>
        <CalendarWrapper id="calendar-wrapper">
          {this.months.map((month, index) => (
            <MonthCards
              isStart={index === 0}
              startDate={this.startDate}
              isEnd={this.months.length === index + 1}
              endDate={this.endDate}
              key={index}
              month={this.calendar[month]}
              title={month.split("-")[1]}
              year={month.split("-")[0]}
            />
          ))}
        </CalendarWrapper>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    calendar: state.calendar,
    experience: state.experience,
    exhibitions: state.exhibitions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch(startTransition()),
    setFreshLoadToTrue: () => dispatch(setFreshLoadToTrue()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
