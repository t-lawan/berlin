import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { Convert } from "../utility/convert"
import styled from "styled-components"
import UpcomingEvents from "../components/events/upcomingevents"

const EventPageWrapper = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 2fr 5fr;
`

const EventColumn = styled.div``
const Event = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = Convert.toEventModel(props.pageContext)
  const renderComponent = (
    <EventPageWrapper>
      <EventColumn>
        <h2>{event.start_date}</h2>
        <h2>{event[language].display_time}</h2>

        <h5>{event.venue}</h5>
      </EventColumn>
      <EventColumn>
        <h3>{event[language].event_title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: event[language].full_description,
          }}
        />
      </EventColumn>
    </EventPageWrapper>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents />}
    />
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
)(Event)
