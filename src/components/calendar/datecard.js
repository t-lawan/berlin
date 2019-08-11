import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { EventsModel } from "../../models/EventsModel"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { DateManager } from "../../utility/date"
import moment from "moment"

const DateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.05em solid black;
  border-right: 0.05em solid black;
  min-height: 400px;
  height: auto;
  background-color: ${props => (props.addColour ? "#ADEBAD" : "inherit")};
`
const EventCardWrapper = styled.div`
  border-bottom: 0.05em solid black;
  height: auto;
  padding: 0.25em 0.25em;
`

const CurrentDate = styled.div`
  border-bottom: 0.05em solid black;
  padding: 0.15em 0.5em;
`

const EventText = styled.p`
  font-size: x-small;
`

const EventHeading = styled.strong`
  font-size: x-small;
`

const DateText = styled.strong`
  font-size: xx-large;
  padding-right: 0.5em;
`

const DayMonthText = styled.span`
  font-size: small;
`
const MonthHeading = styled.h1`
  padding: 0.25em 0.5em;
`

const DateCard = props => {
  const language = getCurrentLanguageString(props.languages)
  let renderComponents;
  if (props.containsEvents) {
    const monthDay = DateManager.createMonthDayString(props.day, props.month)
    const date = DateManager.createDatetring(props.day, props.month)
    renderComponents = (
      <DateCardWrapper id={`date-${DateManager.createDateClass(props.day, props.month)}`}>
        <CurrentDate>
          <DateText>{date}</DateText>
          <DayMonthText> {monthDay.toLocaleLowerCase()} </DayMonthText>
        </CurrentDate>
        {props.events.map(event => (
          <EventCardWrapper key={event.id}>
            <EventHeading>{event[language].display_time}</EventHeading>
            <EventText>Talk</EventText>
            <EventText>{event.venue}</EventText>
            <EventText>{event[language].short_calendar_description}</EventText>
          </EventCardWrapper>
        ))}
      </DateCardWrapper>
    )
  } else {

    renderComponents = (
      <DateCardWrapper addColour>
        <MonthHeading> {DateManager.getMonthText(props.month)}</MonthHeading>
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
