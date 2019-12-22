import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import AudioResource from "../../partials/AudioResource"
import DocumentationNavigator from "./documentation-navigator";


const DocumentationAudio = props => {
  let language = getCurrentLanguageString(props.languages)
  return (
    <PageWrapper>
      <DocumentationNavigator id={props.documentation.id} />      
      <AudioResource id={props.documentation.audio} withCaption={true} />
      <TwoColumnPageWrapper>
        <div>
          <p> {content[language].documentation}</p>
          <p>
            {" "}
            {content[language].language}:{" "}
            {content[language][props.documentation.language]}{" "}
          </p>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].title,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
    </PageWrapper>
  )
}

DocumentationAudio.propTypes = {
  documentation: PropTypes.object,
}

let content = {
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
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationAudio)
