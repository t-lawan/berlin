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
  MonthHeading,
  EventCardsWrapper,
  ClosedText,
  DateTextWrapper,
  DateString,
  EventsGrid,
  ExhibitionCardsWrapper,
} from "./datecard.styles"
import { getCurrentLanguageString } from "../../utility/helper"

class DateCard extends React.Component {
  language
  ref

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  render() {
    let renderComponents
    this.language = getCurrentLanguageString(this.props.languages)
    if (this.props.containsEvents) {
      const date = DateManager.createDatetring(
        this.props.day,
        this.props.month,
        this.props.year
      )
      let events = this.props.events
        .filter(ev => {
          return ev.item === "event"
        })
        .sort((a, b) => {
          return (
            a[this.language].display_time.charAt(0) -
            b[this.language].display_time.charAt(0)
          )
        })

      let exhibitions = this.props.events.filter(ex => {
        return ex.item === "exhibition"
      })

      exhibitions = exhibitions.filter(e => {
        let isClosed = true

        if(e.closed_dates) {
          e.closed_dates.forEach((d) => {
            isClosed  = !DateManager.isInBetween(e.start_date.format('YYYYMMDD'), d.start_close_date, d.end_close_date)
          })
        }

        return isClosed
      })

      // Filter exhibitions if exception exists

      renderComponents = (
        <DateCardWrapper
          ref={this.ref}
          id={`date-${DateManager.createDateClass(
            this.props.day,
            this.props.month,
            this.props.year
          )}`}
          isExp4={this.props.experience === 4}
        >
          <CurrentDate>
            <DateText>{date}</DateText>
            <DateTextWrapper>
              <DateString>
                {" "}
                {DateManager.createShortMonthString(
                  this.props.day,
                  this.props.month,
                  this.props.year,
                  this.language
                )}
              </DateString>
              <DateString>
                {" "}
                {DateManager.createShortDayString(
                  this.props.day,
                  this.props.month,
                  this.props.year,
                  this.language
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
              {exhibitions.length === 0 ? (
                <ClosedText>
                  {" "}
                  {this.language === "EN" ? "Closed" : "Geschlossen"}
                </ClosedText>
              ) : null}
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
            {DateManager.getMonthText(
              this.props.month,
              this.language.toLowerCase()
            )
              .toLowerCase()
              .concat(` ${this.props.year}`)}
          </MonthHeading>
        </MonthCardWrapper>
      )
    }
    return renderComponents
  }
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
    experience: state.experience,
  }
}

export default connect(mapStateToProps, null)(DateCard)
