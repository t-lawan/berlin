import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { EventHeading, EventText, EventCardWrapper } from "./eventcard.styles";


const EventCard = props => {
  const language = getCurrentLanguageString(props.languages)
  const event = props.event;
  return (
    <EventCardWrapper>
      <EventHeading>{event[language].display_time}</EventHeading>
      <EventText> {event.type}</EventText>
      <EventText>{event.venue}</EventText>
      <EventText>{event[language].short_calendar_description}</EventText>
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
