import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Convert } from "../../utility/convert"
import { CalendarModel } from "../../models/CalendarModel"
import { generateEvents } from "../../models/EventsModel"
import MonthCards from "./monthcards";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const DateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.05em solid black;
  border-right: 0.05em solid black;
  height: auto;
`

const EventCardWrapper = styled.div`
  border-bottom: 0.1em solid black;
  height: auto;
  padding: 0.25em 0.25em;
`
const CurrentDate = styled.div`
  border-bottom: 0.1em solid black;
  padding: 0.15em 0.25em;
`

const EventText = styled.p`
  /* font-size: x-small; */
`

const EventHeading = styled.strong`
  /* font-size: x-small; */
`

let events = []
const Calendar = props => {
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

  events = generateEvents(100);
//   events = Convert.toModelArray(data.allWordpressWpEvents, Convert.toEventModel)
//   const filteredEvents = events.filter(event => {
//     return event.experience === props.experience
//   })
  const calendar = CalendarModel.createCalendar(events)
  console.log(calendar)

  const months = Object.keys(calendar);
  return (
    <CalendarWrapper>
      {months.map(month => (
        <MonthCards key={month} month={calendar[month]} />
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
