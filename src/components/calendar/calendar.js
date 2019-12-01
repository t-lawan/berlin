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
      // Check year is within boundary of start year and end year
      if(year >= start_date.year && year <= end_date.year ) {
        // Check if they are the same
        if(start_date.year === end_date.year) {
          // Check month is within boundary of start month and end month
          if(month >= start_date.month && month <= end_date.month) {
            return true;
          } else {
            return false;
          }
        } else {
          // Checks if they are greater than start month and year OR less then thad end month an year
          if((month >= start_date.month && year >= start_date.year) || (month <= end_date.month && year <= end_date.year))  {
            // Check if year is equal to end year and month is greater than end date month
            if(year === end_date.year && month > end_date.month) {
              return false
            }
            return true;
          } else {
            return false;
          }
        }

      } else {
        return false;
      }
      // return (
      //   (month >= start_date.month && year === start_date.year) ||
      //   (month <= end_date.month && year === end_date.year)
      // );
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
