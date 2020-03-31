import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import DocumentationNavigator from "./documentation-navigator";
import { documentationContent } from "./documentation-video";

const DocumentationText = props => {
  let language = getCurrentLanguageString(props.languages)
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })


  return (
    <PageWrapper>
      <DocumentationNavigator id={props.documentation.id} />
      <TwoColumnPageWrapper>
        <div>
          <p> {documentationContent[language].documentation}</p>
          <p><em>
            {exhibitions[0][language].title}
            </em>
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
        </div>
      </TwoColumnPageWrapper>
    </PageWrapper>
  )
}

DocumentationText.propTypes = {
  documentation: PropTypes.object,
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
)(DocumentationText)
