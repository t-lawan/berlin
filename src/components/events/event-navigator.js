import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import PropTypes from "prop-types"
import {
  EventNavigatorWrapper,
  EventNavigatorButton,
} from "./event-navigator.styles"
import * as actionTypes from '../../store/action'

class EventNavigator extends React.Component {
  language
  currentIndex
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
    })
    return (
      <EventNavigatorWrapper>
        <EventNavigatorButton
          to={createPath(this.language, this.previousPage())}
          onClick={() => this.props.startTransition()}
        >
          {`<`}
        </EventNavigatorButton>
        <EventNavigatorButton
          to={createPath(this.language, this.nextPage())}
          onClick={() => this.props.startTransition()}
        >
          {`>`}
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
    events: state.events,
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
)(EventNavigator)
