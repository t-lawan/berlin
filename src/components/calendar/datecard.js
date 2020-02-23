import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { DateManager } from "../../utility/date"
import EventCard from "./eventcard"
import {
  DateCardWrapper,
  MonthCardWrapper,
  CurrentDate,
  DateText,
  DayMonthText,
  MonthHeading,
  EventCardsWrapper,
  ClosedText,
  DateTextWrapper,
  DateString,
  EventsGrid,
  ExhibitionCardsWrapper,
} from "./datecard.styles"
import { getCurrentLanguageString } from "../../utility/helper"

const DateCard = props => {
  const language = getCurrentLanguageString(props.languages)
  let renderComponents
  if (props.containsEvents) {
    const monthDay = DateManager.createMonthDayString(
      props.day,
      props.month,
      props.year,
      language
    )
    const date = DateManager.createDatetring(props.day, props.month, props.year)
    let events = props.events
      .filter(ev => {
        return ev.item === "event"
      })
      .sort((a, b) => {
        return (
          a[language].display_time.charAt(0) -
          b[language].display_time.charAt(0)
        )
      })
    let exhibitions = props.events.filter(ex => {
      return ex.item === "exhibition"
    })

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
          <DateTextWrapper>
            <DateString>
              {" "}
              {DateManager.createShortMonthString(
                props.day,
                props.month,
                props.year,
                language
              )}
            </DateString>
            <DateString>
              {" "}
              {DateManager.createShortDayString(
                props.day,
                props.month,
                props.year,
                language
              )}
            </DateString>
          </DateTextWrapper>
          {/* <DayMonthText> {monthDay.toLowerCase()} </DayMonthText> */}
        </CurrentDate>
        <EventsGrid>
        <EventCardsWrapper hideInMobile={false}>
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </EventCardsWrapper>
          <ExhibitionCardsWrapper hideInMobile={true}>
            {exhibitions.length === 0 ? <ClosedText> {language === "EN" ? "Closed" : "Geschlossen"}</ClosedText> : null} 
            {exhibitions.map((exhibition, index) => (
              <EventCard key={index} event={exhibition} />
            ))}
          </ExhibitionCardsWrapper>
          <EventCardsWrapper hideInMobile={true}>
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </EventCardsWrapper>
        </EventsGrid>
      </DateCardWrapper>
    )
  } else {
    renderComponents = (
      <MonthCardWrapper addColour>
        <MonthHeading>
          {DateManager.getMonthText(props.month, props.year).toLowerCase()}
        </MonthHeading>
      </MonthCardWrapper>
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
