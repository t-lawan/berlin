import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import * as actionTypes from "../../store/action"
import { generateEvents } from "../../models/EventsModel"
import { generateExhibitions } from "../../models/ExhibitionModel"
import { generateNewsArticles } from "../../models/NewsModel"

const State = props => {
  if (!props.isLoaded) {
    const data = useStaticQuery(
      graphql`
        {
          allWordpressWpEvents {
            edges {
              node {
                id
                slug
                acf {
                  DE {
                    display_time
                    event_subtitle
                    event_title
                    full_description
                    other_event_venue
                    rsvp_note
                    rsvp_required
                    short_calendar_description
                    special_info_notice
                  }
                  EN {
                    display_time
                    full_description
                    event_title
                    event_subtitle
                    other_event_venue
                    rsvp_note
                    rsvp_required
                    short_calendar_description
                    special_info_notice
                  }
                  end_date
                  event_is_free
                  event_language
                  event_limited_capacity
                  other_event_language
                  participants
                  start_date
                  start_time
                  template
                }
              }
            }
          }
          allWordpressWpExhibitions {
            edges {
              node {
                id
                wordpress_id
                slug
                acf {
                  DE {
                    description
                    subtitle
                    title
                  }
                  EN {
                    description
                    subtitle
                    title
                  }
                  end_date
                  exp_number
                  start_date
                }
              }
            }
          }
          allWordpressWpParticipants {
            edges {
              node {
                wordpress_id
                slug
                acf {
                  exp_number
                  firstname
                  image_gallery
                  is_artist_in_exhibition
                  lastname
                  participant_group
                  personal_website
                  related_resources
                  EN {
                    group_bios
                    project_description
                    short_bio
                  }
                  participant_venue
                  DE {
                    group_bios
                    project_description
                    short_bio
                  }
                }
              }
            }
          }
          allWordpressWpVenue {
            edges {
              node {
                id
                wordpress_id
                slug
                acf {
                  DE {
                    access_info
                    venue_name
                  }
                  google_map_link
                  thumbnail_image
                  venue_address {
                    address_line
                  }
                  venue_city
                  venue_plz
                  venue_public_transit {
                    transit_option
                  }
                  venue_tel
                  venue_wheelchair_access
                }
              }
            }
          }
        }
      `
    )
    let events = Convert.toModelArray(
      data.allWordpressWpEvents,
      Convert.toEventModel
    )
    let news = generateNewsArticles(20)

    events = generateEvents(20)

    let exhibitions = Convert.toModelArray(
      data.allWordpressWpExhibitions,
      Convert.toExhibitionModel
    )

    exhibitions = generateExhibitions(20)

    let participants = Convert.toModelArray(
      data.allWordpressWpParticipants,
      Convert.toParticipantModel
    )

    let venues = Convert.toModelArray(
      data.allWordpressWpVenue,
      Convert.toVenueModel
    )

    props.setVenues(venues)
    props.setParticipants(participants)
    props.setEvents(events)
    props.setNews(news)
    props.setExhibitions(exhibitions)
    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEvents: events =>
      dispatch({ type: actionTypes.SET_EVENTS, events: events }),
    setExhibitions: exhibitions =>
      dispatch({ type: actionTypes.SET_EXHIBITIONS, exhibitions: exhibitions }),
    loaded: () => dispatch({ type: actionTypes.IS_LOADED }),
    setNews: news => dispatch({ type: actionTypes.SET_NEWS, news: news }),
    setParticipants: participants =>
      dispatch({
        type: actionTypes.SET_PARTICIPANTS,
        participants: participants,
      }),
    setVenues: venues =>
      dispatch({
        type: actionTypes.SET_VENUES,
        venues: venues,
      }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
