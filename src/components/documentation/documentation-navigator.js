import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DocumentationNavigatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`

const DocumentationNavigatorButton = styled(AniLink)`
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1em;
`


class DocumentationNavigator extends React.Component {
  language
  currentIndex

  nextPage = () => {
    if (this.currentIndex + 1 === this.props.documentation.length) {
      return `documentation/${this.props.documentation[0].slug}`
    }

    return `documentation/${this.props.documentation[this.currentIndex + 1].slug}`
  }

  previousPage = () => {
    if (this.currentIndex === 0) {
      return `documentation/${this.props.documentation[this.props.documentation.length - 1].slug}`
    }
    return `documentation/${this.props.documentation[this.currentIndex - 1].slug}`
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.currentIndex = this.props.documentation.findIndex(documentation => {
        return documentation.id === this.props.id
      })

    return (
        <DocumentationNavigatorWrapper>
          <DocumentationNavigatorButton
            fade
            to={createPath(this.language, this.previousPage())}
          >
            {`<`}
          </DocumentationNavigatorButton>
          <DocumentationNavigatorButton
            fade
            to={createPath(this.language, this.nextPage())}
          >
            {`>`}
          </DocumentationNavigatorButton>
        </DocumentationNavigatorWrapper>
      )
  }
}

DocumentationNavigator.propTypes = {
  id: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documentation: state.documentation,
  }
}

export default connect(
  mapStateToProps,
  null
)(DocumentationNavigator)