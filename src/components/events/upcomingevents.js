import React from "react"
import { EventsWrapper, EventItem, EventLink, EventTitle } from "./upcomingevents.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import moment from "moment"
import { getVenue } from "../../store/selector"

let calendar_items = []
const UpcomingEvents = props => {
  const language = getCurrentLanguageString(props.languages)
  calendar_items = props.calendar_items
  const filteredItems = calendar_items
    .filter(item => {
      return (
        item.experience.includes(props.experience.toString()) &&
        item.item === "event" &&
        moment(item.start_date).diff(moment()) > 0
      )
    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })

  return (
    <EventsWrapper>
      {filteredItems.map(item => (
        <EventItem key={item.id}>
          <EventLink to={createPath(language, `${item.slug}`)}>
            <p> {moment(item.start_date).format("dddd, DD.MM.YYYY")}</p>
            <p> {item[language].display_time}</p>
            <EventTitle dangerouslySetInnerHTML={{ __html: item[language].title }} />
            <EventTitle dangerouslySetInnerHTML={{ __html: item[language].subtitle }} />
            <p> {getVenue(props.venues, item.venue[0])[language].venue_name}</p>

            <p hidden={!item.is_free}> {freeAdmision[language].text}</p>
          </EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

export const freeAdmision = {
  DE: {
    text: "Freier Eintritt, begrenzte Kapazität",
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
