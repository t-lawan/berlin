import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Convert } from "../../utility/convert"
import { CalendarModel } from "../../models/CalendarModel"
import { generateEvents } from "../../models/EventsModel"
import MonthCards from "./monthcards"
import { CalendarWrapper } from "./calendar.styles"
import { generateExhibitions } from "../../models/ExhibitionModel"

let events = []
let exhibitions = []
const Calendar = props => {
  // const data = useStaticQuery(
  //   graphql`
  //     {
  //       allWordpressWpEvents {
  //         edges {
  //           node {
  //             slug
  //             id
  //             acf {
  //               DE {
  //                 display_time
  //                 event_subtitle
  //                 full_description
  //                 event_title
  //                 other_event_venue
  //                 short_calendar_description
  //               }
  //               EN {
  //                 event_title
  //                 display_time
  //                 event_subtitle
  //                 full_description
  //                 other_event_venue
  //                 short_calendar_description
  //               }
  //               end_date
  //               event_documentation
  //               event_is_free
  //               event_language
  //               event_limited_capacity
  //               start_date(formatString: "YYYY.MM.DD")
  //               template
  //               thumbnail_image
  //               exp_number
  //               participants
  //               related_resources
  //               other_event_language
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  events = Convert.eventsToCalendarItemArray(generateEvents(40))
  exhibitions = Convert.exhibitionsToCalendarItemArray(generateExhibitions(50))
  console.log("events", events);
  //   events = Convert.toModelArray(data.allWordpressWpEvents, Convert.toEventModel)
  //   const filteredEvents = events.filter(event => {
  //     return event.experience === props.experience
  //   })
  let calendarItems = []
  calendarItems.push(...exhibitions);
  calendarItems.push(...events);
  const calendar = CalendarModel.createCalendar(calendarItems)

  const months = Object.keys(calendar)
  return (
    <CalendarWrapper>
      {months.map(month => (
        <MonthCards key={month} month={calendar[month]} title={month} />
      ))}
    </CalendarWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Calendar)
