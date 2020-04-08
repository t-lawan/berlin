import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import DocumentationNavigator from "./documentation-navigator";
import { documentationContent } from "./documentation-video";
import { NoMarginText, DocDesc } from "./documentation.styles";

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
          <NoMarginText> {documentationContent[language].documentation}</NoMarginText>
          <NoMarginText><em>
            {exhibitions[0][language].title}
            </em>
          </NoMarginText>
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
