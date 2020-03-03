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
import * as actionTypes from '../store/action';

const EventColumn = styled.div`
:first-child {
  border-bottom: solid 1px #000;
  margin-bottom: 1.3em;
  margin-top:1em;
}
@media (min-width: ${size.tablet}) {
    :first-child {
    border-bottom: none;
    margin-bottom: 0;
    margin-top:0em;
    }
  }
`

const EventTextBlock = styled(TextBlock)`
  p {
    margin: 0;
    line-height: 1.3;
    > a {
      font-size: 1em;
    }
  }
  margin: 0 0 0em 0;
  padding: 0;
  @media (max-width: ${size.tabletL}) {
    margin: 0 0 0.7em 0;
  }
  @media (max-width: ${size.tabletL}) {
    width:90%;
    > div:first-child > p:first-child {
        width: 60%;
        display: inline-block;
    } 
    > div:first-child > p:last-child {
        width: 40%;
        display: inline-block;
    }
  }
`
const EventTitle = styled.h1`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.6em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.7em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.9em;
  }
  line-height: 1.2;
  ${hideDisplayForMobile};
  @media (max-width: 1023px) {
    display: none;
  }
`
const EventSubTitle = styled.h2`
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  margin-top:-1.2em;
  margin-bottom:0.5em;
  font-size: 1em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
  line-height: 1.4;
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
  @media (min-width: ${size.tablet}) {
    font-size: 1.1em;
    max-width: 70%;
    margin-bottom: 1.5em;
  }
  @media (min-width: ${size.laptop}) {
    display: none;
  }
`
const EventSubTitleMob = styled.h2`
  margin: -1em 0 1em;
  line-height: 1.3;
  @media (min-width: ${size.laptop}) {
    display: none;
  }
  @media (min-width: ${size.mobileS}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
  }
`

const EventDescription = styled.div`
  p {
    line-height: 1.4;
    > a {
      font-size:1em;
    }
    
  }
`

const EventRsvpText = styled.div`
  p {
    > a {
      font-size:1em;
      border-bottom: solid thin;
      border-color: ${Color.red};
      :hover {
        color: ${Color.red};
      }
    }
  }
`

const VenueLink = styled(AniLink)`
  text-decoration: none;
  border-bottom: solid thin;
  border-color: ${Color.red};
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
          {event[language].event_subtitle ? (
              <EventSubTitleMob
                dangerouslySetInnerHTML={{
                  __html: striptags(event[language].event_subtitle, ["em"]),
                }}
              />
            ) : null}
          
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
              // fade
              onClick={() => props.startTransition()}
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
            <p hidden={!event.is_free}> {`${freeAdmision[language].free_admission}${event.limited_capacity ? `, ${freeAdmision[language].limited_capacity}` : ''}`}</p>
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
            
            {event[language].event_subtitle ? (
              <EventSubTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(event[language].event_subtitle, ["em"]),
                }}
              />
            ) : null}
            
            
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

          <TextBlock hidden={!event[language].rsvp_required}>
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

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch({ type: actionTypes.START_TRANSITION}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event)
