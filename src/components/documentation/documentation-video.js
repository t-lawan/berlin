import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapperNoPad } from "../../templates/page.styles"
import styled from "styled-components"
import DocumentationNavigator from "./documentation-navigator";

const VideoContainer = styled.div`
  position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-top:2em;
    width: 100%;
    height: auto;
    > iframe {
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`
const NoMarg = {
margin:"0",
}

const MargBottom = {
margin:"0 0 0.7em"
}

const DocumentationVideo = props => {
  let language = getCurrentLanguageString(props.languages);
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })
  return (
    <PageWrapper>
      <DocumentationNavigator id={props.documentation.id} />
      <VideoContainer
        dangerouslySetInnerHTML={{
          __html: props.documentation.video,
        }}
      />
      <TwoColumnPageWrapperNoPad>
        <div>
          <p style={MargBottom}> {documentationContent[language].documentation} </p>
          <p style={NoMarg}> {documentationContent[language].language}: {documentationContent[language][props.documentation.language]} </p>
          <p style={NoMarg}>
            {exhibitions[0][language].title}
          </p>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].title,
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].subtitle,
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].doc_credits,
            }}
          />
        </div>
      </TwoColumnPageWrapperNoPad>
    </PageWrapper>
  )
}

DocumentationVideo.propTypes = {
  documentation: PropTypes.object,
}

export const documentationContent = {
  EN: {
    language: "Language",
    documentation: "Documentation",
    en: "English",
    de: "German",
    other: "Other",
  },
  DE: {
    language: "Language",
    documentation: "Dokumentation",
    en: "English",
    de: "Deutsch",
    other: "Other",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    exhibitions: state.exhibitions
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationVideo)
