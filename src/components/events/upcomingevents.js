import React from "react"
import { EventsWrapper, EventItem, EventLink } from "./upcomingevents.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import moment from "moment"
import { getVenue } from "../../store/selector"

let events = []
let calendar_items = []
const UpcomingEvents = props => {
  calendar_items = props.calendar_items
  const filteredItems = calendar_items
    .filter(item => {
      return (
        item.experience.includes(props.experience.toString()) &&
        item.item === "event"
      )
    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })

  const language = getCurrentLanguageString(props.languages)

  return (
    <EventsWrapper>
      {filteredItems.map(item => (
        <EventItem key={item.id}>
          <EventLink to={createPath(language, `${item.slug}`)}>
            <p> {moment(item.start_date).format("dddd, DD.MM.YYYY")}</p>
            <p> {item[language].display_time}</p>
            <div
              dangerouslySetInnerHTML={{ __html: item[language].event_title }}
            />
            <p> {getVenue(props.venues, item.venue[0])[language].venue_name}</p>

            <p hidden={!item.is_free}> {freeAdmision[language].text}</p>
          </EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

const freeAdmision = {
  DE: {
    text: "Freier Eintritt, begrenzte Kapazitat",
  },
  EN: {
    text: "Free admission, limited capacity",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    events: state.events,
    calendar_items: state.calendar_items,
    venues: state.venues,
  }
}

export default connect(
  mapStateToProps,
  null
)(UpcomingEvents)
