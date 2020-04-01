import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapperNoPad } from "../../templates/page.styles"
import styled from "styled-components"
import DocumentationNavigator from "./documentation-navigator";
import { size } from "../../index.styles"
import { NoMarginText, MarginBottomText } from "./documentation.styles";


const VideoContainer = styled.div`
  position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-top:1em;
    width: 100%;
    height: auto;
    > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    margin: 0 !important;
    height: 100%;
    }
`
const MargTop = styled.div`
margin:0em 0 0em;
@media (max-width: ${size.mobileM}) {
    margin:1em 0 0em;
  }
`
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
          <MarginBottomText> {documentationContent[language].documentation} </MarginBottomText>
          {/* <p style={NoMarg}> {documentationContent[language].language}: {documentationContent[language][props.documentation.language]} </p> */}
          <NoMarginText><em>
            {exhibitions[0][language].title}
            </em>
          </NoMarginText>
        </div>
        <MargTop>
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
        </MargTop>
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
    language: "Sprache",
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
