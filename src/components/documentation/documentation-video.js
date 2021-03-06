import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  PageWrapper,
  TwoColumnPageWrapperNoPad,
} from "../../templates/page.styles"
import styled from "styled-components"
import DocumentationNavigator from "./documentation-navigator"
import { size } from "../../index.styles"
import striptags from "striptags"
import {
  NoMarginText,
  DocDesc,
  DocTitle,
  DocSubTitle,
} from "./documentation.styles"

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-top: 1em;
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
  @media (max-width: ${size.mobileM}) {
    margin-top: 0.8em;
  }
  @media (min-width: ${size.mobileXL}) {
    margin-top: 0em;
  }
  @media (min-width: ${size.laptop}) {
    margin-top: 1em;
  }
`
const MargTop = styled.div`
  margin: 0em 0 0em;
  @media (max-width: ${size.mobileM}) {
    margin: 1em 0 0em;
  }
`

const DocumentationVideo = props => {
  let language = getCurrentLanguageString(props.languages)
  let exhibitions = props.exhibitions.filter(exhibition => {
    return exhibition.experience == props.documentation.experience[0]
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
          <NoMarginText>
            {" "}
            {documentationContent[language].documentation}{" "}
          </NoMarginText>
          {/* <p style={NoMarg}> {documentationContent[language].language}: {documentationContent[language][props.documentation.language]} </p> */}
          {exhibitions.length > 0  ? (
            <NoMarginText>
              <em>{exhibitions[0][language].title}</em>
            </NoMarginText>
          ) : null}
        </div>
        <MargTop>
          <DocTitle
            dangerouslySetInnerHTML={{
              __html: striptags(props.documentation[language].title, ["em"]),
            }}
          />

          {props.documentation[language].subtitle ? (
            <DocSubTitle
              dangerouslySetInnerHTML={{
                __html: striptags(props.documentation[language].subtitle, [
                  "em",
                ]),
              }}
            />
          ) : null}

          {props.documentation[language].description ? (
            <DocDesc
              dangerouslySetInnerHTML={{
                __html: props.documentation[language].description,
              }}
            />
          ) : null}

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
    exhibitions: state.exhibitions,
  }
}
export default connect(mapStateToProps, null)(DocumentationVideo)
