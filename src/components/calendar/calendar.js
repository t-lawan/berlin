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
  const calendar = props.calendar
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
    calendar: state.calendar
  }
}

export default connect(
  mapStateToProps,
  null
)(Calendar)
