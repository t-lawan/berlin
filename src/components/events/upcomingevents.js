import React from "react"
import { EventsWrapper, EventItem } from "./upcomingevents.styles"
import { generateEvents } from "../../models/EventsModel"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Convert } from "../../utility/convert";

// let events = generateEvents(20);
let events = []

const UpcomingEvents = props => {
  const data = useStaticQuery(
    graphql`
      {
        allWordpressWpEvents {
          edges {
            node {
              slug
              id
              acf {
                DE {
                  display_time
                  event_subtitle
                  full_description
                  event_title
                  other_event_venue
                  short_calendar_description
                }
                EN {
                  event_title
                  display_time
                  event_subtitle
                  full_description
                  other_event_venue
                  short_calendar_description
                }
                end_date
                event_documentation
                event_is_free
                event_language
                event_limited_capacity
                start_date(formatString: "YYYY.MM.DD")
                template
                thumbnail_image
                exp_number
                participants
                related_resources
                other_event_language
              }
            }
          }
        }
      }
    `
  )

  events = Convert.toModelArray(data.allWordpressWpEvents, Convert.toEventModel);
  const filteredEvents = events.filter(event => {
    return event.experience === props.experience;
  });
  const language = getCurrentLanguageString(props.languages);

  return (
    <EventsWrapper>
      {filteredEvents.map(event => (
        <EventItem key={event.id} to={`/event/${event.slug}`}>
          <p> {event.start_date.toString()}</p>
          <p> {event[language].event_title}</p>
          <p> {event[language].event_subtitle}</p>
          <p> {event.venue}</p>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
  }
}

export default connect(
  mapStateToProps,
  null
)(UpcomingEvents)
