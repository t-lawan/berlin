import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../utility/helper"
import { Convert } from "../utility/convert"
import styled from "styled-components"
import UpcomingEvents, {
  freeAdmision,
} from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ImageResource from "../partials/ImageResource"
import { getVenue } from "../store/selector"
import { TwoColumnPageWrapper, TextBlock } from "./page.styles"
import RelatedResources from "../components/resources/related-resources"
import moment from "moment"
import EventNavigator from "../components/events/event-navigator"
import { Color } from "../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const EventColumn = styled.div``

const EventTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  p {
    font-size: 1.8rem;
  }
`

const VenueLink = styled(AniLink)`
  text-decoration: none;
  :hover {
    color: ${Color.red};
  }
`
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
      <EventNavigator id={event.id} />
      <TwoColumnPageWrapper>
        <SEO
          title={`${event.slug}`}
          description={`${event.slug}`}
          lang={props.pageContext.language}
        />
        <EventColumn>
          <TextBlock>
            {event.dates.map((date, index) => (
              <div key={index}>
                <p>
                  {" "}
                  {`${moment(date.start_date).format("DD.MM.YYYY")} - ${
                    date[language].display_time
                  }`}
                </p>
              </div>
            ))}
          </TextBlock>
          <TextBlock>
            <VenueLink to={createPath(language, venue ? 'venue/' + venue.slug : "")}>
              {" "}
              {venue ? venue[language].venue_name : ""}
            </VenueLink>
            <p>{venue ? venue.address[0].address_line : ""}</p>
          </TextBlock>
          <p>{freeAdmision[language].text}</p>
        </EventColumn>
        <EventColumn>
          <ImageResource id={event.thumbnail_image} withCaption={true} />
          <EventTitle
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
