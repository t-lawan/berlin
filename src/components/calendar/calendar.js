import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"

import { Convert } from "../../utility/convert"
import { CalendarModel } from "../../models/CalendarModel"
import MonthCards from "./monthcards"
import { CalendarWrapper } from "./calendar.styles"
import { DateManager } from "../../utility/date";

let events = []
let exhibitions = []
const Calendar = props => {
  const calendar = props.calendar
  let months = Object.keys(calendar)
  let exhibition = props.exhibitions.find((item) => parseInt(item.experience) === props.experience);

  if(exhibition) {
    let start_date = {
      month: DateManager.get(exhibition.start_date, "month") + 1,
      year: DateManager.get(exhibition.start_date, "year") 
    }
  
    let end_date = {
      month: DateManager.get(exhibition.end_date, "month") + 1,
      year: DateManager.get(exhibition.end_date, "year") 
    }

    months = months.filter((item) => {
      let month = parseInt(item.split('-')[1]);
      let year = parseInt(item.split('-')[0]);
      return (
        (month >= start_date.month && year === start_date.year) ||
        (month <= end_date.month && year === end_date.year)
      );
    });
  }


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
    calendar: state.calendar,
    experience: state.experience,
    exhibitions: state.exhibitions
  }
}

export default connect(
  mapStateToProps,
  null
)(Calendar)
