import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { Convert } from "../../utility/convert"
import { CalendarModel } from "../../models/CalendarModel"
import MonthCards from "./monthcards"
import { CalendarWrapper } from "./calendar.styles"

let events = []
let exhibitions = []
const Calendar = props => {
  events = Convert.eventsToCalendarItemArray(props.events)
  exhibitions = Convert.exhibitionsToCalendarItemArray(props.exhibitions)
  let calendarItems = []
  calendarItems.push(...exhibitions);
  calendarItems.push(...events);
  const calendar = CalendarModel.createCalendar(calendarItems)
  const months = Object.keys(calendar)
  return (
    <CalendarWrapper>
      {months.map(month => (
         <MonthCards key={month} month={calendar[month]} title={month.split('-')[1]} year={month.split('-')[0]}/>
      ))}
    </CalendarWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    events: state.events,
    exhibitions: state.exhibitions
  }
}

export default connect(
  mapStateToProps,
  null
)(Calendar)
