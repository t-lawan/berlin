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

const EventTextBlock = styled(TextBlock)`
  a,p {
    margin: 0;
    font-size: 1rem;
  }
  margin:0 0 0.7em 0;
  padding:0;
`
const EventTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  p {
    font-size: 1.8rem;
    line-height:1.2;
  }
`

const EventDescription = styled.div`
  p {
    font-size: 1.0rem;
  }
`

const EventRsvpText = styled.div`
  p,
  a {
    font-size: 1.0em;
  }
`

const VenueLink = styled(AniLink)`
  text-decoration: none;
  :hover {
    color: ${Color.red};
  }
`
const ShareLink = styled.p`
  a{
  border-bottom: solid thin ${Color.red};
  :hover {
  color: ${Color.red};
  }
}
`

const eventContent = {
  EN: {
    'share': "Share"
  },
  DE: {
    'share': "Teilen"
  }
}
const Event = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = Convert.toEventModel(props.pageContext);
  const facebookLink = typeof window !== `undefined` ? `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}` : '';
  event.dates = event.dates.sort((a, b) => {
    return a.start_date - b.start_date
  })
  let venue = getVenue(props.venues, event.venue[0]);
  if(event.related_resource && event.related_resource.length > 0) {
    event.related_resource = event.related_resource.map(resource => {
      return resource.wordpress_id;
    });
  }


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
          <EventTextBlock>
            {event.dates.map((date, index) => (
              <div key={index}>
                <p>
                  {`${moment(date.start_date)
                    .locale(language.toLowerCase())
                    .format("dddd, D.MM.YYYY")}`}
                </p>
                <p>{`${date[language].display_time}`}</p>
              </div>
            ))}
            <p hidden={!event[language].rsvp_required}>
              {freeAdmision[language].rsvp}
            </p>
          </EventTextBlock>
          <EventTextBlock>
            <VenueLink
              to={createPath(language, venue ? "venue/" + venue.slug : "")}
            >
              {" "}
              {venue ? venue[language].venue_name : ""}
            </VenueLink>
            <p>{venue ? venue.address[0].address_line : ""}</p>
          </EventTextBlock>
          <EventTextBlock>
            <p>{freeAdmision[language][event.language]}</p>
            <p hidden={!event.is_free}>{freeAdmision[language].text}</p>
          </EventTextBlock>
          <EventTextBlock>
            <ShareLink> {eventContent[language].share}: <a target="__blank" href={facebookLink}>  Facebook </a></ShareLink>
            
          </EventTextBlock>
        </EventColumn>
        <EventColumn>
          <ImageResource id={event.thumbnail_image} withCaption={true} />
          <TextBlock>
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
          </TextBlock>

          <EventDescription
            dangerouslySetInnerHTML={{
              __html: event[language].full_description,
            }}
          />

          <TextBlock>
            <EventRsvpText
              hidden={!event[language].rsvp_required}
              dangerouslySetInnerHTML={{
                __html: event[language].rsvp_note,
              }}
            />
          </TextBlock>

        </EventColumn>
      </TwoColumnPageWrapper>
      <RelatedResources ids={event.related_resource && event.related_resource.length > 0 ?  event.related_resource : []} hidden={!event.related_resource || event.related_resource.length === 0}/>
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
    genres: state.resource_genres
  }
}

export default connect(
  mapStateToProps,
  null
)(Event)
