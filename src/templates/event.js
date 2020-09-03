import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  truncateText,
  pageMap,
} from "../utility/helper"
import { Convert } from "../utility/convert"
import styled from "styled-components"
import UpcomingEvents, {
  UpcomingEventsContent,
} from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ImageResource from "../partials/ImageResource"
import { getVenue, getDocument } from "../store/selector"
import { TwoColumnPageWrapper, TextBlock } from "./page.styles"
import RelatedResources from "../components/resources/related-resources"
import EventNavigator from "../components/events/event-navigator"
import { Color, size, hideDisplayForMobile, LargeButton } from "../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import * as actionTypes from "../store/action"
import { DateManager } from "../utility/date"

const EventColumn = styled.div`
  :first-child {
    border-bottom: solid 1px #000;
    margin-bottom: 1.3em;
    margin-top: 1em;
  }
  @media (min-width: ${size.tablet}) {
    :first-child {
      border-bottom: none;
      margin-bottom: 0;
      margin-top: 0em;
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
    width: 90%;
    > div {
      margin-bottom: 0.2em;
      :last-child {
        margin-bottom: 0;
      }
    }
    > div > p:first-child {
      width: 60%;
      display: inline-block;
    }
    > div > p:last-child {
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
  margin-top: -1.2em;
  margin-bottom: 0.5em;
  font-size: 1em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
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
  @media (min-width: ${size.mobileSL}) {
    font-size: 1.2em;
    max-width: 70%;
    margin-bottom: 1em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.1em;
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
  @media (min-width: ${size.mobileSL}) {
    font-size: 0.85em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
  }
`

const EventDescription = styled.div`
  p {
    line-height: 1.4;
    > a {
      font-size: 1em;
      border-bottom: solid thin;
      border-color: ${Color.red};
      :hover {
        color: ${Color.red};
      }
    }
  }
`
const OtherVenue = styled.div`
  p {
    width: 100% !important;
    display: block;
  }
  > p > a {
    font-size: 1em;
      border-bottom: solid thin;
      border-color: ${Color.red};
      :hover {
        color: ${Color.red};
      }
  }
`

const EventRsvpText = styled.div`
  p {
    > a {
      font-size: 1em;
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
const dateStyle = {
  whiteSpace: "pre-line",
}

const eventContent = {
  EN: {
    share: "Share",
  },
  DE: {
    share: "Teilen",
  },
}

class Event extends React.Component {
  language
  event
  renderComponent
  hasUpdated = false

  componentDidMount() {
    let exp = parseInt(this.event.experience[this.event.experience.length - 1])
    if (this.event.experience && !this.event.experience.includes(this.props.active_experience.toString())) {
      this.props.changeExperience(exp)

    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.experience !== this.props.experience) {
      let exp = parseInt(this.event.experience[0])
      if (this.event.experience && !this.event.experience.includes(this.props.experience.toString())) {
        this.props.changeExperience(exp)
        this.hasUpdated = true
  
      }
    }
  }

  thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.event = Convert.toEventModel(this.props.pageContext)
    const facebookLink =
      typeof window !== `undefined`
        ? `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
        : ""
    this.event.dates = this.event.dates.sort((a, b) => {
      return a.start_date - b.start_date
    })
    let venue = this.event.venue
      ? getVenue(this.props.venues, this.event.venue[0])
      : null
    let documentation = []
    if (this.event.documentation) {
      documentation = this.props.documentation.filter(doc => {
        return doc.id === this.event.documentation[0]
      })
    }

    if (this.event.related_resource && this.event.related_resource.length > 0) {
      this.event.related_resource = this.event.related_resource.map(
        resource => {
          return resource.wordpress_id
        }
      )
    }
    let title = truncateText(
      striptags(
        this.event[`${this.props.pageContext.language.toUpperCase()}`]
          .event_title
      )
    )
    let titleHeading =
      this.language === "en"
        ? "11th Berlin Biennale for Contemporary Art"
        : "11. Berlin Biennale für zeitgenössische Kunst"

    let path = pageMap.find(pg => {
      return pg["EN"] == "event"
    })

    let description = truncateText(
      striptags(
        this.event[`${this.props.pageContext.language.toUpperCase()}`]
          .full_description
      )
    )
    this.renderComponent = (
      <>
        <EventNavigator id={this.event.id} />
        <TwoColumnPageWrapper>
          <SEO
            title={title}
            description={description}
            lang={this.props.pageContext.language}
            image={this.event.thumbnail_image}
            pathname={`${path[this.props.pageContext.language.toUpperCase()]}/${
              this.event.slug
            }`}
          />
          <EventColumn>
            <EventTitleMob
              dangerouslySetInnerHTML={{
                __html: striptags(this.event[this.language].event_title, [
                  "em",
                ]),
              }}
            />
            {this.event[this.language].event_subtitle ? (
              <EventSubTitleMob
                dangerouslySetInnerHTML={{
                  __html: striptags(this.event[this.language].event_subtitle, [
                    "em",
                  ]),
                }}
              />
            ) : null}

            <EventTextBlock>
              {this.event.dates.map((date, index) => (
                <div key={index}>
                  <p style={dateStyle}>
                    {DateManager.createLongDateString(
                      date.start_date,
                      this.language.toLowerCase()
                    )}
                    {date.end_date
                      ? `–\n${DateManager.createLongDateString(
                          date.end_date,
                          this.language.toLowerCase()
                        )}`
                      : null}
                  </p>
                  <p>{`${date[this.language].display_time}`}</p>
                </div>
              ))}
              <p hidden={!this.event[this.language].rsvp_required}>
                {UpcomingEventsContent[this.language].rsvp}
              </p>
            </EventTextBlock>
            <EventTextBlock>
              {/* {props.experience == 4 ? (
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
              )} */}
              {venue ? (
                <p> {venue[this.language].venue_name} </p>
              ) : this.event[this.language].other_event_venue ? (
                <OtherVenue
                  dangerouslySetInnerHTML={{
                    __html: this.event[this.language].other_event_venue,
                  }}
                />
              ) : null}

              <p>{venue ? venue.address[0].address_line : ""}</p>
            </EventTextBlock>
            <EventTextBlock hidden={documentation.length === 0}>
              <DocumentationLink
                hidden={documentation.length === 0}
                to={createPath(
                  this.language,
                  documentation[0]
                    ? `documentation/${documentation[0].slug}`
                    : ``
                )}
                // fade
                onClick={() => this.props.startTransition()}
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
                {this.event.language == "other"
                  ? this.event[
                      `other_language${this.language == "EN" ? "" : "_de"}`
                    ]
                  : UpcomingEventsContent[this.language][this.event.language]}
              </p>
              <p hidden={!this.event.is_free}>
                {" "}
                {`${UpcomingEventsContent[this.language].free_admission}${
                  this.event.limited_capacity
                    ? `, ${
                        UpcomingEventsContent[this.language].limited_capacity
                      }`
                    : ""
                }`}
              </p>
            </EventTextBlock>
            <EventTextBlock>
              <ShareLink>
                {" "}
                {eventContent[this.language].share}:{" "}
                <a
                  target="__blank"
                  rel="noopener noreferrer"
                  href={facebookLink}
                >
                  {" "}
                  Facebook{" "}
                </a>
              </ShareLink>
            </EventTextBlock>
          </EventColumn>
          <EventColumn>
            <ImageResource id={this.event.thumbnail_image} withCaption={true} />
            <TextBlock>
              <EventTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(this.event[this.language].event_title, [
                    "em",
                  ]),
                }}
              />

              {this.event[this.language].event_subtitle ? (
                <EventSubTitle
                  dangerouslySetInnerHTML={{
                    __html: striptags(
                      this.event[this.language].event_subtitle,
                      ["em"]
                    ),
                  }}
                />
              ) : null}
            </TextBlock>

            <EventDescription
              dangerouslySetInnerHTML={{
                __html: this.event[this.language].full_description,
              }}
            />

            <TextBlock hidden={!this.event.video}>
              <VideoContainer
                hidden={!this.event.video}
                dangerouslySetInnerHTML={{
                  __html: this.event.video,
                }}
              />
            </TextBlock>

            <TextBlock hidden={!this.event[this.language].rsvp_required}>
              <EventRsvpText
                hidden={!this.event[this.language].rsvp_required}
                dangerouslySetInnerHTML={{
                  __html: this.event[this.language].rsvp_note,
                }}
              />
            </TextBlock>
          </EventColumn>
        </TwoColumnPageWrapper>
        <RelatedResources
          border={false}
          showRelated={true}
          ids={
            this.event.related_resource &&
            this.event.related_resource.length > 0
              ? this.event.related_resource
              : []
          }
          hidden={
            !this.event.related_resource ||
            this.event.related_resource.length === 0
          }
        />
      </>
    )
    return (
      <Layout
        firstColumn={this.renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={this.thirdColumn}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    venues: state.venues,
    genres: state.resource_genres,
    experience: state.experience,
    documentation: state.documentation,
    documents: state.documents,
    active_experience: state.active_experience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
    changeExperience: experience =>
      dispatch({ type: actionTypes.CHANGE_EXPERIENCE, experience: experience }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
