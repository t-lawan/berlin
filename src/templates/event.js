import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { Convert } from "../utility/convert"
import styled from "styled-components"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo";

const EventPageWrapper = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: 1em;
`

const EventColumn = styled.div``
const Event = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = Convert.toEventModel(props.pageContext)
  const renderComponent = (
    <EventPageWrapper>
      <SEO title={`${event.slug}`} description={`${event.slug}`} lang={language}/>
      <EventColumn>
        <h4>{event[language].display_time}</h4>
        <h4>Talk</h4>
        <h4>Bornemannstraße 9</h4>
        <h4>facebook</h4>
        <h4>instagram</h4>
      </EventColumn>
      <EventColumn>
        <img src="https://placebear.com/g/600/350" width="auto"/>

        <h3
          dangerouslySetInnerHTML={{
            __html: event[language].event_title,
          }}
        />
        <h3
          dangerouslySetInnerHTML={{
            __html: event[language].event_subtitle,
          }}
        />
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
