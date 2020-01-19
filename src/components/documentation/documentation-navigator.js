import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DocumentationNavigatorWrapper = styled.div`
  display: flex;
  margin-top:-1.5em;
  margin-bottom:0;
  flex-direction: row;
  background: transparent;
`

const DocumentationNavigatorButton = styled(AniLink)`
   font-size: 1.1rem;
  padding: 0.0em 1em 0 0em;
  text-decoration: none;
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
            bg={transitionBackground}
            cover direction="down"
            to={createPath(this.language, this.previousPage())}
          >
            {`<`}
          </DocumentationNavigatorButton>
          <DocumentationNavigatorButton
            bg={transitionBackground}
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
