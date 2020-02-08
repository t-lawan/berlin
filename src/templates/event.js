import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  truncateText,
  transitionBackground,
} from "../utility/helper"
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
import { Color, size, hideDisplayForMobile, LargeButton } from "../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import { EventsModel } from "../models/EventsModel"

const EventColumn = styled.div`
:first-child {
  border-bottom: solid 1px #000;
  margin-bottom: 1.3em;
}
@media (min-width: ${size.tablet}) {
    :first-child {
    border-bottom: none;
    margin-bottom: 0;
    }
  }
`

const EventTextBlock = styled(TextBlock)`
  a,
  p {
    margin: 0;
    font-size: 1rem;
  }
  margin: 0 0 0.7em 0;
  padding: 0;
`
const EventTitle = styled.h1`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.2;
  ${hideDisplayForMobile};
  @media (max-width: 1023px) {
    display: none;
  }
`
const EventSubTitle = styled.h2`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin-top:-1.5em;
  margin-bottom:0;
  font-size: 1.1rem;
  line-height: 1.2;
  ${hideDisplayForMobile};
  @media (max-width: 1023px) {
    display: none;
  }
`

const VideoContainer = styled.div`
  > iframe {
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
  }
`
const EventTitleMob = styled.h1`
  font-size: 1.55em;
  margin: -0.3em 0 1em;
  line-height: 1.2;
  @media (min-width: ${size.laptop}) {
    display: none;
  }
`
const EventSubTitleMob = styled.h2`
  font-size: 1.0em;
  margin: -1em 0 1em;
  line-height: 1.2;
  @media (min-width: ${size.laptop}) {
    display: none;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
  }
`

const EventDescription = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`

const EventRsvpText = styled.div`
  p,
  a {
    font-size: 1rem;
  }
`

const VenueLink = styled(AniLink)`
  text-decoration: none;
  :hover {
    color: ${Color.red};
  }
`

const DocumentationLink = styled(VenueLink)``

const DocumentationButton = styled(LargeButton)`
  color: white;
  margin: 0;
`
const ShareLink = styled.p`
  a {
    border-bottom: solid thin ${Color.red};
    :hover {
      color: ${Color.red};
    }
  }
`

const eventContent = {
  EN: {
    share: "Share",
  },
  DE: {
    share: "Teilen",
  },
}

const Event = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = Convert.toEventModel(props.pageContext)
  const facebookLink =
    typeof window !== `undefined`
      ? `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
      : ""
  event.dates = event.dates.sort((a, b) => {
    return a.start_date - b.start_date
  })
  let venue = getVenue(props.venues, event.venue[0])
  let documentation = []
  if (event.documentation) {
    documentation = props.documentation.filter(doc => {
      return doc.id === event.documentation[0]
    })
  }

  if (event.related_resource && event.related_resource.length > 0) {
    event.related_resource = event.related_resource.map(resource => {
      return resource.wordpress_id
    })
  }
  let title = truncateText(
    striptags(event[`${props.pageContext.language.toUpperCase()}`].event_title)
  )
  let description = truncateText(
    striptags(
      event[`${props.pageContext.language.toUpperCase()}`].full_description
    )
  )
  const renderComponent = (
    <>
      <EventNavigator id={event.id} />
      <TwoColumnPageWrapper>
        <SEO
          title={title}
          description={description}
          lang={props.pageContext.language}
        />
        <EventColumn>
          <EventTitleMob
            dangerouslySetInnerHTML={{
              __html: striptags(event[language].event_title, ["em"]),
            }}
          />
          <EventSubTitleMob
            dangerouslySetInnerHTML={{
              __html: striptags(event[language].event_subtitle, ["em"]),
            }}
          />
          <EventTextBlock>
            {event.dates.map((date, index) => (
              <div key={index}>
                <p>
                  {`${moment(date.start_date)
                    .locale(language.toLowerCase())
                    .format("dddd, D.M.YYYY")}`}
                </p>
                <p>{`${date[language].display_time}`}</p>
              </div>
            ))}
            <p hidden={!event[language].rsvp_required}>
              {freeAdmision[language].rsvp}
            </p>
          </EventTextBlock>
          <EventTextBlock>
            {props.experience == 4 ? (
              <VenueLink
                to={createPath(language, venue ? "venue/" + venue.slug : "")}
                // bg={transitionBackground}
                // cover
                // direction="down"
                fade
              >
                {" "}
                {venue ? venue[language].venue_name : ""}
              </VenueLink>
            ) : (
              <p>{venue ? venue[language].venue_name : ""} </p>
            )}

            <p>{venue ? venue.address[0].address_line : ""}</p>
          </EventTextBlock>
          <EventTextBlock hidden={documentation.length === 0}>
            <DocumentationLink
              hidden={documentation.length === 0}
              to={createPath(
                language,
                documentation[0] ? `documentation/${documentation[0].slug}` : ``
              )}
              fade
              // bg={transitionBackground}
              // cover
              // direction="down"
            >
              <DocumentationButton bgColour={"black"}>
                Documentation
              </DocumentationButton>
            </DocumentationLink>
          </EventTextBlock>
          <EventTextBlock>
            <p>
              {event.language == "other"
                ? event[`other_language${language == "EN" ? "" : "_de"}`]
                : freeAdmision[language][event.language]}
            </p>
            <p hidden={!event.is_free}>{freeAdmision[language].text}</p>
          </EventTextBlock>
          <EventTextBlock>
            <ShareLink>
              {" "}
              {eventContent[language].share}:{" "}
              <a target="__blank" href={facebookLink}>
                {" "}
                Facebook{" "}
              </a>
            </ShareLink>
          </EventTextBlock>
        </EventColumn>
        <EventColumn>
          <ImageResource id={event.thumbnail_image} withCaption={true} />
          <TextBlock>
            <EventTitle
              dangerouslySetInnerHTML={{
                __html: striptags(event[language].event_title, ["em"]),
              }}
            />
            <EventSubTitle
              dangerouslySetInnerHTML={{
                __html: striptags(event[language].event_subtitle, ["em"]),
              }}
            />
            
          </TextBlock>

          <EventDescription
            dangerouslySetInnerHTML={{
              __html: event[language].full_description,
            }}
          />

          <TextBlock hidden={!event.video}>
            <VideoContainer
              hidden={!event.video}
              dangerouslySetInnerHTML={{
                __html: event.video,
              }}
            />
          </TextBlock>

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
      <RelatedResources
        ids={
          event.related_resource && event.related_resource.length > 0
            ? event.related_resource
            : []
        }
        hidden={!event.related_resource || event.related_resource.length === 0}
      />
    </>
  )

  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    venues: state.venues,
    genres: state.resource_genres,
    experience: state.experience,
    documentation: state.documentation,
  }
}

export default connect(
  mapStateToProps,
  null
)(Event)
