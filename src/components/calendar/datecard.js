import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { DateManager } from "../../utility/date"
import EventCard from "./eventcard"
import {
  DateCardWrapper,
  CurrentDate,
  DateText,
  DayMonthText,
  MonthHeading,
  EventCardsWrapper,
  ClosedText,
} from "./datecard.styles"
import { getCurrentLanguageString } from "../../utility/helper";

const DateCard = props => {
  const language = getCurrentLanguageString(props.languages)
  let renderComponents
  if (props.containsEvents) {
    const monthDay = DateManager.createMonthDayString(props.day, props.month, props.year, language)
    const date = DateManager.createDatetring(props.day, props.month, props.year)
    let events = []
    events = props.events.sort((a, b) => {
      return (
        a[language].display_time.charAt(0) - b[language].display_time.charAt(0)
      )
    })
    // const events = props.events;

    renderComponents = (
      <DateCardWrapper
        id={`date-${DateManager.createDateClass(
          props.day,
          props.month,
          props.year
        )}`}
      >
        <CurrentDate>
          <DateText>{date}</DateText>
          <DayMonthText> {monthDay.toLowerCase()} </DayMonthText>
        </CurrentDate>
        <EventCardsWrapper>
          <ClosedText hidden={events.length !== 0}> Closed</ClosedText>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </EventCardsWrapper>
      </DateCardWrapper>
    )
  } else {
    renderComponents = (
      <DateCardWrapper addColour>
        <MonthHeading>
          {DateManager.getMonthText(props.month, props.year) + ' ' + props.year}
        </MonthHeading>
      </DateCardWrapper>
    )
  }
  return renderComponents
}

DateCard.propTypes = {
  containsEvents: PropTypes.bool.isRequired,
  events: PropTypes.array,
  month: PropTypes.string,
  day: PropTypes.string,
  year: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(DateCard)
