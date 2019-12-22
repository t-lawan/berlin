import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import DocumentationNavigator from "./documentation-navigator";

const DocumentationText = props => {
  let language = getCurrentLanguageString(props.languages)

  return (
    <PageWrapper>
      <DocumentationNavigator id={props.documentation.id} />
      <TwoColumnPageWrapper>
        <div>
          <p> {content[language].documentation}</p>
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
        </div>
      </TwoColumnPageWrapper>
    </PageWrapper>
  )
}

DocumentationText.propTypes = {
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
)(DocumentationText)
