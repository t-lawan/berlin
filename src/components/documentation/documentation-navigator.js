import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import {
  getCurrentLanguageString,
  createPath,
} from "../../utility/helper"
import { Color, size } from "../../index.styles"
import PropTypes from "prop-types"
import * as actionTypes from "../../store/action"
import { Link } from "gatsby";


const DocumentationNavigatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  @media (max-width: ${size.mobileM}) {
    display: block;
    margin-top: -0.5em;
    padding: 0em 0 0 0em;
    width: 100%;
    :after {
      content: "";
      clear: both;
      display: table;
    }
  }
  @media (min-width: ${size.mobileL}) {
    padding: 0.5em 0 0 0.7em;
  }
  @media (min-width: ${size.mobileSL}) {
    padding: 0;
    margin: -0.5em 0 0.5em 0;
  }
  @media (min-width: ${size.laptop}) {
    margin: -2em 0 0.5em 0;
    padding: 0;
  }
  @media (min-width: ${size.laptopM}) {
    margin: -2.5em 0 0.8em 0;
    padding: 0;
  }
  @media (min-width: ${size.laptopL}) {
    margin: -2.5em 0 1.1em 0;
  }
`

const DocumentationNavigatorButton = styled(Link)`
  font-size: 1em;
  line-height: 1;
  padding: 0.5em 0 0 1em;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.35em;
    padding: 0 1.05em 0 0;
  }
  
  @media (min-width: ${size.mobileL}) {
    margin-bottom: 0.6em;
    margin-top: 0em;
    font-size: 1.35em;
    padding: 0 1em 0 0;
  }
  @media (min-width: ${size.mobileSL}) {
  font-size: 1.2em;
  margin-bottom: 0.2em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
    margin-bottom: 0.6em;
    line-height: 1;
    padding: 0.4em 1em 0 0em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
    line-height: 1;
    padding: 0.3em 1em 0 0em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
    padding: 0.0em 1em 0 0em;
  }
`

class DocumentationNavigator extends React.Component {
  language
  currentIndex

  nextPage = () => {
    if (this.currentIndex + 1 === this.props.documentation.length) {
      return `documentation/${this.props.documentation[0].slug}`
    }

    return `documentation/${
      this.props.documentation[this.currentIndex + 1].slug
    }`
  }

  previousPage = () => {
    if (this.currentIndex === 0) {
      return `documentation/${
        this.props.documentation[this.props.documentation.length - 1].slug
      }`
    }
    return `documentation/${
      this.props.documentation[this.currentIndex - 1].slug
    }`
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.currentIndex = this.props.documentation.findIndex(documentation => {
      return documentation.id === this.props.id
    })

    return (
      <DocumentationNavigatorWrapper>
        <DocumentationNavigatorButton
          onClick={() => this.props.startTransition()}
          to={createPath(this.language, this.previousPage())}
        >
          {/* <DocumentationNavigatorButton
            bg={transitionBackground}
            cover direction="down"
            to={createPath(this.language, this.previousPage())}
          > */}
          {`<`}
        </DocumentationNavigatorButton>
        <DocumentationNavigatorButton
          onClick={() => this.props.startTransition()}
          to={createPath(this.language, this.nextPage())}
        >
          {/* <DocumentationNavigatorButton
            bg={transitionBackground}
            to={createPath(this.language, this.nextPage())}
          > */}
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
const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentationNavigator)
