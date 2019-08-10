import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { EventsModel } from "../../models/EventsModel"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"

const DateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.05em solid black;
  border-right: 0.05em solid black;
  min-height: 400px;
  height: auto;
`
const EventCardWrapper = styled.div`
  border-bottom: 0.1em solid black;
  height: auto;
  padding: 0.25em 0.25em;
`

const CurrentDate = styled.div`
  border-bottom: 0.1em solid black;
  padding: 0.15em 0.25em;
`

const EventText = styled.p`
  font-size: x-small;
`

const EventHeading = styled.strong`
  font-size: x-small;
`

const DateCard = props => {
  const language = getCurrentLanguageString(props.languages)
  let renderComponents

  if (props.containsEvents) {
    renderComponents = (
      <DateCardWrapper>
        <CurrentDate>
          <h6> 30 sept/wed</h6>
        </CurrentDate>
        {props.events.map(event => (
          <EventCardWrapper key={event.id}>
            <EventHeading>{event[language].display_time}</EventHeading>
            <EventText>Talk</EventText>
            <EventText>{event.venue}</EventText>
            <EventText>{event[language].short_calendar_description}</EventText>
          </EventCardWrapper>
        ))}
      </DateCardWrapper>
    )
  } else {
    renderComponents = (
      <DateCardWrapper>
        <h1> Hello </h1>
      </DateCardWrapper>
    )
  }

  return renderComponents;
}

DateCard.propTypes = {
  containsEvents: PropTypes.bool.isRequired,
  events: PropTypes.array,
  month: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(DateCard)
