import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import styled from "styled-components"

const VideoContainer = styled.div`
  text-align: center;
  width: 100%;
`
const DocumentationVideo = props => {
  let language = getCurrentLanguageString(props.languages)
  console.log(props.documentation)
  return (
    <PageWrapper>
      <VideoContainer
        dangerouslySetInnerHTML={{
          __html: props.documentation.video,
        }}
      />
      <TwoColumnPageWrapper>
        <div>
          <p> Documentation</p>
          <p> {content[language].language}: {content[language][props.documentation.language]} </p>
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
      </TwoColumnPageWrapper>
    </PageWrapper>
  )
}

DocumentationVideo.propTypes = {
  documentation: PropTypes.object,
}

let content = {
  EN: {
    language: "Language",
    en: "English",
    de: "German",
    other: "Other",
  },
  DE: {
    language: "Language",
    en: "English",
    de: "Deutsch",
    other: "Other",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationVideo)