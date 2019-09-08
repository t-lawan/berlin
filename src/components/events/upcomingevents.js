import React from "react"
import { EventsWrapper, EventItem, EventLink } from "./upcomingevents.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"



let events = []
const UpcomingEvents = props => {

  events = props.events.slice(0, 6);
  const filteredEvents = events.filter(event => {
    return event.experience == props.experience
  })
  const language = getCurrentLanguageString(props.languages)

  return (
    <EventsWrapper>
      {filteredEvents.map(event => (
        <EventItem>
          <EventLink to={createPath(language,`event/${event.slug}`)}>
            {/* <p> {event.start_date.toString()}</p> */}

            <p> {event[language].title}</p>
            <p> {event[language].subtitle}</p>
            <p> {event.venue}</p>
          </EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    events: state.events
  }
}

export default connect(
  mapStateToProps,
  null
)(UpcomingEvents)
