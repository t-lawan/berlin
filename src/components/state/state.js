import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import * as actionTypes from "../../store/action"

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
        }
      `
    )
    const events = Convert.toModelArray(
      data.allWordpressWpEvents,
      Convert.toEventModel
    )

    const exhibitions = Convert.toModelArray(
      data.allWordpressWpExhibitions,
      Convert.toExhibitionModel
    )

    props.setEvents(events)
    props.setExhibitions(exhibitions)
    props.loaded();
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
