import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Color, size } from "../../index.styles"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  createPath,
  getCurrentLanguageString,
  truncateText,
  getNumberOfWords,
} from "../../utility/helper"
import { startTransition } from "../../store/action"

export const RelatedDocumentationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: calc(100% - 1em);
  margin-left: 0.5em;
  margin-bottom: 2em;
  margin-right: 0.5em;
  @media (max-width: ${size.mobileM}) {
    /*background-color: #FFF;*/
    margin-bottom: 0em;
    width: calc(100% - 0.7em);
    margin-left: 0.35em;
    margin-right: 0.35em;
    padding-bottom: 2em;
  }
  @media (min-width: ${size.laptop}) {
    margin-bottom: 7em;
  }
  @media (min-width: ${size.laptopM}) {
    margin-bottom: 10em;
  }
`

const DocumentationLink = styled(AniLink)`
  text-decoration: none;
  color: black;
  margin-bottom: 0.7em;
  position: relative;
  @media (max-width: ${size.mobileM}) {
    width: 50%;
  }
  @media (min-width: ${size.mobileL}) {
    width: 50%;
  }
  @media (min-width: ${size.mobileXL}) {
    width: 33.33%;
  }
  @media (min-width: ${size.laptopM}) {
    width: 25%;
  }
  @media (min-width: ${size.laptopL}) {
    width: 20%;
  }
`

const RelatedDocument = styled.div`
  background-color: rgb(237, 219, 159);
  /* background: ${props => (props.directlyRelated ? "#fbf95d" : "#fbf95d")}; */
  min-height: 9em;
  height: 100%;
  position: relative;
  padding: 0.5em 0.5em 1.5em;
  margin: 0.35em 0.35em 0 0.35em;
  :hover {
    > p {
      color: ${Color.red};
    }
  }
  border: ${props => (props.border ? "1px solid black" : "")} !important;
`

const DocumentationText = styled.p`
  font-size: 0.85em;
  transition: all 0.2s ease-in-out;
  margin-top: 0;
  :first-child {
    font-size: 1em !important;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }
  :last-child {
    margin-bottom: 0em;
    position: absolute;
    bottom: 0.7em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 1.1em !important;
  }
  @media (min-width: ${size.mobileSL}) {
    font-size: 0.85em !important;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.9em !important;
  }
  @media (min-width: ${size.laptop}) {
    :last-child {
      font-size: 0.85em !important;
    }
  }
`

const RelatedDocumentation = props => {
  const language = getCurrentLanguageString(props.languages)
  let documentations = []
  props.ids.forEach(id => {
    let r = props.documentation.find(doc => {
      return doc.id == id
    })
    documentations.push({ ...r, directlyRelated: true })
  })

  return (
    <RelatedDocumentationWrapper>
      {documentations.map((doc, index) => (
        <DocumentationLink
          key={index}
          onClick={() => props.startTransition()}
          to={createPath(language, `documentation/${doc.slug}`)}
          fade
        >
          <RelatedDocument
            border={props.border}
            directlyRelated={doc.directlyRelated}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: doc[language].title,
              }}
            />
            {/* <DocumentationText>
              {getNumberOfWords(doc.title) > 11
                ? `${truncateText(doc.title, 9)} ...`
                : doc.title}
            </DocumentationText> */}
          </RelatedDocument>
        </DocumentationLink>
      ))}
    </RelatedDocumentationWrapper>
  )
}

RelatedDocumentation.propTypes = {
  ids: PropTypes.array,
  border: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    resources: state.resources,
    documentation: state.documentation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch(startTransition()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedDocumentation)