import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { EventHeading, EventText, EventCardWrapper, EventCardLink } from "./eventcard.styles"

const EventCard = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = props.event
  return (
    <EventCardWrapper>
      <EventCardLink fade to={createPath(language, event.slug)} >
        <EventHeading>{event[language].display_time}</EventHeading>
        <EventText
          dangerouslySetInnerHTML={{ __html: event[language].title }}
        />
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
  }
}

export default connect(
  mapStateToProps,
  null
)(EventCard)
