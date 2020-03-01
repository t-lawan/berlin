import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { size, Color } from "../../index.styles";
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as actionTypes from '../../store/action'
const RelatedNavigatorWrapper = styled.div`
  display: flex;
  margin-top:-2em;
  margin-bottom:0;
  flex-direction: row;
  background: ${Color.yellow};
  @media (max-width: ${size.mobileM}) {
    display:block;
    margin-top:0em;
    padding: 0.5em 0 0 0.7em;
    width:100%;
    :after {
      content:"";
      clear:both;
      display:table;
    }
  }
  @media (min-width: ${size.mobileL}) {
    display:block;
    margin-top:0em;
    padding: 0.5em 0 0 0.7em;
    width:100%;
    :after {
      content:"";
      clear:both;
      display:table;
    }
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.2em 0 0 0em;
    margin-bottom: 0.5em;
  }
  @media (min-width: ${size.laptop}) {
    margin-top:-2em;
    padding-left: 0;
  }
  @media (min-width: ${size.laptopM}) {
    margin-top:-1.5em;
    padding-left: 0;
  }
`

const RelatedNavigatorButton = styled(AniLink)`
  font-size: 1.0em;
  padding: 0.0em 1em 0 0em;
  text-decoration: none;
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.55em;
    padding: 0 1em 0 0;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
`

const RelatedNavigatorIcon = styled(FontAwesomeIcon)``

class ResourceNavigator extends React.Component {
  language;
  currentIndex;
  nextPage = () => {
    if (this.currentIndex + 1 === this.props.resources.length) {
      return `resource/${this.props.resources[0].slug}`
    }
    return `resource/${this.props.resources[this.currentIndex + 1].slug}`
  }

  previousPage = () => {
    if (this.currentIndex === 0) {
      return `resource/${this.props.resources[this.props.resources.length - 1].slug}`
    }
    return `resource/${this.props.resources[this.currentIndex - 1].slug}`
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.currentIndex = this.props.resources.findIndex(resource => {
      return resource.id === this.props.id
    })
    return (
      <RelatedNavigatorWrapper>
        <RelatedNavigatorButton
          fade
          onClick={() => this.props.startTransition()}
          to={createPath(this.language, this.previousPage())}
        >
          {`<`}
        </RelatedNavigatorButton>
        <RelatedNavigatorButton
          fade
          onClick={() => this.props.startTransition()}
          to={createPath(this.language, this.nextPage())}
        >
          {`>`}
        </RelatedNavigatorButton>
      </RelatedNavigatorWrapper>
    )
  }
}

ResourceNavigator.propTypes = {
  id: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    resources: state.resources,
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
)(ResourceNavigator)
