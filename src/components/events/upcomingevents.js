import React from "react"
import { EventsWrapper, EventItem, EventLink, EventTitle } from "./upcomingevents.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import moment from "moment"
import 'moment/locale/en-gb';
import 'moment/locale/de';
import { getVenue } from "../../store/selector"

let calendar_items = []
const UpcomingEvents = props => {
  const language = getCurrentLanguageString(props.languages);
  calendar_items = props.calendar_items
  const filteredItems = calendar_items
    .filter(item => {
      return (
        item.experience.includes(props.experience.toString()) &&
        item.item === "event" &&
        (props.experience >= props.active_experience ? moment(item.start_date).diff(moment()) > 0 : true)
      )
    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })
  return (
    <EventsWrapper>
      <p hidden={filteredItems.length !== 0}> There are no upcoming events for this experience </p>
      {filteredItems.map(item => (
        <EventItem key={item.id}>
          <EventLink colour="black" to={createPath(language, `${item.slug}`)}>
            <p> {moment(item.start_date).locale(language.toLowerCase()).format("dddd, DD.MM.YYYY")}</p>
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
    en: "In English",
    de: "In German",
    rsvp: 'RSVP Required'
  },
  EN: {
    text: "Free admission, limited capacity",
    en: "In English",
    de: "In German",
    rsvp: 'RSVP Required'
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    calendar_items: state.calendar_items,
    venues: state.venues,
    active_experience: state.active_experience
  }
}

export default connect(
  mapStateToProps,
  null
)(UpcomingEvents)
