import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const EventNavigatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`

const EventNavigatorButton = styled(AniLink)`
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1em;
`

class EventNavigator extends React.Component {
  language;
  currentIndex;
  nextPage = () => {
    if (this.currentIndex + 1 === this.props.events.length) {
      return `event/${this.props.events[0].slug}`
    }
    return `event/${this.props.events[this.currentIndex + 1].slug}`
  }

  previousPage = () => {
    if (this.currentIndex === 0) {
      return `event/${this.props.events[this.props.events.length - 1].slug}`
    }
    return `event/${this.props.events[this.currentIndex - 1].slug}`
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.currentIndex = this.props.events.findIndex(event => {
      return event.id === this.props.id
    });
    return (
      <EventNavigatorWrapper>
        <EventNavigatorButton to={createPath(this.language, this.previousPage())} fade>
          -
        </EventNavigatorButton>
        <EventNavigatorButton to={createPath(this.language, this.nextPage())} fade>
          +
        </EventNavigatorButton>
      </EventNavigatorWrapper>
    )
  }
}

EventNavigator.propTypes = {
  id: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    events: state.events
  }
}

export default connect(
  mapStateToProps,
  null
)(EventNavigator)
