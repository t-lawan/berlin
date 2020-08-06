import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import {
  EventHeading,
  EventCardWrapper,
  EventCardLink,
  EventSection,
} from "./eventcard.styles"
import { startTransition } from "../../store/action";

const EventCard = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = props.event
  return (
    <EventCardWrapper>
      <EventCardLink onClick={() => props.startTransition()} to={createPath(language, event.slug)}>
        {props.experience != 4 || event.item === "event" ? <EventHeading>{event[language].display_time}</EventHeading> : null}
        {event.item === "exhibition" ? (
          <p> <em> {event[language].title} </em></p>
        ) : (
          <EventSection
            dangerouslySetInnerHTML={{ __html: event[language].title }}
          />
        )}
      </EventCardLink>
    </EventCardWrapper>
  )
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch(startTransition()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCard)
