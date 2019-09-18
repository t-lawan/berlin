import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { Convert } from "../utility/convert"
import styled from "styled-components"
import UpcomingEvents, {
  freeAdmision,
} from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ImageResource from "../partials/ImageResource"
import { getVenue } from "../store/selector"
import { TwoColumnPageWrapper } from "./page.styles"
import RelatedResources from "../components/resources/related-resources"
import moment from "moment";

const EventColumn = styled.div``
const Event = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = Convert.toEventModel(props.pageContext)
  event.dates = event.dates.sort((a, b) => {
    return a.start_date - b.start_date
  })
  let venue = getVenue(props.venues, event.venue[0])
  // event.related_resource = event.related_resource.map(resource => {
  //   return resource.wordpress_id;
  // })
  const renderComponent = (
    <>
      <TwoColumnPageWrapper>
        <SEO
          title={`${event.slug}`}
          description={`${event.slug}`}
          lang={props.pageContext.language}
        />
        <EventColumn>
          {event.dates.map((date, index) => (
            <div key={index}>
              <p> {`${moment(date.start_date).format("DD.MM.YYYY")} - ${date[language].display_time}`}</p>
            </div>
          ))}
          <p> {venue ? venue[language].venue_name : ""}</p>
          <p>{venue ? venue.address[0].address_line : ""}</p>
          <p>{freeAdmision[language].text}</p>
        </EventColumn>
        <EventColumn>
          <ImageResource id={882} withCaption={true} />
          {/* <img src="https://placebear.com/g/600/350" width="auto"/> */}

          <h3
            dangerouslySetInnerHTML={{
              __html: event[language].event_title,
            }}
          />
          <div
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
      </TwoColumnPageWrapper>
      {/* <RelatedResources ids={event.related_resource} hidden={event.related_resource.length === 0}/> */}
    </>
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
    venues: state.venues,
  }
}

export default connect(
  mapStateToProps,
  null
)(Event)
