import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { size } from "../../index.styles"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const DocumentationNavigatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  @media (max-width: ${size.mobileM}) {
    display:block;
    margin-top:-0.5em;
    padding: 0.0em 0 0 0.0em;
    width:100%;
    :after {
      content:"";
      clear:both;
      display:table;
    }
  }
  @media (min-width: ${size.mobileL}) {
    padding: 0.5em 0 0 0.7em;
  }
`

const DocumentationNavigatorButton = styled(AniLink)`
  font-size: 1.1rem;
  line-height:1;
  padding: 0.5em 0 0 1em;
  text-decoration: none;
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.45em;
    padding: 0 1em 0 0;
  }
  @media (min-width: ${size.mobileL}) {
    margin-bottom: 0.6em;
    margin-top: 0em;
    font-size: 1.35em;
    padding: 0 1em 0 0;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.1rem;
  line-height:1;
  padding: 0.5em 0 0 1em;
  }
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
