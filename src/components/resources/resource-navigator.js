import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const RelatedNavigatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`

const RelatedNavigatorButton = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1em;
`

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
    });
    return (
      <RelatedNavigatorWrapper>
        <RelatedNavigatorButton to={createPath(this.language, this.previousPage())}>
          -
        </RelatedNavigatorButton>
        <RelatedNavigatorButton to={createPath(this.language, this.nextPage())}>
          +
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

export default connect(
  mapStateToProps,
  null
)(ResourceNavigator)
